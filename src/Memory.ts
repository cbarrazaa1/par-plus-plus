import {ConstantTable, FuncTable, FuncTableRow} from './semantics/SymbolTable';
import {ValueType} from './semantics/Types';

const GLOBAL_INT = 1000,
  GLOBAL_FLOAT = 2000,
  GLOBAL_CHAR = 3000;

const LOCAL_INT = 4000,
  LOCAL_FLOAT = 5000,
  LOCAL_CHAR = 6000;

const TEMP_INT = 7000,
  TEMP_FLOAT = 8000,
  TEMP_CHAR = 9000,
  TEMP_PTR = 10000;

const CONST_INT = 11000,
  CONST_FLOAT = 12000,
  CONST_CHAR = 13000,
  CONST_STR = 14000;

export enum MemoryType {
  Global,
  Local,
  Temp,
  Constant,
}

export function getTypeForAddress(addr: number): ValueType {
  if (
    (addr >= GLOBAL_INT && addr < GLOBAL_FLOAT) ||
    (addr >= LOCAL_INT && addr < LOCAL_FLOAT) ||
    (addr >= TEMP_INT && addr < TEMP_FLOAT) ||
    (addr >= CONST_INT && addr < CONST_FLOAT)
  ) {
    return ValueType.INT;
  } else if (
    (addr >= GLOBAL_FLOAT && addr < GLOBAL_CHAR) ||
    (addr >= LOCAL_FLOAT && addr < LOCAL_CHAR) ||
    (addr >= TEMP_FLOAT && addr < TEMP_CHAR) ||
    (addr >= CONST_FLOAT && addr < CONST_CHAR)
  ) {
    return ValueType.FLOAT;
  } else if (
    (addr >= GLOBAL_CHAR && addr < LOCAL_INT) ||
    (addr >= LOCAL_CHAR && addr < TEMP_INT) ||
    (addr >= TEMP_CHAR && addr < TEMP_PTR) ||
    (addr >= CONST_CHAR && addr < CONST_STR)
  ) {
    return ValueType.CHAR;
  } else if (addr >= CONST_STR && addr < CONST_STR + 1000) {
    return ValueType.STRING;
  } else if (addr >= TEMP_PTR && addr < CONST_INT) {
    return ValueType.POINTER;
  }
}

export function getMemoryTypeForAddress(addr: number): MemoryType {
  if (addr >= GLOBAL_INT && addr < LOCAL_INT) {
    return MemoryType.Global;
  } else if (addr >= LOCAL_INT && addr < TEMP_INT) {
    return MemoryType.Local;
  } else if (addr >= TEMP_INT && addr < CONST_INT) {
    return MemoryType.Temp;
  } else if (addr >= CONST_INT && addr < CONST_STR + 1000) {
    return MemoryType.Constant;
  }
}

// TODO: validar rangos al agregar
export class MemoryContext {
  private globalInts: number = GLOBAL_INT;
  private globalFloats: number = GLOBAL_FLOAT;
  private globalChars: number = GLOBAL_CHAR;

  private localInts: number = LOCAL_INT;
  private localFloats: number = LOCAL_FLOAT;
  private localChars: number = LOCAL_CHAR;

  private tempInts: number = TEMP_INT;
  private tempFloats: number = TEMP_FLOAT;
  private tempChars: number = TEMP_CHAR;
  private tempPointers: number = TEMP_PTR;

  private constInts: number = CONST_INT;
  private constFloats: number = CONST_FLOAT;
  private constChars: number = CONST_CHAR;
  private constStrings: number = CONST_STR;

  public newVar(type: ValueType, memType: MemoryType): number {
    switch (type) {
      case ValueType.INT:
        return this.newInt(memType);
      case ValueType.FLOAT:
        return this.newFloat(memType);
      case ValueType.CHAR:
        return this.newChar(memType);
      case ValueType.POINTER:
        return this.newPointer(); // temp
    }
  }

  public newInt(type: MemoryType): number {
    switch (type) {
      case MemoryType.Global:
        return this.globalInts++;
      case MemoryType.Local:
        return this.localInts++;
      case MemoryType.Temp:
        return this.tempInts++;
      case MemoryType.Constant:
        return this.constInts++;
    }
  }

