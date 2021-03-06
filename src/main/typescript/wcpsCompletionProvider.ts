import { CodeCompletionCore } from 'antlr4-c3';
import { Token } from 'antlr4ts';
import * as monaco from 'monaco-editor';
import { CustomProps } from '.';

import { wcpsLexer } from '../antlr/wcpsLexer';
import { wcpsParser } from '../antlr/wcpsParser';
import { createLexer, createParserFromLexer } from './ParserFacade';
import { WCPSSymbol } from './symbolTableVisitor';

export default class WCPSCompletionItemProvider
  implements monaco.languages.CompletionItemProvider {
  triggerCharacters?: string[] = ['$', '(', '=', '[', ' '];
  provideCompletionItems(
    model: monaco.editor.ITextModel,
    position: monaco.Position
  ): monaco.languages.ProviderResult<monaco.languages.CompletionList> {
    let { capabilities, parser, symbols }: CustomProps = model['customProps'];
    const summary =
      capabilities?.['wcs:Capabilities']['wcs:Contents']['wcs:CoverageSummary'];
    const token = computeCaretPosition(parser, position);
    if (
      token.text &&
      token.charPositionInLine + token.text.length + 1 === position.column &&
      ![wcpsLexer.COVERAGE_VARIABLE_NAME, wcpsLexer.WS].includes(token.type)
    ) {
      token.tokenIndex++;
      let text = model.getValue();
      for (let i = 0, line = 1, charpos = 0; i < text.length; i++) {
        if (line === position.lineNumber && charpos === position.column) {
          text = text.substring(0, i + 1) + ' ' + text.substring(i + 1);
        }
        if (text[i] === '\n') {
          line++;
          charpos = 0;
        } else charpos++;
      }
      const lexer = createLexer(model.getValue() + ' ');
      lexer.removeErrorListeners();
      parser = createParserFromLexer(lexer);
      parser.removeErrorListeners();
      parser.wcpsQuery();
    }
    const core = new CodeCompletionCore(parser);
    core.preferredRules = new Set([
      wcpsParser.RULE_coverageIdForClause,
      wcpsParser.RULE_dimensionIntervalElement
    ]);

    core.ignoredTokens = new Set(ignoredTokens);
    const candidates = core.collectCandidates(token.tokenIndex);
    const suggestions = [];
    const rules = [];
    for (let i = 0; i < 100; i++) {
      if (candidates.rules.has(i))
        rules.push(
          wcpsParser.ruleNames.find((name) => wcpsParser[`RULE_${name}`] === i)
        );
    }
    candidates.tokens.forEach((tokenList, key) => {
      if (key === wcpsLexer.COVERAGE_VARIABLE_NAME && symbols) {
        let word = model.getWordUntilPosition(position);
        let range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn
        };
        const char = model.getLineContent(position.lineNumber)[
          word.startColumn - 2
        ];
        if (char === '$') range.startColumn -= 1;
        return suggestions.push(
          ...symbols
            .getNestedSymbolsOfType(WCPSSymbol)
            .filter((symbol) => symbol.tokenIndex < token.tokenIndex)
            .map((symbol) => ({
              label: symbol.name,
              insertText: symbol.name,
              value: symbol.values.join(', '),
              kind: monaco.languages.CompletionItemKind.Variable,
              range
            }))
        );
      }
      const symbolic = parser.vocabulary.getSymbolicName(key).toLowerCase();
      const literal = getLiteral(key) || symbolic.replace('_', ' ');
      const insertText = `${literal.replace('_', '')}${
        bracketTokens[tokenList[0]] ? getLiteral(tokenList[0]) : ''
      }`;
      suggestions.push({
        label: symbolic,
        insertText,
        filterText: literal,
        kind: getCompletionKind(tokenList, key),
        ...mappedTokens[key]
      });
    });
    if (candidates.rules.has(wcpsParser.RULE_coverageIdForClause) && summary)
      suggestions.push(
        ...summary.map((v) => ({
          label: v['wcs:CoverageId'],
          insertText: v['wcs:CoverageId'],
          detail: v['wcs:CoverageSubtype'],
          kind: monaco.languages.CompletionItemKind.Keyword
        }))
      );
    if (candidates.rules.has(wcpsParser.RULE_dimensionIntervalElement)) {
      const axis = symbols
        .getNestedSymbolsOfType(WCPSSymbol)
        .reduce((acc, symbol) => {
          if (symbol.descriptions?.length)
            symbol.descriptions.map((desc) => acc.push(...desc.axis));
          return acc;
        }, []);
      suggestions.push(
        ...axis.map((v) => ({
          label: v.label + '()',
          insertText: v.label + '(',
          kind: monaco.languages.CompletionItemKind.Field
        }))
      );
    }
    return { suggestions };
  }
}

