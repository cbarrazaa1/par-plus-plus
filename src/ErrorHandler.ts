import {
  ParserErrorListener,
  RecognitionException,
  Recognizer,
  Token,
} from 'antlr4ts';

class ErrorHandler implements ParserErrorListener {
  public syntaxError<T extends Token>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException,
  ): void {
    throw new Error(
      `SYNTAX ERROR in Line ${line} Col ${charPositionInLine}: ${msg}`,
    );
  }
}

export default ErrorHandler;