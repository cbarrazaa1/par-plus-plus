import {Stack} from 'typescript-collections';
import {Op} from './semantics/SemanticCube';
import {ValueType} from './semantics/Types';

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
  VERIFY = 'VER',
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

export function quadActionToOp(action: QuadrupleAction): Op {
  switch (action) {
    case QuadrupleAction.ADD:
      return Op.ADD;
    case QuadrupleAction.SUB:
      return Op.SUB;
    case QuadrupleAction.MUL:
      return Op.MUL;
    case QuadrupleAction.DIV:
      return Op.DIV;
    case QuadrupleAction.AND:
      return Op.AND;
    case QuadrupleAction.OR:
      return Op.OR;
    case QuadrupleAction.EQ:
      return Op.EQ;
    case QuadrupleAction.NEQ:
      return Op.NEQ;
    case QuadrupleAction.GT:
      return Op.GT;
    case QuadrupleAction.LT:
      return Op.LT;
    case QuadrupleAction.GTE:
      return Op.GTE;
    case QuadrupleAction.LTE:
      return Op.LTE;
  }
}

export class QuadrupleContext {
  private quads: Quadruple[] = [];
  public operands: Stack<number> = new Stack();
  public operators: Stack<Op> = new Stack();
  public jumps: Stack<number> = new Stack();
  public arrayIds: Stack<string> = new Stack();

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
