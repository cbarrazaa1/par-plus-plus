import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {ParseTreeWalker} from 'antlr4ts/tree/ParseTreeWalker';
import {ParPlusPlusLexer} from './antlr/ParPlusPlusLexer';
import {ParPlusPlusParser} from './antlr/ParPlusPlusParser';
import {readFileSync, writeFileSync} from 'fs';
import ParseTreeListener from './ParseTreeListener';
import {ParPlusPlusListener} from './antlr/ParPlusPlusListener';
import { ValueType } from './semantics/Types';
import { VirtualMachine } from './VirtualMachine';

function main(): void {
  const fileName = 'test9';

  // compile
  const inputText = readFileSync(`${fileName}.ppp`, 'utf-8');
  const inputStream = CharStreams.fromString(inputText);
  const lexer = new ParPlusPlusLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ParPlusPlusParser(tokenStream);
  const tree = parser.program();
  const listener: ParPlusPlusListener = new ParseTreeListener();
  ParseTreeWalker.DEFAULT.walk(listener, tree);

  // export obj
  const parseTreeListener = listener as ParseTreeListener;
  const funcTable = parseTreeListener.funcTable;

  for (const key in funcTable) {
    // count variable types
    for (const variable in funcTable[key].vars) {
      const type = funcTable[key].vars[variable].type;
      if (type === ValueType.INT) {
        funcTable[key].varCount.ints++;
      } else if (type === ValueType.FLOAT) {
        funcTable[key].varCount.floats++;
      } else {
        funcTable[key].varCount.chars++;
      }
    }

    delete funcTable[key].vars;
    delete funcTable[key].params;
  }
  
  const quads = parseTreeListener.quads.getQuads();
  const constTable = parseTreeListener.constantTable;

  const obj = {
    funcTable,
    quads,
    constTable,
  };
  const json = JSON.stringify(obj);
  writeFileSync(`${fileName}.obj`, json);

  // run virtual machine
  const code = readFileSync(`${fileName}.obj`, 'utf-8');
  const vm = new VirtualMachine(JSON.parse(code));
  vm.run();
}

main();
