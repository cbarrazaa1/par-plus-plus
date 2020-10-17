import { ValueType } from "./Types";

export type VarsTable = {[key: string]: VarsTableRow};
export type VarsTableRow = {
  name: string;
  type: ValueType;
  virtualDir: number;
};

export type FuncTable = {[key: string]: FuncTableRow};
export type FuncTableRow = {
  name: string;
  type: ValueType;
  vars: VarsTable;
};

export function printFuncTable(table: FuncTable): void {
  console.table(table);
  Object.values(table).forEach((row) => console.table(row));
}