import {
  ActivationRecord,
  DataSegment,
  getMemoryTypeForAddress,
  getTypeForAddress,
  MemoryType,
} from './Memory';
import {quadActionToOp, Quadruple, QuadrupleAction} from './Quadruple';
import {ConstantTable, FuncTable} from './semantics/SymbolTable';
import {ValueType} from './semantics/Types';
import readline from 'readline-sync';
import {Stack} from 'typescript-collections';
import {SemanticCube} from './semantics/SemanticCube';

function boolToInt(bool: boolean) {
  return bool ? 1 : 0;
}

const binaryOperations = {
  [QuadrupleAction.ADD]: (a, b) => a + b,
  [QuadrupleAction.SUB]: (a, b) => a - b,
  [QuadrupleAction.MUL]: (a, b) => a * b,
  [QuadrupleAction.DIV]: (a, b) => {
    if (b === 0) {
      throw new Error('Runtime error: Division by zero');
    }

    return (a / b);
  },
  [QuadrupleAction.AND]: (a, b) => boolToInt(a && b),
  [QuadrupleAction.OR]: (a, b) => boolToInt(a || b),
  [QuadrupleAction.EQ]: (a, b) => boolToInt(a == b),
  [QuadrupleAction.NEQ]: (a, b) => boolToInt(a != b),
  [QuadrupleAction.GT]: (a, b) => boolToInt(a > b),
  [QuadrupleAction.LT]: (a, b) => boolToInt(a < b),
  [QuadrupleAction.GTE]: (a, b) => boolToInt(a >= b),
  [QuadrupleAction.LTE]: (a, b) => boolToInt(a <= b),
};

export class VirtualMachine {
  private funcTable: FuncTable;
  private quads: Quadruple[];
  private constantTable: ConstantTable;
  private ds: DataSegment;
  private ss: Stack<ActivationRecord>;
  private visitedFunctions: Stack<ActivationRecord>;
  private jumps: Stack<number>;
  private ip: number;
  private paramCountStack: Stack<number>;

  constructor(obj: any) {
    this.funcTable = obj.funcTable as FuncTable;
    this.quads = obj.quads as Quadruple[];
    this.constantTable = obj.constTable as ConstantTable;
    this.ip = 0;
    this.ds = new DataSegment(this.funcTable['global'], this.constantTable);
    this.ss = new Stack();
    this.visitedFunctions = new Stack();
    this.jumps = new Stack();
    this.paramCountStack = new Stack();
  }

  private getValue(addr: number): number | string {
    const memoryType = getMemoryTypeForAddress(addr);

    if (memoryType === MemoryType.Global) {
      return this.ds.globals.getValue(addr);
    } else if (memoryType === MemoryType.Local) {
      return this.visitedFunctions.peek().locals.getValue(addr);
    } else if (memoryType === MemoryType.Temp) {
      if (this.visitedFunctions.peek() == null) {
        return this.ds.temps.getValue(addr);
      }

      return this.visitedFunctions.peek().temps.getValue(addr);
    } else {
      return this.ds.constants.getValue(addr);
    }
  }

  private setValue(addr: number, value: number | string): void {
    const memoryType = getMemoryTypeForAddress(addr);

    if (memoryType === MemoryType.Global) {
      this.ds.globals.setValue(addr, value);
    } else if (memoryType === MemoryType.Local) {
      this.visitedFunctions.peek().locals.setValue(addr, value);
    } else if (memoryType === MemoryType.Temp) {
      if (this.visitedFunctions.peek() == null) {
        this.ds.temps.setValue(addr, value);
      } else {
        this.visitedFunctions.peek().temps.setValue(addr, value);
      }
    }
  }

  private setParam(addr: number, value: number | string): void {
    this.ss.peek().locals.setValue(addr, value);
  }

  private pushValue(value: number, type: ValueType): number {
    if (this.visitedFunctions.peek() == null) {
      return this.ds.temps.pushValue(value, type);
    }

    return this.visitedFunctions.peek().temps.pushValue(value, type);
  }