  public newFloat(type: MemoryType): number {
    switch (type) {
      case MemoryType.Global:
        return this.globalFloats++;
      case MemoryType.Local:
        return this.localFloats++;
      case MemoryType.Temp:
        return this.tempFloats++;
      case MemoryType.Constant:
        return this.constFloats++;
    }
  }

  public newChar(type: MemoryType): number {
    switch (type) {
      case MemoryType.Global:
        return this.globalChars++;
      case MemoryType.Local:
        return this.localChars++;
      case MemoryType.Temp:
        return this.tempChars++;
      case MemoryType.Constant:
        return this.constChars++;
    }
  }

  public newString(): number {
    return this.constStrings++;
  }

  public newPointer(): number {
    return this.tempPointers++;
  }

  public addArray(size: number, type: ValueType, memType: MemoryType): void {
    switch (type) {
      case ValueType.INT:
        this.addIntArray(size, memType);
        break;
      case ValueType.FLOAT:
        this.addFloatArray(size, memType);
        break;
      case ValueType.CHAR:
        this.addCharArray(size, memType);
        break;
    }
  }

  public addIntArray(size: number, memoryType: MemoryType): void {
    // subtract one to size because initial address of variable is set when declared
    switch (memoryType) {
      case MemoryType.Global:
        this.globalInts += size - 1;
        break;
      case MemoryType.Local:
        this.localInts += size - 1;
        break;
    }
  }

  public addFloatArray(size: number, memoryType: MemoryType): void {
    // subtract one to size because initial address of variable is set when declared
    switch (memoryType) {
      case MemoryType.Global:
        this.globalFloats += size - 1;
        break;
      case MemoryType.Local:
        this.localFloats += size - 1;
        break;
    }
  }

  public addCharArray(size: number, memoryType: MemoryType): void {
    // subtract one to size because initial address of variable is set when declared
    switch (memoryType) {
      case MemoryType.Global:
        this.globalChars += size - 1;
        break;
      case MemoryType.Local:
        this.localChars += size - 1;
        break;
    }
  }

  public resetLocals(): void {
    this.localInts = LOCAL_INT;
    this.localFloats = LOCAL_FLOAT;
    this.localChars = LOCAL_CHAR;
  }

  public resetTemporals(): void {
    this.tempInts = TEMP_INT;
    this.tempFloats = TEMP_FLOAT;
    this.tempChars = TEMP_CHAR;
    this.tempPointers = TEMP_PTR;
  }
}

export class MemoryContainer {
  private ints: number[];
  private floats: number[];
  private chars: string[];
  private strings?: string[];
  private pointers?: number[];

  private intStart: number;
  private floatStart: number;
  private charStart: number;
  private stringStart?: number;
  private pointerStart?: number;

  constructor(
    intCount: number,
    floatCount: number,
    charCount: number,
    stringCount: number,
    pointerCount: number,
    intStart: number,
    floatStart: number,
    charStart: number,
    stringStart?: number,
    pointerStart?: number,
  ) {
    this.ints = new Array(intCount).fill(0);
    this.floats = new Array(floatCount).fill(0.0);
    this.chars = new Array(charCount).fill(' ');
    this.strings = new Array(stringCount).fill(' ');
    this.pointers = new Array(pointerCount).fill(0);
    this.intStart = intStart;
    this.floatStart = floatStart;
    this.charStart = charStart;
    this.stringStart = stringStart;
    this.pointerStart = pointerStart;
  }

  public getValue(addr: number): number | string {
    const type = getTypeForAddress(addr);

    switch (type) {
      case ValueType.INT:
        return this.getInt(addr);
      case ValueType.FLOAT:
        return this.getFloat(addr);
      case ValueType.CHAR:
        return this.getChar(addr);
      case ValueType.STRING:
        return this.getString(addr);
      case ValueType.POINTER:
        return this.getPointer(addr);
    }
  }

