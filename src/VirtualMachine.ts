import {DataSegment, getMemoryTypeForAddress, getTypeForAddress, MemoryType} from './Memory';
import {Quadruple, QuadrupleAction} from './Quadruple';
import {ConstantTable, FuncTable} from './semantics/SymbolTable';
import {ValueType} from './semantics/Types';
import readline from 'readline-sync';

function boolToInt(bool: boolean) {
  return bool ? 1 : 0;
}

export class VirtualMachine {
  private funcTable: FuncTable;
  private quads: Quadruple[];
  private constantTable: ConstantTable;
  private ds: DataSegment;
  private ip: number;

  constructor(obj: any) {
    this.funcTable = obj.funcTable as FuncTable;
    this.quads = obj.quads as Quadruple[];
    this.constantTable = obj.constTable as ConstantTable;
    this.ip = 0;
    this.ds = new DataSegment(this.funcTable['global'], this.constantTable);
  }

  private getValue(addr: number): number | string {
    const memoryType = getMemoryTypeForAddress(addr);

    if (memoryType === MemoryType.Global) {
      return this.ds.globals.getValue(addr);
    } else if (memoryType === MemoryType.Local) {
      // ... TODO funciones
    } else if (memoryType === MemoryType.Temp) {
      // ... TODO: diferenciar si en funcion o no
      return this.ds.temps.getValue(addr);
    } else {
      return this.ds.constants.getValue(addr);
    }
  }

  private setValue(addr: number, value: number | string): void {
    const memoryType = getMemoryTypeForAddress(addr);

    if (memoryType === MemoryType.Global) {
      this.ds.globals.setValue(addr, value);
    } else if (memoryType === MemoryType.Local) {
      // ... TODO funciones
    } else if (memoryType === MemoryType.Temp) {
      // ... TODO: diferenciar si en funcion o no
      this.ds.temps.setValue(addr, value);
    }
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
          const input = readline.question("");
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
          break;
        case QuadrupleAction.ERA:
          break;
        case QuadrupleAction.PARAM:
          break;
        case QuadrupleAction.RET:
          break;
        case QuadrupleAction.ENDFUNC:
          break;
      }

      this.ip++;
    }

    console.log(this.ds.globals);
  }
}
