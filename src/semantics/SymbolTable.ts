/**
 * Module where the symbol table is defined.
 * Includes tables for variables, functions and constants.
 */
import { ValueType } from "./Types";

/**
 * Table for variables
 */
export type VarsTable = {[key: string]: VarsTableRow};

/**
 * A row in the variable table
 */
export type VarsTableRow = {
  name: string;
  type: ValueType;
  addr: number;
  vectorSize: number | null;
  matrixSize: number | null;
};

/**
 * Counters for each type of variable
 */
type VarCounter = {
  ints: number;
  floats: number;
  chars: number;
  pointers: number;
}

/**
 * Table for functions
 */
export type FuncTable = {[key: string]: FuncTableRow};

/**
 * A row in the function table
 */
export type FuncTableRow = {
  name: string;
  type: ValueType;
  params: {type: ValueType, addr: number}[];
  vars: VarsTable;
  quadNumber: number;
  varCount: VarCounter;
  tempCount: VarCounter;
};   

/**
 * Table for constants
 */
export type ConstantTable = {[key: string]: number};

/**
 * Function that prints the function table and the variables related to each function.
 * @param table 
 */
export function printFuncTable(table: FuncTable): void {
  console.log(`*******************\n** Symbol Tables **\n*******************`);
  console.table(table);
  Object.values(table).forEach((row) => {
    console.log(`--${row.name.toUpperCase()} VARIABLES--`);
    console.table(row.vars);
  });
}