/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />
import { createLexer } from './ParserFacade';
import { ANTLRErrorListener } from 'antlr4ts';
import ILineTokens = monaco.languages.ILineTokens;
import IToken = monaco.languages.IToken;
import { wcpsLexer } from '../antlr/wcpsLexer';
export class wcpsState implements monaco.languages.IState {
  clone(): monaco.languages.IState {
    return new wcpsState();
  }
  equals(other: monaco.languages.IState): boolean {
    return true;
  }
}
export class wcpsTokensProvider implements monaco.languages.TokensProvider {
  getInitialState(): monaco.languages.IState {
    return new wcpsState();
  }
  tokenize(line: string): monaco.languages.ILineTokens {
    return tokensForLine(line);
  }
}
const EOF = -1;
class wcpsToken implements IToken {
  scopes: string;
  startIndex: number;
  constructor(ruleName: string, startIndex: number) {
    this.scopes = ruleName;
    this.startIndex = startIndex;
  }
}
class wcpsLineTokens implements ILineTokens {
  endState: monaco.languages.IState;
  tokens: monaco.languages.IToken[];
  constructor(tokens: monaco.languages.IToken[]) {
    this.endState = new wcpsState();
    this.tokens = tokens;
  }
}
export function tokensForLine(input: string): monaco.languages.ILineTokens {
  var errorStartingPoints: number[] = [];
  class ErrorCollectorListener implements ANTLRErrorListener<any> {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
      errorStartingPoints.push(column);
    }
  }
  const lexer = createLexer(input);
  lexer.removeErrorListeners();
  let errorListener = new ErrorCollectorListener();
  lexer.addErrorListener(errorListener);
  let done = false;
  let myTokens: monaco.languages.IToken[] = [];
  do {
    let token = lexer.nextToken();
    if (token == null) {
      done = true;
    } else {
      // We exclude EOF
      if (token.type == EOF) {
        done = true;
      } else {
        let tokenTypeName = wcpsLexer.VOCABULARY.getSymbolicName(token.type);
        let myToken = new wcpsToken(tokenTypeName, token.startIndex);
        myTokens.push(myToken);
      }
    }
  } while (!done);
  // Add all errors
  for (let e of errorStartingPoints) {
    myTokens.push(new wcpsToken('ERROR', e));
  }
  myTokens.sort((a, b) => (a.startIndex > b.startIndex ? 1 : -1));
  return new wcpsLineTokens(myTokens);
}
