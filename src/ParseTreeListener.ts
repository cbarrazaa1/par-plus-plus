import { Stack } from 'typescript-collections';
import {ParPlusPlusListener} from './antlr/ParPlusPlusListener';
import {
  Addsub_opContext,
  AssignmentContext,
  Else_stmtContext,
  Eq_opContext,
  Exp6Context,
  Input_argsContext,
  FunctionContext,
  Func_paramsContext,
  Muldiv_opContext,
  Output_argsContext,
  Output_argContext,
  Rel_opContext,
  TypeContext,
  Var_id_declContext,
  While_stmtContext,
  While_exprContext,
  For_idContext,
  For_expr1Context,
  For_expr2Context,
  For_stmtContext,
} from './antlr/ParPlusPlusParser';
import {getTypeForAddress, MemoryContext, MemoryType} from './Memory';
import {QuadrupleAction, QuadrupleContext} from './Quadruple';
import {Op, SemanticCube} from './semantics/SemanticCube';
import {FuncTable, printFuncTable, VarsTableRow} from './semantics/SymbolTable';
import {stringToValueType, ValueType} from './semantics/Types';

const FalseBottom = null;

export default class Listener implements ParPlusPlusListener {
  private funcTable: FuncTable;
  private currentType: ValueType;
  private currentFunc: string;
  private memory: MemoryContext;
  private quads: QuadrupleContext;
  private forControlVariables: Stack<number>;

  constructor() {
    this.funcTable = {
      global: {
        name: 'global',
        type: ValueType.VOID,
        params: [],
        vars: {},
        quadNumber: 0,
      },
    };
    this.currentType = ValueType.VOID;
    this.currentFunc = 'global';
    this.memory = new MemoryContext();
    this.quads = new QuadrupleContext();
    this.forControlVariables = new Stack();
  }

  private getVariable(name: string): VarsTableRow {
    let variable = this.funcTable[this.currentFunc].vars[name];

    if (variable == null) {
      variable = this.funcTable['global'].vars[name];
      if (variable == null) {
        throw new Error(`Undeclared variable: ${name}`);
      }
    }

    return variable;
  }

  private expHelper(opActionPairs: {op: Op; action: QuadrupleAction}[]): void {
    // if we're on false bottom, skip
    if (this.quads.operators.peek() == FalseBottom) {
      return;
    }

    // check if top of stack matches any allowed operations
    let index = -1;
    for (let i = 0; i < opActionPairs.length; i++) {
      if (this.quads.operators.peek() === opActionPairs[i].op) {
        index = i;
        break;
      }
    }

    // if there was match, attempt to create quadruple
    if (index !== -1) {
      const right = this.quads.operands.pop();
      const left = this.quads.operands.pop();
      const op = this.quads.operators.pop();
      const rightType = getTypeForAddress(right);
      const leftType = getTypeForAddress(left);
      const resultType = SemanticCube[leftType][rightType][op];

      // check if types are compatible
      if (resultType == null) {
        throw new Error('Type mismatch');
      }

      const result = this.memory.newVar(resultType, MemoryType.Temp);
      this.quads.create(opActionPairs[index].action, left, right, result);
      this.quads.operands.push(result);
    }
  }

  // Listener Implementation
  exitProgram(): void {
    printFuncTable(this.funcTable);
    this.quads.print();
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

    const memType =
      this.currentFunc === 'global' ? MemoryType.Global : MemoryType.Local;

    // add to var table
    this.funcTable[this.currentFunc].vars[id] = {
      name: id,
      type: this.currentType,
      addr: this.memory.newVar(this.currentType, memType),
    };
  }

  enterFunction(ctx: FunctionContext): void {
    const name = ctx.ID().text;
    const type = stringToValueType(
      ctx.type() != null ? ctx.type().text : 'void',
    );
    this.currentFunc = name;
    this.memory.resetLocals();

    // check if exists
    if (this.funcTable[name] != null) {
      throw new Error(`Function ${name} already declared.`);
    }

    // create func table entry
    this.funcTable[name] = {
      name,
      type,
      vars: {},
      params: [],
      quadNumber: this.quads.size(),
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

      // add to var table
      const type = stringToValueType(types[i].text);
      this.funcTable[this.currentFunc].vars[name] = {
        name,
        type,
        addr: this.memory.newVar(type, MemoryType.Local),
      };

      this.funcTable[this.currentFunc].params.push(type);
    }
  }

  exitAssignment(ctx: AssignmentContext): void {
    const variable = this.getVariable(ctx.var_id().ID().text);
    const type = getTypeForAddress(this.quads.operands.peek());

    // check if types match
    if (SemanticCube[variable.type][type][Op.ASSIGN] == null) {
      throw new Error('Type mismatch');
    }

    this.quads.create(
      QuadrupleAction.ASSIGN,
      this.quads.operands.pop(),
      null,
      variable.addr,
    );
  }

  exitExpr(): void {
    // remove stack false bottom
    if (this.quads.operators.peek() == FalseBottom) {
      this.quads.operators.pop();
    }
  }

  exitExp1(): void {
    this.expHelper([{op: Op.OR, action: QuadrupleAction.OR}]);
  }

  exitExp2(): void {
    this.expHelper([{op: Op.AND, action: QuadrupleAction.AND}]);
  }

  exitExp3(): void {
    this.expHelper([
      {op: Op.EQ, action: QuadrupleAction.EQ},
      {op: Op.NEQ, action: QuadrupleAction.NEQ},
    ]);
  }

  exitExp4(): void {
    this.expHelper([
      {op: Op.LT, action: QuadrupleAction.LT},
      {op: Op.GT, action: QuadrupleAction.GT},
      {op: Op.GTE, action: QuadrupleAction.GTE},
      {op: Op.LTE, action: QuadrupleAction.LTE},
    ]);
  }

