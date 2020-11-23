/**
 * Module where memory is managed in compilation and execution
 */
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

/**
 * Function that get an address and returns the ValueType associated with it
 * @param addr address of the variable or constant
 * @returns ValueType
 */
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
/**
 * Function that get an address and returns the MemoryType associated with it
 * @param addr Address of the variable or constant
 * @returns MemoryType
 */
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

/**
 * Class that manages the virtual memory during compilation
 */
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
  /**
   * Function that creates a new variable and returns the address
   * @param type ValueType
   * @param memType MemoryType
   */
  public newVar(type: ValueType, memType: MemoryType): number {
    switch (type) {
      case ValueType.INT:
        return this.newInt(memType);
      case ValueType.FLOAT:
        return this.newFloat(memType);
      case ValueType.CHAR:
        return this.newChar(memType);
      case ValueType.POINTER:
        return this.newPointer(); // temporal variable
    }
  }
  /**
   * Creates a new int, validates the range and returns its address
   * @param type MemoryType
   */
  public newInt(type: MemoryType): number {
    switch (type) {
      case MemoryType.Global:
        this.validateRange(this.globalInts + 1, GLOBAL_FLOAT);
        return this.globalInts++;
      case MemoryType.Local:
        this.validateRange(this.localInts + 1, LOCAL_FLOAT);
        return this.localInts++;
      case MemoryType.Temp:
        this.validateRange(this.tempInts + 1, TEMP_FLOAT);
        return this.tempInts++;
      case MemoryType.Constant:
        this.validateRange(this.constInts, CONST_FLOAT);
        return this.constInts++;
    }
  }
  /**
   * Creates a new float, validates the range and returns its address
   * @param type MemoryType
   */
  public newFloat(type: MemoryType): number {
    switch (type) {
      case MemoryType.Global:
        this.validateRange(this.globalFloats + 1, GLOBAL_CHAR);
        return this.globalFloats++;
      case MemoryType.Local:
        this.validateRange(this.localFloats + 1, LOCAL_CHAR);
        return this.localFloats++;
      case MemoryType.Temp:
        this.validateRange(this.tempFloats + 1, TEMP_CHAR);
        return this.tempFloats++;
      case MemoryType.Constant:
        this.validateRange(this.constFloats + 1, CONST_CHAR);
        return this.constFloats++;
    }
  }
  /**
   * Creates a new char, validates the range and returns its address
   * @param type MemoryType
   */
  public newChar(type: MemoryType): number {
    switch (type) {
      case MemoryType.Global:
        this.validateRange(this.globalChars + 1, LOCAL_INT);
        return this.globalChars++;
      case MemoryType.Local:
        this.validateRange(this.localChars + 1, TEMP_INT);
        return this.localChars++;
      case MemoryType.Temp:
        this.validateRange(this.tempChars + 1, TEMP_PTR);
        return this.tempChars++;
      case MemoryType.Constant:
        this.validateRange(this.constChars + 1, CONST_STR);
        return this.constChars++;
    }
  }
  /**
   * Creates a new string, validates the range and returns its address
   */
  public newString(): number {
    this.validateRange(this.constStrings + 1, CONST_STR + 1000);
    return this.constStrings++;
  }
  /**
   * Creates a new pointer, validates the range and returns its address
   */
  public newPointer(): number {
    this.validateRange(this.tempPointers + 1, CONST_INT);
    return this.tempPointers++;
  }
  /**
   * Creates a new array, validates the range and returns its address
   * A space equal with the array's size is separated.
   * @param size size of the array
   * @param type ValueType
   * @param memType MemoryType
   */
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
  /**
   * Creates a new int array, validates the range and returns its address
   * A space equal with the array's size is separated.
   * @param size size of the array
   * @param memType MemoryType
   */
  public addIntArray(size: number, memoryType: MemoryType): void {
    console.log('AddIntArray')
    // subtract one to size because initial address of variable is set when declared
    switch (memoryType) {
      case MemoryType.Global:
        this.validateRange(this.globalInts + size - 2, GLOBAL_FLOAT);
        this.globalInts += size - 1;
        break;
      case MemoryType.Local:
        this.validateRange(this.localInts + size - 2, LOCAL_FLOAT);
        this.localInts += size - 1;
        break;
    }
  }
  /**
   * Creates a new float array, validates the range and returns its address
   * A space equal with the array's size is separated.
   * @param size size of the array
   * @param memType MemoryType
   */
  public addFloatArray(size: number, memoryType: MemoryType): void {
    // subtract one to size because initial address of variable is set when declared
    switch (memoryType) {
      case MemoryType.Global:
        this.validateRange(this.globalFloats + size - 2, GLOBAL_CHAR);
        this.globalFloats += size - 1;
        break;
      case MemoryType.Local:
        this.validateRange(this.localFloats + size - 2, LOCAL_CHAR);
        this.localFloats += size - 1;
        break;
    }
  }
  /**
   * Creates a new char array, validates the range and returns its address
   * A space equal with the array's size is separated.
   * @param size size of the array
   * @param memType MemoryType
   */
  public addCharArray(size: number, memoryType: MemoryType): void {
    // subtract one to size because initial address of variable is set when declared
    switch (memoryType) {
      case MemoryType.Global:
        this.validateRange(this.globalChars + size - 2, LOCAL_INT);
        this.globalChars += size - 1;
        break;
      case MemoryType.Local:
        this.validateRange(this.localChars + size - 2, TEMP_INT);
        this.localChars += size - 1;
        break;
    }
  }
  /**
   * Resets local memory address count.
   */
  public resetLocals(): void {
    this.localInts = LOCAL_INT;
    this.localFloats = LOCAL_FLOAT;
    this.localChars = LOCAL_CHAR;
  }
  /**
   * Resets temporal memory address count.
   */
  public resetTemporals(): void {
    this.tempInts = TEMP_INT;
    this.tempFloats = TEMP_FLOAT;
    this.tempChars = TEMP_CHAR;
    this.tempPointers = TEMP_PTR;
  }
  /**
   * Validates the range of the address, 
   * it the address is out of the range returns out of memory error
   * @param count address
   * @param range maximum valid range
   */
  private validateRange(count: number, range: number): void {
    if (count >= range) {
      throw new Error('Out of memory.');
    }
  }
}

