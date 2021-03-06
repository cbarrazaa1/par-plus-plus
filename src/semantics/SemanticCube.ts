/**
 * Module where the semantic cube is defined
 * the semantic cube is used to determine resultic type in expressions
 */
import { O_APPEND } from 'constants';
import {ValueType} from './Types';

/**
 * Posible operators for the operatiors stack
 */
export enum Op {
  ADD, // +
  SUB, // -
  MUL, // *
  DIV, // /
  AND, // &
  OR, // |
  EQ, // ==
  NEQ, // !=
  GT, // >
  LT, // <
  GTE, // >=
  LTE, // =<
  ASSIGN, // =
  FalseBottom, // False bottom for expressions
  FunctionFalseBottom, // False bottom for functions
  ArrayFalseBottom, // False bottom for vectors and matrices
}

const cube = new Array(3);
for (let i = 0; i < 4; i++) {
  cube[i] = new Array(3);
  for (let j = 0; j < 4; j++) {
    cube[i][j] = new Array(12).fill(null);
  }
}

cube[ValueType.INT][ValueType.INT][Op.ADD] = ValueType.INT;
cube[ValueType.INT][ValueType.INT][Op.SUB] = ValueType.INT;
cube[ValueType.INT][ValueType.INT][Op.MUL] = ValueType.INT;
cube[ValueType.INT][ValueType.INT][Op.DIV] = ValueType.INT;
cube[ValueType.INT][ValueType.INT][Op.AND] = ValueType.INT;
cube[ValueType.INT][ValueType.INT][Op.OR] = ValueType.INT;
cube[ValueType.INT][ValueType.INT][Op.EQ] = ValueType.INT;
cube[ValueType.INT][ValueType.INT][Op.NEQ] = ValueType.INT;
cube[ValueType.INT][ValueType.INT][Op.GT] = ValueType.INT;
cube[ValueType.INT][ValueType.INT][Op.LT] = ValueType.INT;
cube[ValueType.INT][ValueType.INT][Op.GTE] = ValueType.INT;
cube[ValueType.INT][ValueType.INT][Op.LTE] = ValueType.INT;
cube[ValueType.INT][ValueType.INT][Op.ASSIGN] = ValueType.INT;

cube[ValueType.INT][ValueType.FLOAT][Op.ADD] = ValueType.FLOAT;
cube[ValueType.INT][ValueType.FLOAT][Op.SUB] = ValueType.FLOAT;
cube[ValueType.INT][ValueType.FLOAT][Op.MUL] = ValueType.FLOAT;
cube[ValueType.INT][ValueType.FLOAT][Op.DIV] = ValueType.FLOAT;
cube[ValueType.INT][ValueType.FLOAT][Op.EQ] = ValueType.INT;
cube[ValueType.INT][ValueType.FLOAT][Op.NEQ] = ValueType.INT;
cube[ValueType.INT][ValueType.FLOAT][Op.GT] = ValueType.INT;
cube[ValueType.INT][ValueType.FLOAT][Op.LT] = ValueType.INT;
cube[ValueType.INT][ValueType.FLOAT][Op.GTE] = ValueType.INT;
cube[ValueType.INT][ValueType.FLOAT][Op.LTE] = ValueType.INT;
cube[ValueType.INT][ValueType.FLOAT][Op.ASSIGN] = ValueType.INT;

cube[ValueType.INT][ValueType.CHAR][Op.ADD] = ValueType.CHAR;
cube[ValueType.INT][ValueType.CHAR][Op.SUB] = ValueType.CHAR;

cube[ValueType.FLOAT][ValueType.INT][Op.ADD] = ValueType.FLOAT;
cube[ValueType.FLOAT][ValueType.INT][Op.SUB] = ValueType.FLOAT;
cube[ValueType.FLOAT][ValueType.INT][Op.MUL] = ValueType.FLOAT;
cube[ValueType.FLOAT][ValueType.INT][Op.DIV] = ValueType.FLOAT;
cube[ValueType.FLOAT][ValueType.INT][Op.EQ] = ValueType.INT;
cube[ValueType.FLOAT][ValueType.INT][Op.NEQ] = ValueType.INT;
cube[ValueType.FLOAT][ValueType.INT][Op.GT] = ValueType.INT;
cube[ValueType.FLOAT][ValueType.INT][Op.LT] = ValueType.INT;
cube[ValueType.FLOAT][ValueType.INT][Op.GTE] = ValueType.INT;
cube[ValueType.FLOAT][ValueType.INT][Op.LTE] = ValueType.INT;
cube[ValueType.FLOAT][ValueType.INT][Op.ASSIGN] = ValueType.FLOAT;

cube[ValueType.FLOAT][ValueType.FLOAT][Op.ADD] = ValueType.FLOAT;
cube[ValueType.FLOAT][ValueType.FLOAT][Op.SUB] = ValueType.FLOAT;
cube[ValueType.FLOAT][ValueType.FLOAT][Op.MUL] = ValueType.FLOAT;
cube[ValueType.FLOAT][ValueType.FLOAT][Op.DIV] = ValueType.FLOAT;
cube[ValueType.FLOAT][ValueType.FLOAT][Op.EQ] = ValueType.INT;
cube[ValueType.FLOAT][ValueType.FLOAT][Op.NEQ] = ValueType.INT;
cube[ValueType.FLOAT][ValueType.FLOAT][Op.GT] = ValueType.INT;
cube[ValueType.FLOAT][ValueType.FLOAT][Op.LT] = ValueType.INT;
cube[ValueType.FLOAT][ValueType.FLOAT][Op.GTE] = ValueType.INT;
cube[ValueType.FLOAT][ValueType.FLOAT][Op.LTE] = ValueType.INT;
cube[ValueType.FLOAT][ValueType.FLOAT][Op.ASSIGN] = ValueType.FLOAT;

cube[ValueType.CHAR][ValueType.CHAR][Op.EQ] = ValueType.INT;
cube[ValueType.CHAR][ValueType.CHAR][Op.NEQ] = ValueType.INT;
cube[ValueType.CHAR][ValueType.CHAR][Op.GT] = ValueType.INT;
cube[ValueType.CHAR][ValueType.CHAR][Op.LT] = ValueType.INT;
cube[ValueType.CHAR][ValueType.CHAR][Op.GTE] = ValueType.INT;
cube[ValueType.CHAR][ValueType.CHAR][Op.LTE] = ValueType.INT;
cube[ValueType.CHAR][ValueType.CHAR][Op.ASSIGN] = ValueType.CHAR;

cube[ValueType.CHAR][ValueType.INT][Op.ADD] = ValueType.CHAR;
cube[ValueType.CHAR][ValueType.INT][Op.SUB] = ValueType.CHAR;

export const SemanticCube = cube;
