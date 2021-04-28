import { CodeCompletionCore } from 'antlr4-c3';
import { createLexer, createParserFromLexer } from './ParserFacade';
import { wcpsLexer } from '../antlr/wcpsLexer';
import { Token } from 'antlr4ts';
import * as monaco from 'monaco-editor';
import { wcpsParser } from '../antlr/wcpsParser';

export function WCPSCompletionProvider(
  model: monaco.editor.ITextModel,
  position: monaco.Position,
  context: monaco.languages.CompletionContext,
  token: monaco.CancellationToken
): monaco.languages.ProviderResult<monaco.languages.CompletionList> {
  const input = model.getLinesContent().join('\n');
  const lexer = createLexer(input);
  const parser = createParserFromLexer(lexer);
  const tree = parser.wcpsQuery();
  const core = new CodeCompletionCore(parser);
  core.ignoredTokens = new Set(ignoredTokens);
  const tokenIndex = computeTokenIndex(parser, position);
  const candidates = core.collectCandidates(tokenIndex);
  const suggestions = [];
  candidates.tokens.forEach((_, k) => {
    const symbolic = parser.vocabulary.getSymbolicName(k);
    const literal =
      parser.vocabulary.getLiteralName(k)?.replace(/^'(.*)'$/, '$1') ||
      symbolic.toLowerCase();
    suggestions.push({
      label: symbolic.toLowerCase(),
      insertText: literal,
      filterText: literal,
      kind: monaco.languages.CompletionItemKind.Keyword
    });
  });
  return { suggestions };
}

const computeTokenIndex = (
  parser: wcpsParser,
  position: monaco.Position
): number => {
  const tokenStream = parser.inputStream;
  let offset = 0;
  while (true) {
    const token = tokenStream.get(offset++);
    if (token.type == Token.EOF) return token.tokenIndex - 1;
    const start = token.charPositionInLine;
    const stop = start + token.text.length + 1;
    if (
      token.line >= position.lineNumber &&
      start <= position.column &&
      stop >= position.column
    )
      return token.tokenIndex;
  }
};

const ignoredTokens = [
  wcpsLexer.COLON,
  wcpsLexer.COMMA,
  wcpsLexer.COVERAGE_VARIABLE_NAME_PREFIX,
  wcpsLexer.DIVISION,
  wcpsLexer.DOT,
  wcpsLexer.EQUAL,
  wcpsLexer.GREATER_THAN,
  wcpsLexer.GREATER_OR_EQUAL_THAN,
  wcpsLexer.LEFT_BRACE,
  wcpsLexer.LEFT_BRACKET,
  wcpsLexer.LEFT_PARENTHESIS,
  wcpsLexer.LOWER_THAN,
  wcpsLexer.LOWER_OR_EQUAL_THAN,
  wcpsLexer.MINUS,
  wcpsLexer.MULTIPLICATION,
  wcpsLexer.NOT_EQUAL,
  wcpsLexer.QUOTE,
  wcpsLexer.ESCAPED_QUOTE,
  wcpsLexer.PLUS,
  wcpsLexer.RIGHT_BRACE,
  wcpsLexer.RIGHT_BRACKET,
  wcpsLexer.RIGHT_PARENTHESIS,
  wcpsLexer.SEMICOLON,
  wcpsLexer.INTEGER,
  wcpsLexer.REAL_NUMBER_CONSTANT,
  wcpsLexer.SCIENTIFIC_NUMBER_CONSTANT,
  wcpsLexer.POSITIONAL_PARAMETER,
  wcpsLexer.COVERAGE_VARIABLE_NAME,
  wcpsLexer.STRING_LITERAL,
  wcpsLexer.EXTRA_PARAMS
];
