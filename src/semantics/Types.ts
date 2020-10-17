export enum ValueType {
  INT,
  FLOAT,
  CHAR,
  VOID,
  STRING,
}

export function stringToValueType(str: string): ValueType {
  switch (str) {
    case 'int':
      return ValueType.INT;
    case 'float':
      return ValueType.FLOAT;
    case 'char':
      return ValueType.CHAR;
    case 'void':
      return ValueType.VOID;
  }

  throw new Error('Invalid type');
}