  public setValue(addr: number, value: number | string): void {
    const type = getTypeForAddress(addr);

    switch (type) {
      case ValueType.INT:
        this.setInt(addr, value as number);
        break;
      case ValueType.FLOAT:
        this.setFloat(addr, value as number);
        break;
      case ValueType.CHAR:
        this.setChar(addr, value as string);
        break;
      case ValueType.STRING:
        this.setString(addr, value as string);
        break;
      case ValueType.POINTER:
        this.setPointer(addr, value as number);
        break;
    }
  }

  public getInt(addr: number): number {
    return this.ints[addr - this.intStart];
  }

  public getFloat(addr: number): number {
    return this.floats[addr - this.floatStart];
  }

  public getChar(addr: number): string {
    return this.chars[addr - this.charStart];
  }

  public getString(addr: number): string {
    return this.strings[addr - this.stringStart];
  }

  public getPointer(addr: number): number {
    return this.pointers[addr - this.pointerStart];
  }

  public setInt(addr: number, value: number): void {
    this.ints[addr - this.intStart] = value;
  }

  public setFloat(addr: number, value: number): void {
    this.floats[addr - this.floatStart] = value;
  }

  public setChar(addr: number, value: string): void {
    this.chars[addr - this.charStart] = value;
  }

  public setString(addr: number, value: string): void {
    this.strings[addr - this.stringStart] = value;
  }

  public setPointer(addr: number, value: number): void {
    this.pointers[addr - this.pointerStart] = value;
  }
}

export class DataSegment {
  public globals: MemoryContainer;
  public temps: MemoryContainer;
  public constants: MemoryContainer;

  constructor(globalTable: FuncTableRow, constantTable: ConstantTable) {
    this.globals = new MemoryContainer(
      globalTable.varCount.ints,
      globalTable.varCount.floats,
      globalTable.varCount.chars,
      0,
      0,
      GLOBAL_INT,
      GLOBAL_FLOAT,
      GLOBAL_CHAR,
    );

    this.temps = new MemoryContainer(
      globalTable.tempCount.ints,
      globalTable.tempCount.floats,
      globalTable.tempCount.chars,
      0,
      globalTable.tempCount.pointers,
      TEMP_INT,
      TEMP_FLOAT,
      TEMP_CHAR,
      0,
      TEMP_PTR,
    );

    // count variables with constant table
    let constInts = 0,
      constFloats = 0,
      constChars = 0,
      constStrings = 0;

    Object.values(constantTable).forEach((addr: number): void => {
      const type = getTypeForAddress(addr);

      switch (type) {
        case ValueType.INT:
          constInts++;
          break;
        case ValueType.FLOAT:
          constFloats++;
          break;
        case ValueType.CHAR:
          constChars++;
          break;
        case ValueType.STRING:
          constStrings++;
          break;
      }
    });

    this.constants = new MemoryContainer(
      constInts,
      constFloats,
      constChars,
      constStrings,
      0,
      CONST_INT,
      CONST_FLOAT,
      CONST_CHAR,
      CONST_STR,
    );

    // fill constants
    for (const key in constantTable) {
      let value: number | string = key;
      const type = getTypeForAddress(constantTable[key]);

      if (type === ValueType.INT || type === ValueType.FLOAT) {
        value = Number(value);
      }

      this.constants.setValue(constantTable[key], value);
    }
  }
}

export class ActivationRecord {
  public locals: MemoryContainer;
  public temps: MemoryContainer;
  public name: string;

  constructor(funcTable: FuncTableRow, name: string) {
    this.locals = new MemoryContainer(
      funcTable.varCount.ints,
      funcTable.varCount.floats,
      funcTable.varCount.chars,
      0,
      0,
      LOCAL_INT,
      LOCAL_FLOAT,
      LOCAL_CHAR,
    );

    this.temps = new MemoryContainer(
      funcTable.tempCount.ints,
      funcTable.tempCount.floats,
      funcTable.tempCount.chars,
      0,
      funcTable.tempCount.pointers,
      TEMP_INT,
      TEMP_FLOAT,
      TEMP_CHAR,
      0,
      TEMP_PTR,
    );

    this.name = name;
  }
}
