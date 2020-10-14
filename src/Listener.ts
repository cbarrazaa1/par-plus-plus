import {ParPlusPlusListener} from './antlr/ParPlusPlusListener';
import { FunctionContext, Func_paramsContext, ProgramContext, TypeContext, VarsContext, Var_id_declContext } from './antlr/ParPlusPlusParser';
import { FuncTable, stringToValueType, ValueType } from './SymbolTables';
import {SemanticCube, Op} from './SemanticCube';

export default class Listener implements ParPlusPlusListener {
  private funcTable: FuncTable;
  private currentType: ValueType;
  private currentFunc: string;

  constructor() {
    this.funcTable = {
      'global': {
        name: 'global',
        type: ValueType.VOID,
        vars: {},
      },
    };
    this.currentType = ValueType.VOID;
    this.currentFunc = 'global';
  }

  exitProgram(): void {
    console.log(this.funcTable);
    console.log(SemanticCube[ValueType.CHAR][ValueType.CHAR][Op.EQ]);
  }
  
  exitType(ctx: TypeContext): void {
    this.currentType = stringToValueType(ctx.text);
  }

  exitVar_id_decl(ctx: Var_id_declContext): void {
    const id = ctx.ID().text;

    // check if exists
    if (this.funcTable[this.currentFunc].vars[id] != null) {
      throw new Error(`Variable ${id} already declared.`);
    }

    this.funcTable[this.currentFunc].vars[id] = {
      name: id,
      type: this.currentType,
    };
  }

  enterFunction(ctx: FunctionContext): void {
    const name = ctx.ID().text;
    const type = stringToValueType(ctx.type() != null ? ctx.type().text : 'void');
    this.currentFunc = name;

    // check if exists
    if (this.funcTable[name] != null) {
      throw new Error(`Function ${name} already declared.`);
    }

    this.funcTable[name] = {
      name,
      type,
      vars: {}
    };
  }

  exitFunc_params(ctx: Func_paramsContext): void {
    const n = ctx.type().length;
    const names = ctx.ID();
    const types = ctx.type();

    for (let i = 0; i < n; i++) {
      const name = names[i].text;

      // check if exists
      if (this.funcTable[this.currentFunc].vars[name] != null) {
        throw new Error(`Variable ${name} already declared.`);
      }

      this.funcTable[this.currentFunc].vars[name] = {
        name,
        type: stringToValueType(types[i].text),
      };
    }
  }
}