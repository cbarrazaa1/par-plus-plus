export enum ValueType {
  INT,
  FLOAT,
  CHAR,
  VOID,
  STRING,
  POINTER,
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
    case 'pointer':
      return ValueType.POINTER;
  }

  throw new Error('Invalid type');
}
