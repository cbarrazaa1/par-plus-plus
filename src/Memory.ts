import {ValueType} from './semantics/Types';

const GLOBAL_INT = 1000,
  GLOBAL_FLOAT = 2000,
  GLOBAL_CHAR = 3000;

const LOCAL_INT = 4000,
  LOCAL_FLOAT = 5000,
  LOCAL_CHAR = 6000;

const TEMP_INT = 7000,
  TEMP_FLOAT = 8000, 
  TEMP_CHAR = 9000;

const CONST_INT = 10000, 
  CONST_FLOAT = 11000, 
  CONST_CHAR = 12000,
  CONST_STR = 13000;

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
    (addr >= TEMP_CHAR && addr < CONST_INT) ||
    (addr >= CONST_CHAR && addr < CONST_STR)
  ) {
    return ValueType.CHAR;
  } else if (addr >= CONST_STR && addr < CONST_STR + 1000) {
    return ValueType.STRING;
  }
}

export function getMemoryTypeForAddress(addr: number): MemoryType {
  if (addr >= GLOBAL_INT && addr < LOCAL_INT) {
    return MemoryType.Global;
  } else if (addr >= LOCAL_INT && addr < TEMP_INT){
    return MemoryType.Local;
  } else if (addr >= TEMP_INT && addr < CONST_INT) {
    return MemoryType.Temp;
  } else if (addr >= CONST_INT && addr < CONST_STR + 1000) {
    return MemoryType.Local;
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

  public resetLocals(): void {
    this.localInts = LOCAL_INT;
    this.localFloats = LOCAL_FLOAT;
    this.localChars = LOCAL_CHAR;
  }

  public resetTemporals(): void {
    this.tempInts = TEMP_INT;
    this.tempFloats = TEMP_FLOAT;
    this.tempChars = TEMP_CHAR;
  }
}
