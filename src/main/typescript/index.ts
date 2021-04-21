/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />
import { wcpsTokensProvider } from "./wcpsTokensProvider";
import { validate } from "./ParserFacade";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import { defaultTheme } from "./theme";
import { WCPSCompletionProvider } from "./autocomplete";

const defaultText = `for $c in (S2_L2A_32631_B08_10m),
$d in (S2_L2A_32631_B04_10m)

return
encode(
coverage averageNdviValues
over $pt t(imageCrsDomain($c[ansi("2017-04-03" : "2017-04-09" )], ansi)) 
values
avg(
  (((float) $c - $d) / ((float) $c + $d))
  [ ansi( $pt ), E( 640000:640100 ), N( 5090220:5090320 ) ]
),
"json")`;

interface Config {
  theme?: monaco.editor.IStandaloneThemeData;
  initialText?: string;
}

export const create = (
  container: HTMLDivElement,
  { theme = defaultTheme, initialText = defaultText }: Config = {}
) => {
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
  monaco.editor.defineTheme("wcpsTheme", theme);
  let editor = monaco.editor.create(container, {
    value: initialText,
    language: "wcps",
    theme: "wcpsTheme",
    wordBasedSuggestions: false,
    minimap: { enabled: false },
  });
  editor.onDidChangeModelContent(function (e) {
    let code = editor.getValue();
    let syntaxErrors = validate(code);
    let monacoErrors = [];
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
    let model = editor.getModel();
    monaco.editor.setModelMarkers(model, "owner", monacoErrors);
  });
};

document
  .querySelectorAll("div.wcps-editor")
  .forEach((container: HTMLDivElement) => create(container));
