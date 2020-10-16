export enum ValueType {
  INT,
  FLOAT,
  CHAR,
  VOID,
  STRING,
}

export type VarsTableRow = {
  name: string;
  type: ValueType;
  virtualDir: number;
};

export type VarsTable = {[key: string]: VarsTableRow};

export type FuncTableRow = {
  name: string;
  type: ValueType;
  vars: VarsTable;
};

export type FuncTable = {[key: string]: FuncTableRow};

export function stringToValueType(str: string): ValueType {
  switch (str) {
    case 'int': return ValueType.INT;
    case 'float': return ValueType.FLOAT;
    case 'char': return ValueType.CHAR;
    case 'void': return ValueType.VOID;
  }

  throw new Error('Invalid type');
}