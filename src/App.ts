import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {ParseTreeWalker} from 'antlr4ts/tree/ParseTreeWalker';
import {ParPlusPlusLexer} from './antlr/ParPlusPlusLexer';
import {ParPlusPlusParser} from './antlr/ParPlusPlusParser';
import {readFileSync} from 'fs';
import ParseTreeListener from './ParseTreeListener';
import {ParPlusPlusListener} from './antlr/ParPlusPlusListener';

function main(): void {
  const inputText = readFileSync('test4.ppp', 'utf-8');
  const inputStream = CharStreams.fromString(inputText);
  const lexer = new ParPlusPlusLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ParPlusPlusParser(tokenStream);
  const tree = parser.program();
  const listener: ParPlusPlusListener = new ParseTreeListener();
  ParseTreeWalker.DEFAULT.walk(listener, tree);
}

main();
