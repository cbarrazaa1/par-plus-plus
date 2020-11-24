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
  VERIFY = 'VER',
  RET = 'RET',
  ENDFUNC = 'ENDFUNC',
  END = 'END',
}

/**
 * Can be an address, a function name or nothing.
 */
type QuadrupleValue = number | string | null;

export type Quadruple = {
  action: QuadrupleAction;
  left: QuadrupleValue;
  right: QuadrupleValue;
  result: QuadrupleValue;
};

/**
 * Converts a quadruple action to its corresponding operator for semantic check
 * @param action Action to convert
 */
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

/**
 * Makes quadruple management easier for creating and filling.
 */
export class QuadrupleContext {
  private quads: Quadruple[] = [];
  public operands: Stack<number> = new Stack();
  public operators: Stack<Op> = new Stack();
  public jumps: Stack<number> = new Stack();
  public arrayIds: Stack<string> = new Stack();

  /**
   * Adds a new quadruple to the quadruple vector
   * @param action Type of quadruple action
   * @param left Left address
   * @param right Right address
   * @param result Result address
   */
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

  /**
   * Gets the total amount of quadruples in the vector
   */
  public size(): number {
    return this.quads.length;
  }

  /**
   * Fills in an incomplete quadruple.
   * @param quad Number of quadruple to fill.
   * @param dest Data to put into incomplete quadruple
   */
  public fill(quad: number, dest: number): void {
    this.quads[quad].result = dest;
  }

  /**
   * Prints the quadruple vector as a table for debugging purposes
   */
  public print(): void {
    console.log(`****************\n** Quadruples **\n****************`);
    console.table(this.quads);
  }

  /**
   * Returns the entire quadruple vector
   */
  public getQuads(): Quadruple[] {
    return this.quads;
  }
}
