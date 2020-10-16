import {ParPlusPlusListener} from './antlr/ParPlusPlusListener';
import { FunctionContext, Func_paramsContext, ProgramContext, TypeContext, VarsContext, ExprContext, Exp1Context, Exp2Context, Exp3Context, Exp4Context, Var_id_declContext, Exp5Context, Exp6Context, Addsub_opContext, Muldiv_opContext, Eq_opContext, Rel_opContext, Or_opContext, And_opContext, If_exprContext, If_stmtContext, Else_stmtContext, AssignmentContext } from './antlr/ParPlusPlusParser';
import { FuncTable, stringToValueType, ValueType } from './SymbolTables';
import {SemanticCube, Op} from './SemanticCube';
import {MemoryContext, MemoryType} from './Memory';
import {QuadrupleContext, QuadrupleAction} from './Quadruple';
import { createVoidZero, textChangeRangeIsUnchanged } from 'typescript';

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
 
  exitAssignment(ctx: AssignmentContext): void {
    let variable = this.funcTable[this.currentFunc].vars[ctx.var_id().ID().text];
    
    // check if exists
    if (variable == null) {
      variable = this.funcTable['global'].vars[ctx.var_id().ID().text];
      if (variable == null) {
        throw new Error('Undeclared variable.');
      }
    }

    const type = this.memory.getTypeForAddress(this.quads.operands.peek());
    
    if (SemanticCube[variable.type][type][Op.ASSIGN] != null){
      this.quads.create(QuadrupleAction.ASSIGN, this.quads.operands.pop(), null, variable.virtualDir);
    } else {
      throw new Error('Type mismatch');
    }
  }

  exitExpr(ctx: ExprContext): void {
    if (this.quads.operators.peek() == null) {
      this.quads.operators.pop();
    }
  }

  exitExp1(ctx: Exp1Context): void {
    if (this.quads.operators.peek() == null) {
      return;
    }

    if (this.quads.operators.peek() === Op.OR) {
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
      this.quads.create(QuadrupleAction.OR, left, right, result);
      this.quads.operands.push(result);
    }
  }
  
  exitExp2(ctx: Exp2Context): void {
    if (this.quads.operators.peek() == null) {
      return;
    }

    if (this.quads.operators.peek() === Op.AND) {
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
      this.quads.create(QuadrupleAction.AND, left, right, result);
      this.quads.operands.push(result);
    }
  }

  exitExp3(ctx: Exp3Context): void {
    if (this.quads.operators.peek() == null) {
      return;
    }

    if (this.quads.operators.peek() === Op.EQ || this.quads.operators.peek() === Op.NEQ) {
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
      const action = op === Op.EQ ? QuadrupleAction.EQ : QuadrupleAction.NEQ;
      this.quads.create(action, left, right, result);
      this.quads.operands.push(result);
    }
  }

  exitExp4(ctx: Exp4Context): void {
    if (this.quads.operators.peek() == null) {
      return;
    }

    if (this.quads.operators.peek() === Op.LT 
    || this.quads.operators.peek() === Op.GT 
    || this.quads.operators.peek() === Op.GTE 
    || this.quads.operators.peek() === Op.LTE) {

      const right = this.quads.operands.pop();
      const left = this.quads.operands.pop();
      const op = this.quads.operators.pop();
      const rightType = this.memory.getTypeForAddress(right);
      const leftType = this.memory.getTypeForAddress(left);
      const resultType = SemanticCube[leftType][rightType][op];
      
      const result = this.memory.newVar(resultType, MemoryType.Temp);
      let action = QuadrupleAction.LT;
      if (op == Op.LT){
        action = QuadrupleAction.LT;
      } else if (op == Op.GT){
        action = QuadrupleAction.GT;
      } else if (op == Op.LTE){
        action = QuadrupleAction.LTE;
      } else if (op == Op.GTE){
        action = QuadrupleAction.GTE;
      }

      this.quads.create(action, left, right, result);
      this.quads.operands.push(result);
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

  exitEq_op(ctx: Eq_opContext): void {
    this.quads.operators.push(ctx.text === '==' ? Op.EQ : Op.NEQ);
  }

  exitRel_op(ctx: Rel_opContext): void {
    let op = Op.GT;

    switch (ctx.text) {
      case '>':
        op = Op.GT;
        break;
      case '<':
        op = Op.LT;
        break;
      case '<=':
        op = Op.LTE;
        break;
      case '>=':
        op = Op.GTE;
        break;
    }

    this.quads.operators.push(op);
  }

  exitAnd_op(ctx: And_opContext): void {
    this.quads.operators.push(Op.AND);
  }

  exitOr_op(ctx: Or_opContext): void {
    this.quads.operators.push(Op.OR);
  }

  exitIf_expr(ctx: If_exprContext): void {
    if (this.memory.getTypeForAddress(this.quads.operands.peek()) != ValueType.INT) {
      throw new Error('Type mismatch in if-statement');
    }

    this.quads.create(QuadrupleAction.GOTOF, this.quads.operands.pop(), null, null);
    this.quads.jumps.push(this.quads.size() - 1);
  }

  exitIf_stmt(ctx: If_stmtContext): void {
    const end = this.quads.jumps.pop();
    const size = this.quads.size();
    this.quads.fill(end, size);
  }

  enterElse_stmt(ctx: Else_stmtContext): void {
    if (ctx.block() == null) {
      return;
    }

    this.quads.create(QuadrupleAction.GOTO, null, null, null);
    const end = this.quads.jumps.pop();
    const size = this.quads.size();
    this.quads.jumps.push(size-1);
    this.quads.fill(end, size);
  }
}