  private binaryOperationFunc(quad: Quadruple) {
    const leftType = getTypeForAddress(quad.left as number);
    const rightType = getTypeForAddress(quad.right as number);
    let left = this.getValue(quad.left as number);
    let right = this.getValue(quad.right as number);
    let res = quad.result as number;

    if (leftType === ValueType.POINTER) {
      left = this.getValue(left as number);
    }

    if (rightType === ValueType.POINTER) {
      right = this.getValue(right as number);
    }

    if (leftType === ValueType.POINTER && rightType === ValueType.POINTER) {
      res = this.getValue(res as number) as number;
    }

    if (
      res == null ||
      (leftType === ValueType.POINTER && rightType === ValueType.POINTER)
    ) {
      let leftPtrType = leftType,
        rightPtrType = rightType;
      if (leftType === ValueType.POINTER) {
        leftPtrType = getTypeForAddress(
          this.getValue(quad.left as number) as number,
        );
      }

      if (rightType === ValueType.POINTER) {
        rightPtrType = getTypeForAddress(
          this.getValue(quad.right as number) as number,
        );
      }

      const resultType =
        SemanticCube[leftPtrType][rightPtrType][quadActionToOp(quad.action)];

      if (resultType == null) {
        throw new Error('Runtime error: Incompatible pointer types.');
      }

      let binOp = binaryOperations[quad.action](left, right);
      if (quad.action === QuadrupleAction.DIV) {
        if (resultType === ValueType.INT) {
          binOp = Math.floor(binOp);
        }
      }

      const tempAddr = this.pushValue(
        binaryOperations[quad.action](left, right),
        resultType,
      );
      this.setValue(quad.result as number, tempAddr);
    } else {
      let binOp = binaryOperations[quad.action](left, right);
      if (quad.action === QuadrupleAction.DIV) {
        if (getTypeForAddress(res) === ValueType.INT) {
          binOp = Math.floor(binOp);
        }
      }
      this.setValue(res, binOp);
    }
  }

