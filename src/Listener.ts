import {ParPlusPlusListener} from './antlr/ParPlusPlusListener';
import { FunctionContext, Func_paramsContext, ProgramContext, TypeContext, VarsContext, ExprContext, Var_id_declContext, Exp5Context, Exp6Context, Addsub_opContext, Muldiv_opContext } from './antlr/ParPlusPlusParser';
import { FuncTable, stringToValueType, ValueType } from './SymbolTables';
import {SemanticCube, Op} from './SemanticCube';
import {MemoryContext, MemoryType} from './Memory';
import {QuadrupleContext, QuadrupleAction} from './Quadruple';
import { createVoidZero } from 'typescript';

export default class Listener implements ParPlusPlusListener {
  private funcTable: FuncTable;
  private currentType: ValueType;
  private currentFunc: string;
  private memory: MemoryContext;
  private quads: QuadrupleContext;

  constructor() {
    this.funcTable = {
      'global': {
        name: 'global',
        type: ValueType.VOID,
        vars: {},
      },
    };
    this.currentType = ValueType.VOID;
    this.currentFunc = 'global';
    this.memory = new MemoryContext();
    this.quads = new QuadrupleContext();
  }

  exitProgram(): void {
    console.log(this.funcTable);
    console.log(this.quads.quads);
  }
  
  exitType(ctx: TypeContext): void {
    this.currentType = stringToValueType(ctx.text);
  }

  exitVar_id_decl(ctx: Var_id_declContext): void {
    const id = ctx.ID().text;

    // check if exists
    if (this.funcTable[this.currentFunc].vars[id] != null) {
      throw new Error(`Variable ${id} already declared.`);
    }

    const memType = this.currentFunc === 'global' ? MemoryType.Global : MemoryType.Local;

    this.funcTable[this.currentFunc].vars[id] = {
      name: id,
      type: this.currentType,
      virtualDir: this.memory.newVar(this.currentType, memType),
    };
  }

  enterFunction(ctx: FunctionContext): void {
    const name = ctx.ID().text;
    const type = stringToValueType(ctx.type() != null ? ctx.type().text : 'void');
    this.currentFunc = name;
    this.memory.resetLocals();
    
    // check if exists
    if (this.funcTable[name] != null) {
      throw new Error(`Function ${name} already declared.`);
    }

    this.funcTable[name] = {
      name,
      type,
      vars: {}
    };
  }

  exitFunc_params(ctx: Func_paramsContext): void {
    const n = ctx.type().length;
    const names = ctx.ID();
    const types = ctx.type();

    for (let i = 0; i < n; i++) {
      const name = names[i].text;

      // check if exists
      if (this.funcTable[this.currentFunc].vars[name] != null) {
        throw new Error(`Variable ${name} already declared.`);
      }

      const type = stringToValueType(types[i].text);

      this.funcTable[this.currentFunc].vars[name] = {
        name,
        type,
        virtualDir: this.memory.newVar(type, MemoryType.Local),
      };
    }
  }

  exitExpr(ctx: ExprContext): void {
    if (this.quads.operators.peek() == null) {
      this.quads.operators.pop();
    }
  }

  exitExp5(ctx: Exp5Context): void {
    if (this.quads.operators.peek() == null) {
      return;
    }

    if (this.quads.operators.peek() === Op.ADD || this.quads.operators.peek() === Op.SUB) {
      const right = this.quads.operands.pop();
      const left = this.quads.operands.pop();
      const op = this.quads.operators.pop();
      const rightType = this.memory.getTypeForAddress(right);
      const leftType = this.memory.getTypeForAddress(left);
      const resultType = SemanticCube[leftType][rightType][op];

      // check if types are compatible
      if (resultType == null) {
        throw new Error('Type mismatch');
      }

      const result = this.memory.newVar(resultType, MemoryType.Temp);
      const action = op === Op.ADD ? QuadrupleAction.ADD : QuadrupleAction.SUB;
      this.quads.create(action, left, right, result);
      this.quads.operands.push(result);
    }
  }

  enterExp6(ctx: Exp6Context): void {
    if (ctx.expr() != null) {
      this.quads.operators.push(null);
    }
  }

  exitExp6(ctx: Exp6Context): void {
    if (ctx.var_id() != null) {
      const name = ctx.var_id().ID().text;
      let variable = this.funcTable[this.currentFunc].vars[name];
      
      // check if exists
      if (variable == null) {
        if (this.funcTable['global'].vars[name] == null) {
          throw new Error(`Undeclared variable ${name}`);
        } else {
          variable = this.funcTable['global'].vars[name];
        }
      }

      this.quads.operands.push(variable.virtualDir);
    } else if (ctx.INT_VAL() != null) {
      this.quads.operands.push(this.memory.newInt(MemoryType.Constant));
    } else if (ctx.FLOAT_VAL() != null) {
      this.quads.operands.push(this.memory.newFloat(MemoryType.Constant));
    } else if (ctx.CHAR_VAL() != null) {
      this.quads.operands.push(this.memory.newChar(MemoryType.Constant));
    } 

    if (this.quads.operators.peek() == null) {
      return;
    }

    if (this.quads.operators.peek() == Op.MUL || this.quads.operators.peek() == Op.DIV){
      const right = this.quads.operands.pop();
      const left = this.quads.operands.pop();
      const op = this.quads.operators.pop();
      const rightType = this.memory.getTypeForAddress(right);
      const leftType = this.memory.getTypeForAddress(left);
      const resultType = SemanticCube[leftType][rightType][op]
      
      // check if types are compatible
      if (resultType == null) {
        throw new Error('Type mismatch');
      }

      const result = this.memory.newVar(resultType, MemoryType.Temp);
      const action = op === Op.MUL ? QuadrupleAction.MUL : QuadrupleAction.DIV;
      this.quads.create(action, left, right, result);
      this.quads.operands.push(result);
    }

  }

  exitAddsub_op(ctx: Addsub_opContext): void {
    this.quads.operators.push(ctx.text === '+' ? Op.ADD : Op.SUB);
  }

  exitMuldiv_op(ctx: Muldiv_opContext): void {
    this.quads.operators.push(ctx.text === '*' ? Op.MUL : Op.DIV);
  }
}