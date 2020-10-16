import {Stack} from 'typescript-collections';
import {Op} from './SemanticCube';

export enum QuadrupleAction {
  ADD = '+',
  SUB = '-',
  MUL = '*',
  DIV = '/',
  AND = '&',
  OR = '|',
  EQ = '==',
  NEQ = '!=',
  GT = '>',
  LT = '<',
  GTE = '>=',
  LTE = '<=',
  ASSIGN = '=',
  GOTOF = 'GOTOF',
  GOTOT = 'GOTOV',
  GOTO = 'GOTO',
  WRITE = 'WRITE',
  READ = 'READ',
}

export type Quadruple = {
  action: QuadrupleAction;
  left: number | null;
  right: number | null;
  result: number | null;
}

export class QuadrupleContext {
  public quads: Quadruple[] = [];
  public operands: Stack<number> = new Stack();
  public operators: Stack<Op | null> = new Stack();
  public jumps: Stack<number> = new Stack();

  public create(action: QuadrupleAction, 
    left: number | null, 
    right: number | null, 
    result: number | null): void {
    this.quads.push({
      action,
      left,
      right,
      result,
    });
  }

  public size(): number {
    return this.quads.length;
  }

  public fill(quad: number, dest: number): void {
    this.quads[quad].result = dest;
  }
}