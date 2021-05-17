import { wcpsLexer } from '../antlr/wcpsLexer';
import { wcpsParser, WcpsQueryContext } from '../antlr/wcpsParser';
import { SymbolTableVisitor, Error } from './symbolTableVisitor';
import { CommonTokenStream, CharStreams, ANTLRErrorListener } from 'antlr4ts';
import { SymbolTable } from 'antlr4-c3';

class CollectorErrorListener implements ANTLRErrorListener<any> {
  constructor(protected readonly errors: Error[] = []) {}
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

export function validate(
  input: string,
  summary: any[],
  descriptions: object
): {
  errors: Error[];
  parser: wcpsParser;
  tree: WcpsQueryContext;
  symbols: SymbolTable;
} {
  const errors: Error[] = [];
  const lexer = createLexer(input);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new CollectorErrorListener(errors));
  const parser = createParserFromLexer(lexer);
  parser.removeErrorListeners();
  parser.addErrorListener(new CollectorErrorListener(errors));
  const tree = parser.wcpsQuery();
  const symbols = new SymbolTableVisitor(errors, summary, descriptions).visit(
    tree
  );
  return { errors: errors, parser, tree, symbols };
}
