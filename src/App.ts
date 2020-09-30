import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {ParPlusPlusLexer} from './antlr/ParPlusPlusLexer';
import {ParPlusPlusParser} from './antlr/ParPlusPlusParser';
import {readFileSync} from 'fs';

function main(): void {
  const inputText = readFileSync('test1.ppp', 'utf-8');
  const inputStream = CharStreams.fromString(inputText);
  const lexer = new ParPlusPlusLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ParPlusPlusParser(tokenStream);
  const tree = parser.program();
  
  console.log(tree);
  console.log(tree.ID().text);
}

main();