  public run(): void {
    while (this.quads[this.ip].action !== QuadrupleAction.END) {
      const quad = this.quads[this.ip];
      let left, right, result;

      switch (quad.action) {
        case QuadrupleAction.ADD:
        case QuadrupleAction.SUB:
        case QuadrupleAction.MUL:
        case QuadrupleAction.DIV:
        case QuadrupleAction.AND:
        case QuadrupleAction.OR:
        case QuadrupleAction.EQ:
        case QuadrupleAction.NEQ:
        case QuadrupleAction.GT:
        case QuadrupleAction.LT:
        case QuadrupleAction.GTE:
        case QuadrupleAction.LTE:
          this.binaryOperationFunc(quad);
          break;
        case QuadrupleAction.ASSIGN:
          left = this.getValue(quad.left as number);

          if (getTypeForAddress(quad.left as number) === ValueType.POINTER) {
            left = this.getValue(left);
          }

          let resAssign = quad.result as number;
          if (getTypeForAddress(resAssign) === ValueType.POINTER) {
            resAssign = this.getValue(resAssign) as number;
          }

          this.setValue(resAssign, left);
          break;
        case QuadrupleAction.WRITE:
          let resWrite = quad.result as number;
          if (getTypeForAddress(resWrite) === ValueType.POINTER) {
            resWrite = this.getValue(resWrite) as number;
          }

          console.log(
            `> ${
              getTypeForAddress(resWrite) === ValueType.CHAR
                ? String.fromCharCode(this.getValue(resWrite) as number)
                : this.getValue(resWrite)
            }`,
          );
          break;
        case QuadrupleAction.READ:
          const input = readline.question('');
          const float = parseFloat(input);
          const int = parseInt(input);
          const isFloat = !isNaN(float);
          const isInt = !isNaN(int) && input.indexOf('.') === -1;
          const isChar = !isFloat && !isInt && input.length === 1;
          const type = getTypeForAddress(quad.result as number);
          if (type === ValueType.INT && !isInt) {
            throw new Error('Invalid type');
          } else if (type === ValueType.FLOAT && !isFloat) {
            throw new Error('Invalid type');
          } else if (type === ValueType.CHAR && !isChar) {
            throw new Error('Invalid type');
          } else {
            const res = isFloat ? float : isInt ? int : input;
            this.setValue(quad.result as number, res);
          }

          break;
        case QuadrupleAction.GOTOF:
          left = this.getValue(quad.left as number);

          if (getTypeForAddress(quad.left as number) === ValueType.POINTER) {
            if (getTypeForAddress(left) !== ValueType.INT) {
              
            }

            left = this.getValue(left);

          }

          if (!left) {
            this.ip = quad.result as number;
            continue;
          }
          break;
        case QuadrupleAction.GOTOT:
          left = this.getValue(quad.left as number);

          if (getTypeForAddress(quad.left as number) === ValueType.POINTER) {
            left = this.getValue(left);
          }

          if (left) {
            this.ip = quad.result as number;
            continue;
          }
          break;
        case QuadrupleAction.GOTO:
          this.ip = quad.result as number;
          continue;
        case QuadrupleAction.GOSUB:
          // push visited function
          this.visitedFunctions.push( 
            this.ss.peek(),
            // new ActivationRecord(
            //   this.funcTable[quad.result],
            //   quad.result as string,
            // ),
          );
          this.jumps.push(this.ip + 1);
          this.ip = quad.result as number;
          this.paramCountStack.pop();
          continue;
        case QuadrupleAction.ERA:
          this.paramCountStack.push(0);
          this.ss.push(
            new ActivationRecord(
              this.funcTable[quad.result],
              quad.result as string,
            ),
          );
          break;
        case QuadrupleAction.PARAM:
          right = this.getValue(quad.right as number);
          const func = this.funcTable[this.ss.peek().name];

          if (getTypeForAddress(quad.right as number) === ValueType.POINTER) {
            const rightType = getTypeForAddress(right);
            right = this.getValue(right);
            if (rightType !== func.params[this.paramCountStack.peek()].type){
              throw new Error('Incorrect Parameters');
            }
          }

          this.setParam(quad.result as number, right);
          let paramCount = this.paramCountStack.pop();
          paramCount++;
          this.paramCountStack.push(paramCount);
          break;
        case QuadrupleAction.RET:
          if (quad.result != null) {
            left = this.getValue(quad.left as number);
            if (getTypeForAddress(quad.left as number) === ValueType.POINTER) {
              left = this.getValue(left);
            }

            this.setValue(quad.result as number, left);
          }

          // End of functon
          this.ss.pop();
          this.visitedFunctions.pop();

          // check if in main
          if (this.jumps.size() === 0) {
            this.ip = this.quads.length - 1;
          } else {
            this.ip = this.jumps.pop();
          }
          continue;
        case QuadrupleAction.ENDFUNC:
          // End of function
          this.ss.pop();
          this.visitedFunctions.pop();
          this.ip = this.jumps.pop();
          continue;
        case QuadrupleAction.VERIFY:
          left = this.getValue(quad.left as number);
          const leftType = getTypeForAddress(quad.left as number);
          result = this.getValue(quad.result as number);

          let leftPtrType;
          if (leftType == ValueType.POINTER){
            leftPtrType = getTypeForAddress(this.getValue(quad.left as number) as number);
            left = this.getValue(left);
          }

          if (leftType != ValueType.INT && leftPtrType != ValueType.INT){
            throw new Error("Verify error: Incorrect type");
          }
          if (left > result-1 || left < 0){
            throw new Error("Verify error: Incorrect size");
          }
      }

      this.ip++;
    }

    console.log(this.ds.globals);
    console.log(this.ds.temps);
    console.log(this.ds.constants);
  }
}
