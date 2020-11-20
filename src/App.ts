import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {ParseTreeWalker} from 'antlr4ts/tree/ParseTreeWalker';
import {ParPlusPlusLexer} from './antlr/ParPlusPlusLexer';
import {ParPlusPlusParser} from './antlr/ParPlusPlusParser';
import {readFileSync, writeFileSync} from 'fs';
import ParseTreeListener from './ParseTreeListener';
import {ParPlusPlusListener} from './antlr/ParPlusPlusListener';
import {ValueType} from './semantics/Types';
import {VirtualMachine} from './VirtualMachine';
import ErrorHandler from './ErrorHandler';

function main(): void {
  const fileName = 'tests/test13';

  // compile
  const inputText = readFileSync(`${fileName}.ppp`, 'utf-8');
  const inputStream = CharStreams.fromString(inputText);
  const lexer = new ParPlusPlusLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ParPlusPlusParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(new ErrorHandler());
  const tree = parser.program();
  const listener: ParPlusPlusListener = new ParseTreeListener();
  ParseTreeWalker.DEFAULT.walk(listener, tree);

  // export obj
  const parseTreeListener = listener as ParseTreeListener;
  const funcTable = parseTreeListener.funcTable;

  for (const key in funcTable) {
    // count variable types
    for (const variableName in funcTable[key].vars) {
      const variable = funcTable[key].vars[variableName];
      const type = variable.type;
      if (type === ValueType.INT) {
        funcTable[key].varCount.ints++;

        if (variable.vectorSize != null) {
          if (variable.matrixSize != null) {
            funcTable[key].varCount.ints +=
              variable.vectorSize * variable.matrixSize - 1;
          } else {
            funcTable[key].varCount.ints += variable.vectorSize - 1;
          }
        }
      } else if (type === ValueType.FLOAT) {
        funcTable[key].varCount.floats++;

        if (variable.vectorSize != null) {
          if (variable.matrixSize != null) {
            funcTable[key].varCount.floats +=
              variable.vectorSize * variable.matrixSize - 1;
          } else {
            funcTable[key].varCount.floats += variable.vectorSize - 1;
          }
        }
      } else {
        funcTable[key].varCount.chars++;

        if (variable.vectorSize != null) {
          if (variable.matrixSize != null) {
            funcTable[key].varCount.chars +=
              variable.vectorSize * variable.matrixSize - 1;
          } else {
            funcTable[key].varCount.chars += variable.vectorSize - 1;
          }
        }
      }
    }

    delete funcTable[key].vars;
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