/**
 * Class for memory containing during execution.
 */
export class MemoryContainer {
  private ints: number[];
  private floats: number[];
  private chars: number[];
  private strings?: string[];
  private pointers?: number[];

  private intStart: number;
  private floatStart: number;
  private charStart: number;
  private stringStart?: number;
  private pointerStart?: number;
  /**
   * Initializes the values on the memory container class
   * @param intCount 
   * @param floatCount 
   * @param charCount 
   * @param stringCount 
   * @param pointerCount 
   * @param intStart Start of addresses for ints
   * @param floatStart Start of addresses for floats
   * @param charStart Start of addresses for chars
   * @param stringStart Start of addresses for string
   * @param pointerStart Start of addresses for pointers
   */
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
    this.chars = new Array(charCount).fill(32);
    this.strings = new Array(stringCount).fill(' ');
    this.pointers = new Array(pointerCount).fill(0);
    this.intStart = intStart;
    this.floatStart = floatStart;
    this.charStart = charStart;
    this.stringStart = stringStart;
    this.pointerStart = pointerStart;
  }

  /**
   * Returns the value asociated with the address in virtual memory
   * @param addr 
   */
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
  /**
   * Sets value to the variable associated with the virtual memory address
   * @param addr 
   * @param value 
   */
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
        this.setChar(addr, value as number);
        break;
      case ValueType.STRING:
        this.setString(addr, value as string);
        break;
      case ValueType.POINTER:
        this.setPointer(addr, value as number);
        break;
    }
  }
  /**
   * Returns the int asociated with the address in virtual memory
   * @param addr 
   */
  public getInt(addr: number): number {
    return this.ints[addr - this.intStart];
  }
  /**
   * Returns the float asociated with the address in virtual memory
   * @param addr 
   */
  public getFloat(addr: number): number {
    return this.floats[addr - this.floatStart];
  }
  /**
   * Returns the char asociated with the address in virtual memory
   * @param addr 
   */
  public getChar(addr: number): number {
    return this.chars[addr - this.charStart];
  }
  /**
   * Returns the string asociated with the address in virtual memory
   * @param addr 
   */
  public getString(addr: number): string {
    return this.strings[addr - this.stringStart];
  }
  /**
   * Returns the pointer asociated with the address in virtual memory
   * @param addr 
   */
  public getPointer(addr: number): number {
    return this.pointers[addr - this.pointerStart];
  }
  /**
   * Sets int value to the variable associated with the virtual memory address
   * @param addr 
   * @param value 
   */
  public setInt(addr: number, value: number): void {
    this.ints[addr - this.intStart] = value;
  }
  /**
   * Sets float value to the variable associated with the virtual memory address
   * @param addr 
   * @param value 
   */
  public setFloat(addr: number, value: number): void {
    this.floats[addr - this.floatStart] = value;
  }
  /**
   * Sets char value to the variable associated with the virtual memory address
   * @param addr 
   * @param value 
   */
  public setChar(addr: number, value: number): void {
    this.chars[addr - this.charStart] = value;
  }
  /**
   * Sets string value to the variable associated with the virtual memory address
   * @param addr 
   * @param value 
   */
  public setString(addr: number, value: string): void {
    this.strings[addr - this.stringStart] = value;
  }
  /**
   * Sets pointer value to the variable associated with the virtual memory address
   * @param addr 
   * @param value 
   */
  public setPointer(addr: number, value: number): void {
    this.pointers[addr - this.pointerStart] = value;
  }
  /**
   * Pushes value into the type's array and returns the new address
   * @param value 
   * @param type ValueType
   */
  public pushValue(value: number, type: ValueType): number {
    switch (type) {
      case ValueType.INT:
        return this.pushInt(value);
      case ValueType.FLOAT:
        return this.pushFloat(value);
      case ValueType.CHAR:
        return this.pushChar(value);
    }
  }
  /**
   * Pushes value into the int array and returns the new address
   * @param value 
   */
  public pushInt(value: number): number {
    this.ints.push(value);
    return this.ints.length - 1 + this.intStart;
  }
  /**
   * Pushes value into the float array and returns the new address
   * @param value 
   */
  public pushFloat(value: number): number {
    this.floats.push(value);
    return this.floats.length - 1 + this.floatStart;
  }
  /**
   * Pushes value into the char array and returns the new address
   * @param value 
   */
  public pushChar(value: number): number {
    this.chars.push(value);
    return this.chars.length - 1 + this.charStart;
  }
}
/**
 * Memory for the global context during execution
 */
export class DataSegment {
  public globals: MemoryContainer;
  public temps: MemoryContainer;
  public constants: MemoryContainer;
  /**
   * Initializes the memory containers
   * @param globalTable Function Table
   * @param constantTable Contant Table
   */
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

      if (type === ValueType.INT || type === ValueType.FLOAT || type === ValueType.CHAR) {
        value = Number(value);
      }

      this.constants.setValue(constantTable[key], value);
    }
  }
}
/**
 * Memory for functions during execution
 */
export class ActivationRecord {
  public locals: MemoryContainer;
  public temps: MemoryContainer;
  public name: string;
  /**
   * Initializes the memory containers
   * @param funcTable Function Table
   * @param name Name of the function
   */
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