  exitExp5(): void {
    this.expHelper([
      {op: Op.ADD, action: QuadrupleAction.ADD},
      {op: Op.SUB, action: QuadrupleAction.SUB},
    ]);
  }

  enterExp6(ctx: Exp6Context): void {
    // add false bottom if we reach nested expression
    if (ctx.expr() != null) {
      this.quads.operators.push(FalseBottom);
    }
  }

  exitExp6(ctx: Exp6Context): void {
    // check for type of operand to add to stack
    if (ctx.var_id() != null) {
      const variable = this.getVariable(ctx.var_id().ID().text);
      this.quads.operands.push(variable.addr);
    } else if (ctx.INT_VAL() != null) {
      this.quads.operands.push(this.memory.newInt(MemoryType.Constant));
    } else if (ctx.FLOAT_VAL() != null) {
      this.quads.operands.push(this.memory.newFloat(MemoryType.Constant));
    } else if (ctx.CHAR_VAL() != null) {
      this.quads.operands.push(this.memory.newChar(MemoryType.Constant));
    }

    this.expHelper([
      {op: Op.MUL, action: QuadrupleAction.MUL},
      {op: Op.DIV, action: QuadrupleAction.DIV},
    ]);
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

  exitAnd_op(): void {
    this.quads.operators.push(Op.AND);
  }

  exitOr_op(): void {
    this.quads.operators.push(Op.OR);
  }

  exitIf_expr(): void {
    if (getTypeForAddress(this.quads.operands.peek()) != ValueType.INT) {
      throw new Error('Type mismatch in if-statement');
    }

    this.quads.create(
      QuadrupleAction.GOTOF,
      this.quads.operands.pop(),
      null,
      null,
    );
    this.quads.jumps.push(this.quads.size() - 1);
  }

  exitIf_stmt(): void {
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
    this.quads.jumps.push(size - 1);
    this.quads.fill(end, size);
  }

  exitOutput_arg(ctx: Output_argContext): void {
    const string = ctx.STR_VAL();

    if (string != null) {
      this.quads.create(
        QuadrupleAction.WRITE, 
        null, 
        null, 
        this.memory.newString(),
      );
    } else {
      this.quads.create(
        QuadrupleAction.WRITE, 
        null, 
        null, 
        this.quads.operands.pop());
    }
  }

  exitInput_args(ctx: Input_argsContext): void {
    const ids = ctx.var_id();

    for (let i = 0; i < ids.length; i++) {
      const variable = this.getVariable(ids[i].text);
      this.quads.create(
        QuadrupleAction.READ, 
        null, 
        null, 
        variable.addr);
    }
  }

  enterWhile_stmt(ctx: While_stmtContext): void {
    this.quads.jumps.push(this.quads.size());
  }
  
  exitWhile_stmt(ctx: While_stmtContext): void {
    const end = this.quads.jumps.pop();
    const ret = this.quads.jumps.pop();
    this.quads.create(QuadrupleAction.GOTO, null, null, ret);
    this.quads.fill(end, this.quads.size());
  }
  
  exitWhile_expr(ctx: While_exprContext): void {
    const result = this.quads.operands.pop();
    const type = getTypeForAddress(result);

    // check if types match
    if (type != ValueType.INT) {
      throw new Error('Type mismatch');
    } else {
      this.quads.create(QuadrupleAction.GOTOF, result, null, null);
      this.quads.jumps.push(this.quads.size() - 1);
    }
  }

  exitFor_id(ctx: For_idContext): void {
    const variable = this.getVariable(ctx.var_id().text);
    const type = getTypeForAddress(variable.addr);

    if (type != ValueType.INT) {
      throw new Error('Type mismatch');
    }

    this.quads.operands.push(variable.addr);
  }

  exitFor_expr1(ctx: For_expr1Context): void {
    const exp = this.quads.operands.pop();
    const type = getTypeForAddress(exp);
    if (type != ValueType.INT && type != ValueType.FLOAT){
      throw new Error('Type mismatch');
    } else {
      const controlVar = this.quads.operands.peek();
      const controlType = getTypeForAddress(this.quads.operands.peek());
      const resultType = SemanticCube[controlType][type][Op.ASSIGN];
      if (resultType == null){
        throw new Error('Type mismatch');
      } else {
        this.quads.create(QuadrupleAction.ASSIGN, exp, null, this.quads.operands.peek());
      }
    }
    
  }

  exitFor_expr2(ctx: For_expr2Context): void {
    const exp = this.quads.operands.pop();
    if (getTypeForAddress(exp) != ValueType.INT) {
      throw new Error('Type mismatch.');
    }

    const temp = this.memory.newInt(MemoryType.Temp);
    this.quads.create(QuadrupleAction.LT, this.quads.operands.peek(), exp, temp);
    this.quads.jumps.push(this.quads.size() - 1);
    this.quads.create(QuadrupleAction.GOTOF, temp, null, null);
    this.quads.jumps.push(this.quads.size() - 1);
  }

  exitFor_stmt(ctx: For_stmtContext): void {
    const controlVar = this.quads.operands.pop();
    const temp = this.memory.newInt(MemoryType.Temp);
    this.quads.create(QuadrupleAction.ADD, controlVar, this.memory.newInt(MemoryType.Constant), temp);
    this.quads.create(QuadrupleAction.ASSIGN, temp, null, controlVar);

    const end = this.quads.jumps.pop();
    const ret = this.quads.jumps.pop();
    this.quads.create(QuadrupleAction.GOTO, null, null, ret);
    this.quads.fill(end, this.quads.size());
  }
}
