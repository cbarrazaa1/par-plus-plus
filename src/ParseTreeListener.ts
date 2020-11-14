import {ParPlusPlusListener} from './antlr/ParPlusPlusListener';
import {
  Addsub_opContext,
  AssignmentContext,
  Else_stmtContext,
  Eq_opContext,
  Exp6Context,
  For_idContext,
  FunctionContext,
  Func_callContext,
  Func_call_argsContext,
  Func_paramsContext,
  Input_argsContext,
  Muldiv_opContext,
  Output_argContext,
  Rel_opContext,
  Return_stmtContext,
  StatementContext,
  TypeContext,
  Var_idContext,
  Var_id_declContext,
  Var_id_matrixContext,
  Var_id_vectorContext,
} from './antlr/ParPlusPlusParser';
import {getTypeForAddress, MemoryContext, MemoryType} from './Memory';
import {QuadrupleAction, QuadrupleContext} from './Quadruple';
import {Op, SemanticCube} from './semantics/SemanticCube';
import {
  ConstantTable,
  FuncTable,
  printFuncTable,
  VarsTableRow,
} from './semantics/SymbolTable';
import {stringToValueType, ValueType} from './semantics/Types';

export default class Listener implements ParPlusPlusListener {
  public funcTable: FuncTable;
  public constantTable: ConstantTable;
  public quads: QuadrupleContext;
  private currentType: ValueType;
  private currentFunc: string;
  private currentFuncCall: string;
  private memory: MemoryContext;

  constructor() {
    this.funcTable = {
      global: {
        name: 'global',
        type: ValueType.VOID,
        params: [],
        vars: {},
        quadNumber: 0,
        varCount: {
          ints: 0,
          floats: 0,
          chars: 0,
          pointers: 0,
        },
        tempCount: {
          ints: 0,
          floats: 0,
          chars: 0,
          pointers: 0,
        },
      },
    };
    this.constantTable = {};
    this.currentType = ValueType.VOID;
    this.currentFunc = 'global';
    this.currentFuncCall = '';
    this.memory = new MemoryContext();
    this.quads = new QuadrupleContext();
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
    if (this.quads.operators.peek() == Op.FalseBottom) {
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
      let resultType;

      console.log('expHelper', leftType, rightType);
      if (leftType === ValueType.POINTER) {
        resultType = rightType;
      } else if (rightType === ValueType.POINTER) {
        resultType = leftType;
      } else {
        resultType = SemanticCube[leftType][rightType][op];
      } 

      // check if types are compatible
      if (resultType == null) {
        throw new Error('Type mismatch');
      }

      const result = this.memory.newVar(resultType, MemoryType.Temp);
      this.quads.create(opActionPairs[index].action, left, right, result);
      console.log(result);
      this.quads.operands.push(result);

      const counter =
        resultType === ValueType.INT
          ? 'ints'
          : resultType === ValueType.FLOAT
          ? 'floats'
          : resultType === ValueType.CHAR
          ? 'chars'
          : 'pointer';

      this.funcTable[this.currentFunc].tempCount[counter]++;
    }
  }

  // Listener Implementation
  enterProgram(): void {
    this.quads.create(QuadrupleAction.GOTO, null, null, null);
    this.quads.jumps.push(0);
  }

  enterMain_function(): void {
    this.currentFunc = 'global';
    this.memory.resetTemporals();
    const n = this.quads.jumps.pop();
    const size = this.quads.size();
    this.quads.fill(n, size);
  }

  exitMain_function(): void {
    this.quads.create(QuadrupleAction.END, null, null, null);
  }

  exitProgram(): void {
    printFuncTable(this.funcTable);
    this.quads.print();
    console.table(this.constantTable);
  }

  exitType(ctx: TypeContext): void {
    this.currentType = stringToValueType(ctx.text);
  }

