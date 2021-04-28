/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />
import { wcpsTokensProvider } from "./wcpsTokensProvider";
import { validate } from "./ParserFacade";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import { defaultTheme } from "./theme";
import { WCPSCompletionProvider } from "./autocomplete";

monaco.languages.register({ id: "wcps" });
monaco.languages.setLanguageConfiguration("wcps", {
  brackets: [
    ["[", "]"],
    ["(", ")"],
  ],
});
monaco.languages.setTokensProvider("wcps", new wcpsTokensProvider());
monaco.languages.registerCompletionItemProvider("wcps", {
  provideCompletionItems: WCPSCompletionProvider,
});
monaco.editor.defineTheme("wcpsTheme", defaultTheme);

const defaultText = "";

export const create = (
  container: HTMLDivElement,
  initialText: string = defaultText
): monaco.editor.IStandaloneCodeEditor => {
  const editor = monaco.editor.create(container, {
    value: initialText,
    language: "wcps",
    theme: "wcpsTheme",
    wordBasedSuggestions: false,
    minimap: { enabled: false },
  });
  
  editor.onDidChangeModelContent((e) => {
    const code = editor.getValue();
    const syntaxErrors = validate(code);
    const monacoErrors = [];
    const model = editor.getModel();
    for (let e of syntaxErrors) {
      monacoErrors.push({
        startLineNumber: e.startLine,
        startColumn: e.startCol,
        endLineNumber: e.endLine,
        endColumn: e.endCol,
        message: e.message,
        severity: monaco.MarkerSeverity.Error,
      });
    }
    monaco.editor.setModelMarkers(model, "owner", monacoErrors);
  });
  return editor;
};

document
  .querySelectorAll("div.wcps-editor")
  .forEach((container: HTMLDivElement) => create(container));
