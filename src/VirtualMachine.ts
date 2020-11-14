import {
  ActivationRecord,
  DataSegment,
  getMemoryTypeForAddress,
  getTypeForAddress,
  MemoryType,
} from './Memory';
import {Quadruple, QuadrupleAction} from './Quadruple';
import {ConstantTable, FuncTable} from './semantics/SymbolTable';
import {ValueType} from './semantics/Types';
import readline from 'readline-sync';
import {Stack} from 'typescript-collections';

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

  private binaryOperationFunc(quad: Quadruple) {
    let left = this.getValue(quad.left as number);
    let right = this.getValue(quad.right as number);
    let res = this.getValue(quad.result as number);

    if (getTypeForAddress(quad.left as number) === ValueType.POINTER) {
      left = this.getValue(left as number);
    }

    if (getTypeForAddress(quad.right as number) === ValueType.POINTER) {
      right = this.getValue(right as number);
    }

    // if (getTypeForAddress(quad.result as number) === ValueType.POINTER) {
    //   //res = this.getValue(res as number);
    //   this.setValue(res as number, binaryOperations[quad.action](left, right));
    // } else {
    //   this.setValue(
    //     quad.result as number,
    //     binaryOperations[quad.action](left, right),
    //   );
    // }

    this.setValue(
      quad.result as number,
      binaryOperations[quad.action](left, right),
    );
  }

  public run(): void {
    while (this.quads[this.ip].action !== QuadrupleAction.END) {
      const quad = this.quads[this.ip];
      let left, right, result;

      switch (quad.action) {
        case QuadrupleAction.ADD:
          left = this.getValue(quad.left as number);
          right = this.getValue(quad.right as number);
          result = this.getValue(quad.result as number);
          this.setValue(quad.result as number, left + right);
          break;
        case QuadrupleAction.SUB:
          left = this.getValue(quad.left as number);
          right = this.getValue(quad.right as number);
          result = this.getValue(quad.result as number);
          this.setValue(quad.result as number, left - right);
          break;
        case QuadrupleAction.MUL:
          left = this.getValue(quad.left as number);
          right = this.getValue(quad.right as number);
          result = this.getValue(quad.result as number);
          this.setValue(quad.result as number, left * right);
          break;
        case QuadrupleAction.DIV:
          left = this.getValue(quad.left as number);
          right = this.getValue(quad.right as number);
          result = this.getValue(quad.result as number);
          this.setValue(quad.result as number, left / right);
          break;
        case QuadrupleAction.AND:
          left = this.getValue(quad.left as number);
          right = this.getValue(quad.right as number);
          result = this.getValue(quad.result as number);
          this.setValue(quad.result as number, boolToInt(left && right));
          break;
        case QuadrupleAction.OR:
          left = this.getValue(quad.left as number);
          right = this.getValue(quad.right as number);
          result = this.getValue(quad.result as number);
          this.setValue(quad.result as number, boolToInt(left || right));
          break;
        case QuadrupleAction.EQ:
          left = this.getValue(quad.left as number);
          right = this.getValue(quad.right as number);
          result = this.getValue(quad.result as number);
          this.setValue(quad.result as number, boolToInt(left === right));
          break;
        case QuadrupleAction.NEQ:
          left = this.getValue(quad.left as number);
          right = this.getValue(quad.right as number);
          result = this.getValue(quad.result as number);
          this.setValue(quad.result as number, boolToInt(left !== right));
          break;
        case QuadrupleAction.GT:
          left = this.getValue(quad.left as number);
          right = this.getValue(quad.right as number);
          result = this.getValue(quad.result as number);
          this.setValue(quad.result as number, boolToInt(left > right));
          break;
        case QuadrupleAction.LT:
          left = this.getValue(quad.left as number);
          right = this.getValue(quad.right as number);
          result = this.getValue(quad.result as number);
          this.setValue(quad.result as number, boolToInt(left < right));
          break;
        case QuadrupleAction.GTE:
          left = this.getValue(quad.left as number);
          right = this.getValue(quad.right as number);
          result = this.getValue(quad.result as number);
          this.setValue(quad.result as number, boolToInt(left >= right));
          break;
        case QuadrupleAction.LTE:
          left = this.getValue(quad.left as number);
          right = this.getValue(quad.right as number);
          result = this.getValue(quad.result as number);
          this.setValue(quad.result as number, boolToInt(left <= right));
          break;
        case QuadrupleAction.ASSIGN:
          left = this.getValue(quad.left as number);
          this.setValue(quad.result as number, left);
          break;
        case QuadrupleAction.WRITE:
          console.log(`> ${this.getValue(quad.result as number)}`);
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
          if (!left) {
            this.ip = quad.result as number;
            continue;
          }
          break;
        case QuadrupleAction.GOTOT:
          left = this.getValue(quad.left as number);
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
          this.setParam(quad.result as number, right);
          break;
        case QuadrupleAction.RET:
          if (quad.result != null) {
            left = this.getValue(quad.left as number);
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
