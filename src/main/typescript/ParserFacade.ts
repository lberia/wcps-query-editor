import { CommonTokenStream, CharStreams, ANTLRErrorListener } from "antlr4ts";
import { wcpsLexer } from "../antlr/wcpsLexer";
import { wcpsParser } from "../antlr/wcpsParser";

export class Error {
  startLine: number;
  endLine: number;
  startCol: number;
  endCol: number;
  message: string;
  constructor(
    startLine: number,
    endLine: number,
    startCol: number,
    endCol: number,
    message: string
  ) {
    this.startLine = startLine;
    this.endLine = endLine;
    this.startCol = startCol;
    this.endCol = endCol;
    this.message = message;
  }
}
class CollectorErrorListener implements ANTLRErrorListener<any> {
  private errors: Error[] = [];
  constructor(errors: Error[]) {
    this.errors = errors;
  }
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    column++;
    const endColumn = column + (offendingSymbol?._text?.length || 1);
    this.errors.push(new Error(line, line, column, endColumn, msg));
  }
}

export function createLexer(input: string) {
  const chars = CharStreams.fromString(input);
  const lexer = new wcpsLexer(chars);
  //lexer.strictMode = false;
  return lexer;
}

export function createParserFromLexer(lexer: wcpsLexer) {
  const tokens = new CommonTokenStream(lexer);
  return new wcpsParser(tokens);
}

export function validate(input: string): Error[] {
  const errors: Error[] = [];
  const lexer = createLexer(input);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new CollectorErrorListener(errors));
  const parser = createParserFromLexer(lexer);
  parser.removeErrorListeners();
  parser.addErrorListener(new CollectorErrorListener(errors));
  const tree = parser.wcpsQuery();
  return errors.slice(0, 1);
}