const getCompletionKind = (
  tokenList: number[],
  key: number
): monaco.languages.CompletionItemKind => {
  if (bracketTokens[tokenList[0]])
    return monaco.languages.CompletionItemKind.Function;
  return monaco.languages.CompletionItemKind.Keyword;
};

const getLiteral = (key: number): string =>
  wcpsParser.VOCABULARY.getLiteralName(key)?.replace(/^'(.*)'$/, '$1');

const computeCaretPosition = (
  parser: wcpsParser,
  position: monaco.Position
): {
  tokenIndex: number;
  text?: string;
  charPositionInLine?: number;
  type?: number;
} => {
  const tokenStream = parser.inputStream;
  let offset = 0;
  while (true) {
    const token = tokenStream.get(offset++);
    if (token.type == Token.EOF) return { tokenIndex: token.tokenIndex - 1 };
    const start = token.charPositionInLine;
    const stop = start + token.text.length + 1;
    if (
      token.line >= position.lineNumber &&
      start <= position.column &&
      stop >= position.column
    )
      return token;
  }
};

const bracketTokens: Object = {
  [wcpsLexer.LEFT_BRACE]: wcpsLexer.RIGHT_BRACE,
  [wcpsLexer.LEFT_BRACKET]: wcpsLexer.RIGHT_BRACKET,
  [wcpsLexer.LEFT_PARENTHESIS]: wcpsLexer.RIGHT_PARENTHESIS
};

// Map tokens without literal values
const mappedTokens = {
  [wcpsLexer.POWER]: {
    label: 'pow',
    detail: 'Power',
    insertText: 'pow(',
    filterText: 'pow('
  },
  [wcpsLexer.REAL_PART]: {
    label: 're',
    insertText: 're(',
    filterText: 're(',
    detail: 'Real Part'
  },
  [wcpsLexer.SQUARE_ROOT]: {
    label: 'sqrt',
    insertText: 'sqrt(',
    filterText: 'sqrt(',
    detail: 'Square Root'
  },
  [wcpsLexer.UPPER_BOUND]: {
    label: 'hi',
    insertText: 'hi(',
    filterText: 'hi(',
    detail: 'Upper Bound'
  },
  [wcpsLexer.ABSOLUTE_VALUE]: {
    label: 'abs',
    detail: 'Absolute Value',
    insertText: 'abs(',
    filterText: 'abs('
  },
  [wcpsLexer.IMAGINARY_PART]: {
    label: 'im',
    detail: 'Imaginary Part',
    insertText: 'im(',
    filterText: 'im('
  },
  [wcpsLexer.LOWER_BOUND]: {
    label: 'lo',
    insertText: 'lo(',
    filterText: 'lo(',
    detail: 'Lower Bound'
  },
  [wcpsLexer.NAN_NUMBER_CONSTANT]: {
    label: 'NaN',
    insertText: 'NaN',
    filterText: 'NaN',
    detail: 'NaN Number Constant'
  }
};

// Exclude other completions
const ignoredTokens = [
  wcpsLexer.COLON,
  wcpsLexer.COMMA,
  wcpsLexer.COVERAGE_VARIABLE_NAME_PREFIX,
  wcpsLexer.DIVISION,
  wcpsLexer.DOT,
  wcpsLexer.EQUAL,
  wcpsLexer.GREATER_THAN,
  wcpsLexer.GREATER_OR_EQUAL_THAN,
  wcpsLexer.LOWER_THAN,
  wcpsLexer.LOWER_OR_EQUAL_THAN,
  wcpsLexer.MINUS,
  wcpsLexer.MULTIPLICATION,
  wcpsLexer.NOT_EQUAL,
  wcpsLexer.QUOTE,
  wcpsLexer.ESCAPED_QUOTE,
  wcpsLexer.PLUS,
  //wcpsLexer.SEMICOLON,
  wcpsLexer.INTEGER,
  wcpsLexer.REAL_NUMBER_CONSTANT,
  wcpsLexer.SCIENTIFIC_NUMBER_CONSTANT,
  wcpsLexer.POSITIONAL_PARAMETER,
  wcpsLexer.COVERAGE_VARIABLE_NAME,
  wcpsLexer.STRING_LITERAL,
  wcpsLexer.EXTRA_PARAMS
];
