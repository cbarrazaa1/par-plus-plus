import { ValueType } from "./Types";

export type VarsTable = {[key: string]: VarsTableRow};
export type VarsTableRow = {
  name: string;
  type: ValueType;
  addr: number;
};

export type FuncTable = {[key: string]: FuncTableRow};
export type FuncTableRow = {
  name: string;
  type: ValueType;
  params: {type: ValueType, addr: number}[];
  vars: VarsTable;
  quadNumber: number;
  tempCount: number;
};

export type ConstantTable = {[key: string]: number};

export function printFuncTable(table: FuncTable): void {
  console.log(`*******************\n** Symbol Tables **\n*******************`);
  console.table(table);
  Object.values(table).forEach((row) => {
    console.log(`--${row.name.toUpperCase()} VARIABLES--`);
    console.table(row.vars);
  });
}