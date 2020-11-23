/**
 * Module that has the enumeration for the posible types of value
 */

/**
 * Enumeraton for types of value
 */
export enum ValueType {
  INT,
  FLOAT,
  CHAR,
  VOID,
  STRING,
  POINTER,
}
/**
 * Function that recieves a string and returns the ValueType associated with it.
 * If none matches it will trow an error.
 * @param str 
 * @returns ValueType
 */
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