  exitVar_id_decl(ctx: Var_id_declContext): void {
    const id = ctx.ID().text;
    const memType =
      this.currentFunc === 'global' ? MemoryType.Global : MemoryType.Local;
    let vectorSize = null,
      matrixSize = null;

    // check if exists
    if (this.funcTable[this.currentFunc].vars[id] != null) {
      throw new Error(`Variable ${id} already declared.`);
    }

    // add to var table
    this.funcTable[this.currentFunc].vars[id] = {
      name: id,
      type: this.currentType,
      addr: this.memory.newVar(this.currentType, memType),
      vectorSize: null,
      matrixSize: null,
    };
    const variable = this.funcTable[this.currentFunc].vars[id];

    // check array dimensions
    if (ctx.INT_VAL().length > 0) {
      // check if one dimension
      vectorSize = ctx.INT_VAL()[0].text;

      // create constant for base address
      if (this.constantTable[variable.addr] == null) {
        this.constantTable[variable.addr] = this.memory.newInt(
          MemoryType.Constant,
        );
      }

      // check if vectorSize is in constant table
      if (this.constantTable[vectorSize] == null) {
        this.constantTable[vectorSize] = this.memory.newInt(
          MemoryType.Constant,
        );
      }

      if (ctx.INT_VAL().length > 1) {
        // check if two dimensions
        matrixSize = ctx.INT_VAL()[1].text;

        // check if matrixSize is in constant table
        if (this.constantTable[matrixSize] == null) {
          this.constantTable[matrixSize] = this.memory.newInt(
            MemoryType.Constant,
          );
        }

        // reserve memory
        this.memory.addArray(
          Number(vectorSize) * Number(matrixSize),
          this.currentType,
          memType,
        );
      } else {
        this.memory.addArray(Number(vectorSize), this.currentType, memType);
      }
    }

    // set dimensions info
    variable.vectorSize = vectorSize == null ? null : Number(vectorSize);
    variable.matrixSize = matrixSize == null ? null : Number(matrixSize);
  }

  enterFunction(ctx: FunctionContext): void {
    const name = ctx.ID().text;
    const type = stringToValueType(
      ctx.type() != null ? ctx.type().text : 'void',
    );
    this.currentFunc = name;
    this.memory.resetLocals();
    this.memory.resetTemporals();

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
      varCount: {
        ints: 0,
        floats: 0,
        chars: 0,
        pointers: 0,
      },
      tempCount: {
        ints: 0,
        floats: 0,
        chars: 0,
        pointers: 0,
      },
    };

