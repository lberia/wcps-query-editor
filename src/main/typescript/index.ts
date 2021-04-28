/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />
import { wcpsTokensProvider } from './wcpsTokensProvider';
import { validate } from './ParserFacade';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import { defaultTheme } from './theme';
import { WCPSCompletionProvider } from './autocomplete';

monaco.languages.register({ id: 'wcps' });
monaco.languages.setLanguageConfiguration('wcps', {
  brackets: [
    ['[', ']'],
    ['(', ')']
  ]
});
monaco.languages.setTokensProvider('wcps', new wcpsTokensProvider());
monaco.languages.registerCompletionItemProvider('wcps', {
  provideCompletionItems: WCPSCompletionProvider
});
monaco.languages.onLanguage('wcps', () => console.log('hmm'));
monaco.editor.defineTheme('wcpsTheme', defaultTheme);

const defaultText = '';

export const create = (
  container: HTMLDivElement,
  initialText: string = defaultText
): monaco.editor.IStandaloneCodeEditor => {
  const editor = monaco.editor.create(container, {
    value: initialText,
    language: 'wcps',
    theme: 'wcpsTheme',
    wordBasedSuggestions: false,
    minimap: { enabled: false }
  });

  editor.onDidChangeModelContent((e) => {
    const code = editor.getValue();
    const syntaxErrors = validate(code);
    monaco.editor.setModelMarkers(editor.getModel(), 'owner', syntaxErrors);
  });
  return editor;
};

document.addEventListener('DOMContentLoaded', () =>
  document
    .querySelectorAll('div.wcps-editor')
    .forEach((container: HTMLDivElement) => create(container))
);
