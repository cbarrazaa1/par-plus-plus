import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {ParseTreeWalker} from 'antlr4ts/tree/ParseTreeWalker';
import {ParPlusPlusLexer} from './antlr/ParPlusPlusLexer';
import {ParPlusPlusParser} from './antlr/ParPlusPlusParser';
import {readFileSync} from 'fs';
import Listener from './Listener';
import {ParPlusPlusListener} from './antlr/ParPlusPlusListener';

function main(): void {
  const inputText = readFileSync('test5.ppp', 'utf-8');
  const inputStream = CharStreams.fromString(inputText);
  const lexer = new ParPlusPlusLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ParPlusPlusParser(tokenStream);
  const tree = parser.program();
  const listener: ParPlusPlusListener = new Listener();
  ParseTreeWalker.DEFAULT.walk(listener, tree);
}

main();
