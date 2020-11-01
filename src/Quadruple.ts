import {Stack} from 'typescript-collections';
import {Op} from './semantics/SemanticCube';

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
  GOTOT = 'GOTOT',
  GOTO = 'GOTO',
  WRITE = 'WRITE',
  READ = 'READ',
  GOSUB = 'GOSUB',
  ERA = 'ERA',
  PARAM = 'PARAM',
  RET = 'RET',
  ENDFUNC = 'ENDFUNC',
  END = 'END',
}

type QuadrupleValue = number | string | null;

export type Quadruple = {
  action: QuadrupleAction;
  left: QuadrupleValue;
  right: QuadrupleValue;
  result: QuadrupleValue;
};

export class QuadrupleContext {
  private quads: Quadruple[] = [];
  public operands: Stack<number> = new Stack();
  public operators: Stack<Op> = new Stack();
  public jumps: Stack<number> = new Stack();

  public create(
    action: QuadrupleAction,
    left: QuadrupleValue,
    right: QuadrupleValue,
    result: QuadrupleValue,
  ): void {
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

  public print(): void {
    console.log(`****************\n** Quadruples **\n****************`);
    console.table(this.quads);
  }

  public getQuads(): Quadruple[] {
    return this.quads;
  }
}