    // add return value to global
    if (type !== ValueType.VOID) {
      this.funcTable['global'].vars[name + '()'] = {
        name: name + '()',
        type,
        addr: this.memory.newVar(type, MemoryType.Global),
        vectorSize: null,
        matrixSize: null,
      };
    }
  }

  exitFunction(): void {
    this.quads.create(QuadrupleAction.ENDFUNC, null, null, null);
  }

  exitReturn_stmt(ctx: Return_stmtContext): void {
    const type = this.funcTable[this.currentFunc].type;
    if (ctx.expr() == null) {
      if (type !== ValueType.VOID) {
        throw new Error('Empty return in non-void function');
      }
    } else {
      if (type === ValueType.VOID) {
        throw new Error('Return with expression in void function');
      }
    }

    this.quads.create(
      QuadrupleAction.RET,
      this.quads.operands.pop(),
      null,
      type === ValueType.VOID
        ? null
        : this.funcTable['global'].vars[this.currentFunc + '()'].addr,
    );
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
      const addr = this.memory.newVar(type, MemoryType.Local);
      this.funcTable[this.currentFunc].vars[name] = {
        name,
        type,
        addr,
        vectorSize: null,
        matrixSize: null,
      };

      this.funcTable[this.currentFunc].params.push({type, addr});
    }
  }

  exitAssignment(ctx: AssignmentContext): void {
    const variable = this.getVariable(ctx.var_id().ID().text);
    let type = getTypeForAddress(this.quads.operands.peek());

    if (type === ValueType.POINTER) {
      type = variable.type;
    }

    // check if types match
    if (SemanticCube[variable.type][type][Op.ASSIGN] == null) {
      throw new Error('Type mismatch');
    }

    this.quads.create(
      QuadrupleAction.ASSIGN,
      this.quads.operands.pop(),
      null,
      variable.vectorSize != null ? this.quads.operands.pop() : variable.addr,
    );
  }

  exitExpr(): void {
    // remove stack false bottom
    if (this.quads.operators.peek() == Op.FalseBottom) {
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
      this.quads.operators.push(Op.FalseBottom);
    }
  }

  exitExp6(ctx: Exp6Context): void {
    let constName = null;
    let constType = null;

    // check for type of operand to add to stack
    if (ctx.var_id() != null) {
      const variable = this.getVariable(ctx.var_id().ID().text);

      if (variable.vectorSize == null) {
        console.log(variable.addr);
        this.quads.operands.push(variable.addr);
      }
    } else if (ctx.INT_VAL() != null) {
      constName = ctx.INT_VAL().text;
      constType = ValueType.INT;
    } else if (ctx.FLOAT_VAL() != null) {
      constName = ctx.FLOAT_VAL().text;
      constType = ValueType.FLOAT;
    } else if (ctx.CHAR_VAL() != null) {
      constName = ctx.CHAR_VAL().text;
      constType = ValueType.CHAR;
    }

    if (constName != null) {
      let addr = this.constantTable[constName];
      if (this.constantTable[constName] == null) {
        this.constantTable[constName] = this.memory.newVar(
          constType,
          MemoryType.Constant,
        );
        addr = this.constantTable[constName];
      }
      this.quads.operands.push(addr);
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

  enterStatement(ctx: StatementContext): void {
    if (ctx.func_call() != null) {
      const func = this.funcTable[ctx.func_call().ID().text];
      if (func.type !== ValueType.VOID) {
        throw new Error('Using non-void function outside of expression.');
      }
    }
  }

  exitIf_expr(): void {
    // make sure it's int for bool check
    if (getTypeForAddress(this.quads.operands.peek()) != ValueType.INT) {
      throw new Error('Type mismatch in if-statement');
    }

    // create incomplete gotof
    this.quads.create(
      QuadrupleAction.GOTOF,
      this.quads.operands.pop(),
      null,
      null,
    );

    // store migaja de pan
    this.quads.jumps.push(this.quads.size() - 1);
  }

  exitIf_stmt(): void {
    const end = this.quads.jumps.pop();
    const size = this.quads.size();

    // fill else goto
    this.quads.fill(end, size);
  }

  enterElse_stmt(ctx: Else_stmtContext): void {
    // if there's no else, do nothing
    if (ctx.block() == null) {
      return;
    }

    // create incomplete goto to end
    this.quads.create(QuadrupleAction.GOTO, null, null, null);

    const end = this.quads.jumps.pop();
    const size = this.quads.size();

    // store current quad to fill later
    this.quads.jumps.push(size - 1);

    // fill gotof jump
    this.quads.fill(end, size);
  }

  exitOutput_arg(ctx: Output_argContext): void {
    let res = this.quads.operands.pop();
    console.log(this.quads.operands);

    if (ctx.STR_VAL() != null) {
      let constName = ctx.STR_VAL().text;
      constName = constName.substr(1, constName.length - 2);
      let addr = this.constantTable[constName];
      if (this.constantTable[constName] == null) {
        this.constantTable[constName] = this.memory.newString();
        addr = this.constantTable[constName];
      }

      res = addr;
    }

    if (res == null) {
      throw new Error('Empty or void argument in write.');
    }

    this.quads.create(QuadrupleAction.WRITE, null, null, res);
  }

  exitInput_args(ctx: Input_argsContext): void {
    const ids = ctx.var_id();

    // create read quad for every argument
    for (let i = 0; i < ids.length; i++) {
      const variable = this.getVariable(ids[i].text);
      this.quads.create(QuadrupleAction.READ, null, null, variable.addr);
    }
  }

  enterWhile_stmt(): void {
    // store migaja de pan
    this.quads.jumps.push(this.quads.size());
  }

  exitWhile_stmt(): void {
    const end = this.quads.jumps.pop();
    const ret = this.quads.jumps.pop();

    // goto while start
    this.quads.create(QuadrupleAction.GOTO, null, null, ret);

    // fill initial gotof
    this.quads.fill(end, this.quads.size());
  }

  exitWhile_expr(): void {
    const result = this.quads.operands.pop();
    const type = getTypeForAddress(result);

    // check if types match
    if (type != ValueType.INT) {
      throw new Error('Type mismatch');
    }

    // create incomplete quad for exiting while
    this.quads.create(QuadrupleAction.GOTOF, result, null, null);
    this.quads.jumps.push(this.quads.size() - 1);
  }

  exitFor_id(ctx: For_idContext): void {
    const variable = this.getVariable(ctx.var_id().text);
    const type = getTypeForAddress(variable.addr);

    // make sure control variable is a number
    if (type != ValueType.INT) {
      throw new Error('Type mismatch');
    }

    // store control variable
    this.quads.operands.push(variable.addr);
  }

  exitFor_expr1(): void {
    const exp = this.quads.operands.pop();
    const type = getTypeForAddress(exp);

    // check if correct type
    if (type != ValueType.INT) {
      throw new Error('Type mismatch');
    }

    // make sure control variable is compatible with first expression
    const controlVar = this.quads.operands.peek();
    const controlType = getTypeForAddress(controlVar);
    const resultType = SemanticCube[controlType][type][Op.ASSIGN];

    // check if assign is possible
    if (resultType == null) {
      throw new Error('Type mismatch');
    }

    // assign initial exp to control var
    this.quads.create(QuadrupleAction.ASSIGN, exp, null, controlVar);
  }

  exitFor_expr2(): void {
    const exp = this.quads.operands.pop();

    // make sure expression is compatible type
    if (getTypeForAddress(exp) != ValueType.INT) {
      throw new Error('Type mismatch.');
    }

    // create temporal so we can store comparison result
    const temp = this.memory.newInt(MemoryType.Temp);
    this.funcTable[this.currentFunc].tempCount.ints++;

    // create comparison quad
    this.quads.create(
      QuadrupleAction.LTE,
      this.quads.operands.peek(),
      exp,
      temp,
    );

    // create migaja de pan for comparison at end of for
    this.quads.jumps.push(this.quads.size() - 1);

    // create incomplete gotof to end of for
    this.quads.create(QuadrupleAction.GOTOF, temp, null, null);

    // create miagaja de pan to fill gotof later
    this.quads.jumps.push(this.quads.size() - 1);
  }

  exitFor_stmt(): void {
    const controlVar = this.quads.operands.pop();

    // create temp variable to store addition result
    const temp = this.memory.newInt(MemoryType.Temp);
    this.funcTable[this.currentFunc].tempCount.ints++;

    // check if 1 is in constant table
    let addr = this.constantTable['1'];
    if (this.constantTable['1'] == null) {
      this.constantTable['1'] = this.memory.newInt(MemoryType.Constant);
      addr = this.constantTable['1'];
    }

    // add one to control var
    this.quads.create(QuadrupleAction.ADD, controlVar, addr, temp);

    // update control var
    this.quads.create(QuadrupleAction.ASSIGN, temp, null, controlVar);

    const end = this.quads.jumps.pop();
    const ret = this.quads.jumps.pop();

    // create goto to return to comparison
    this.quads.create(QuadrupleAction.GOTO, null, null, ret);

    // fill initial gotof of for
    this.quads.fill(end, this.quads.size());
  }

  enterFunc_call(ctx: Func_callContext): void {
    const name = ctx.ID().text;
    const func = this.funcTable[name];
    this.currentFuncCall = name;

    if (this.funcTable[name] == null) {
      throw new Error(`Function ${name} not declared.`);
    }

    if (ctx.func_call_args() == null) {
      // check empty param list
      if (func.params.length !== 0) {
        throw new Error(`On function ${name} incorrect parameter count.`);
      }
    } else if (ctx.func_call_args().expr() != null) {
      const func_call_len = ctx.func_call_args().expr().length;
      if (func.params.length != func_call_len) {
        throw new Error(`On function ${name} incorrect parameter count.`);
      }
    }

    this.quads.create(QuadrupleAction.ERA, null, null, name);
    this.quads.operators.push(Op.FunctionFalseBottom);
  }

  exitFunc_call(ctx: Func_callContext): void {
    const func = this.funcTable[this.currentFuncCall];

    // check if empty params
    if (ctx.func_call_args() == null) {
      if (func.params.length !== 0) {
        throw new Error();
      }
    }

    this.quads.create(QuadrupleAction.GOSUB, func.name, null, func.quadNumber);

    // push temp with return type
    if (func.type != ValueType.VOID) {
      const tempAddr = this.memory.newVar(func.type, MemoryType.Temp);
      this.funcTable[this.currentFunc].tempCount[
        func.type === ValueType.INT
          ? 'ints'
          : func.type === ValueType.FLOAT
          ? 'floats'
          : 'chars'
      ]++;

      this.quads.create(
        QuadrupleAction.ASSIGN,
        this.funcTable['global'].vars[this.currentFuncCall + '()'].addr,
        null,
        tempAddr,
      );
      this.quads.operands.push(tempAddr);
    }

    this.quads.operators.pop();
  }

  exitFunc_call_args(ctx: Func_call_argsContext): void {
    const exps = ctx.expr();
    const params = [];

    for (let i = 0; i < exps.length; i++) {
      const operand = this.quads.operands.pop();
      const type = getTypeForAddress(operand);
      params.unshift({operand, type});
    }

    // generate quads
    for (let i = 0; i < params.length; i++) {
      const func = this.funcTable[this.currentFuncCall];
      if (params[i].type != func.params[i].type) {
        throw new Error(`On function ${func.name} incorrect parameter type.`);
      }
      this.quads.create(
        QuadrupleAction.PARAM,
        null,
        params[i].operand,
        func.params[i].addr,
      );
    }
  }

  enterVar_id(ctx: Var_idContext): void {
    if (ctx.var_id_vector() == null) {
      return;
    }

    this.quads.arrayIds.push(ctx.ID().text);
  }

  exitVar_id(ctx: Var_idContext): void {
    if (ctx.var_id_vector() == null) {
      return;
    }

    this.quads.arrayIds.pop();
  }

  enterVar_id_vector(ctx: Var_id_vectorContext): void {
    this.quads.operators.push(Op.ArrayFalseBottom);
  }

  exitVar_id_vector(ctx: Var_id_vectorContext): void {
    const variable = this.getVariable(this.quads.arrayIds.peek());
    const exp = this.quads.operands.pop();

    this.quads.create(
      QuadrupleAction.VERIFY,
      exp,
      null,
      this.constantTable[variable.vectorSize],
    );

    let temp;
    if (variable.matrixSize != null) {
      temp = this.memory.newInt(MemoryType.Temp);
      this.funcTable[this.currentFunc].tempCount.ints++;
      this.quads.create(
        QuadrupleAction.MUL,
        exp,
        this.constantTable[variable.matrixSize],
        temp,
      );
    } else {
      temp = this.memory.newPointer();
      this.funcTable[this.currentFunc].tempCount.pointers++;
      this.quads.create(
        QuadrupleAction.ADD,
        exp,
        this.constantTable[variable.addr],
        temp,
      );
    }
    this.quads.operands.push(temp);
    this.quads.operators.pop();
  }

  enterVar_id_matrix(ctx: Var_id_matrixContext): void {
    this.quads.operators.push(Op.ArrayFalseBottom);
  }

  exitVar_id_matrix(ctx: Var_id_matrixContext): void {
    const variable = this.getVariable(this.quads.arrayIds.peek());
    const exp = this.quads.operands.pop();
    this.quads.create(
      QuadrupleAction.VERIFY,
      exp,
      null,
      this.constantTable[variable.matrixSize],
    );

    const tempPtr = this.memory.newPointer();
    const tempInt = this.memory.newInt(MemoryType.Temp);
    this.funcTable[this.currentFunc].tempCount.ints++;
    this.funcTable[this.currentFunc].tempCount.pointers++;
    const exp2 = this.quads.operands.pop();
    
    this.quads.create(QuadrupleAction.ADD, exp, exp2, tempInt);
    this.quads.create(
      QuadrupleAction.ADD,
      tempInt,
      this.constantTable[variable.addr],
      tempPtr,
    );
    this.quads.operands.push(tempPtr);

    // pop falsebottom
    this.quads.operators.pop();
  }
}
