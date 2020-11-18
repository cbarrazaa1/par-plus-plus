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
  [QuadrupleAction.DIV]: (a, b) => a / b,
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
  private stack: Stack<ActivationRecord>;
  private jumps: Stack<number>;
  private currentFunc: ActivationRecord | null;
  private ip: number;

  constructor(obj: any) {
    this.funcTable = obj.funcTable as FuncTable;
    this.quads = obj.quads as Quadruple[];
    this.constantTable = obj.constTable as ConstantTable;
    this.ip = 0;
    this.ds = new DataSegment(this.funcTable['global'], this.constantTable);
    this.stack = new Stack();
    this.jumps = new Stack();
    this.currentFunc = null;
  }

  private getValue(addr: number): number | string {
    const memoryType = getMemoryTypeForAddress(addr);

    if (memoryType === MemoryType.Global) {
      return this.ds.globals.getValue(addr);
    } else if (memoryType === MemoryType.Local) {
      return this.currentFunc.locals.getValue(addr);
    } else if (memoryType === MemoryType.Temp) {
      if (this.currentFunc == null) {
        return this.ds.temps.getValue(addr);
      }

      return this.currentFunc.temps.getValue(addr);
    } else {
      return this.ds.constants.getValue(addr);
    }
  }

  private setValue(addr: number, value: number | string): void {
    const memoryType = getMemoryTypeForAddress(addr);

    if (memoryType === MemoryType.Global) {
      this.ds.globals.setValue(addr, value);
    } else if (memoryType === MemoryType.Local) {
      this.currentFunc.locals.setValue(addr, value);
    } else if (memoryType === MemoryType.Temp) {
      if (this.currentFunc == null) {
        this.ds.temps.setValue(addr, value);
      } else {
        this.currentFunc.temps.setValue(addr, value);
      }
    }
  }

  private setParam(addr: number, value: number | string): void {
    this.stack.peek().locals.setValue(addr, value);
  }

  private pushValue(value: number | string, type: ValueType): number {
    if (this.currentFunc == null) {
      return this.ds.temps.pushValue(value, type);
    }

    return this.currentFunc.temps.pushValue(value, type);
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
      const tempAddr = this.pushValue(
        binaryOperations[quad.action](left, right),
        resultType,
      );
      this.setValue(quad.result as number, tempAddr);
      console.log('tempAddr', this.getValue(tempAddr));
    } else {
      this.setValue(res, binaryOperations[quad.action](left, right));
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
          console.log(`> ${this.getValue(resWrite)}`);
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
          this.currentFunc = this.stack.peek();
          this.jumps.push(this.ip + 1);
          this.ip = quad.result as number;
          continue;
        case QuadrupleAction.ERA:
          this.currentFunc = this.stack.peek();
          this.stack.push(
            new ActivationRecord(
              this.funcTable[quad.result],
              quad.result as string,
            ),
          );
          break;
        case QuadrupleAction.PARAM:
          right = this.getValue(quad.right as number);

          if (getTypeForAddress(quad.right as number) === ValueType.POINTER) {
            right = this.getValue(right);
          }

          this.setParam(quad.result as number, right);
          break;
        case QuadrupleAction.RET:
          if (quad.result != null) {
            left = this.getValue(quad.left as number);
            if (getTypeForAddress(quad.left as number) === ValueType.POINTER) {
              left = this.getValue(left);
            }

            this.setValue(quad.result as number, left);
          }

          this.stack.pop();
          this.currentFunc = this.stack.peek();

          // check if in main
          if (this.jumps.size() === 0) {
            this.ip = this.quads.length - 1;
          } else {
            this.ip = this.jumps.pop();
          }
          continue;
        case QuadrupleAction.ENDFUNC:
          this.stack.pop();
          this.currentFunc = this.stack.peek();
          this.ip = this.jumps.pop();
          continue;
      }

      this.ip++;
    }

    console.log(this.ds.globals);
    console.log(this.ds.temps);
  }
}
