/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />
import { validate } from './ParserFacade';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import { defaultTheme } from './theme';
import wcpsTokensProvider from './wcpsTokensProvider';
import WCPSCompletionItemProvider from './wcpsCompletionProvider';
import axios from 'axios';
import * as xmlParser from 'fast-xml-parser';
import { wcpsParser, WcpsQueryContext } from '../antlr/wcpsParser';
import { SymbolTable } from 'antlr4-c3';
import { WCPSSymbol } from './symbolTableVisitor';

export type CustomProps = {
  capabilities?: object;
  descriptions?: object;
  parser?: wcpsParser;
  tree?: WcpsQueryContext;
  symbols?: SymbolTable;
};

monaco.languages.register({ id: 'wcps' });
monaco.languages.setLanguageConfiguration('wcps', {
  brackets: [
    ['[', ']'],
    ['(', ')'],
    ['{', '}']
  ]
});
monaco.languages.setTokensProvider('wcps', new wcpsTokensProvider());
monaco.languages.registerCompletionItemProvider(
  'wcps',
  new WCPSCompletionItemProvider()
);
monaco.editor.defineTheme('wcpsTheme', defaultTheme);

const defaultText = `for $c in (AvgLandTemp)
return 
    avg($c[Lat(53.08), Long(8.80), ansi("2014-01":"2014-12")])`;

export const create = (
  container: HTMLDivElement,
  initialText: string = defaultText,
  url: string = 'https://ows.rasdaman.org/rasdaman/ows?service=WCS&version=2.0.1&request='
): monaco.editor.IStandaloneCodeEditor => {
  const editor = monaco.editor.create(container, {
    value: initialText,
    language: 'wcps',
    theme: 'wcpsTheme',
    wordBasedSuggestions: false,
    minimap: { enabled: false }
  });
  const customProps: CustomProps = { descriptions: {} };
  editor.getModel()['customProps'] = customProps;
  const onChange = () => {
    const code = editor.getValue();
    const { errors, parser, tree, symbols } = validate(
      code,
      customProps.capabilities?.['wcs:Capabilities']['wcs:Contents'][
        'wcs:CoverageSummary'
      ],
      customProps.descriptions
    );
    monaco.editor.setModelMarkers(editor.getModel(), 'owner', errors);
    customProps.parser = parser;
    customProps.tree = tree;
    customProps.symbols = symbols;
    symbols.getAllNestedSymbols().forEach((symbol: WCPSSymbol) => {
      if (symbol.type === 'coverage' && Array.isArray(symbol.values)) {
        symbol.values.map((id) => {
          if (!customProps.descriptions[id])
            axios.get(`${url}DescribeCoverage&coverageId=${id}`).then((res) => {
              customProps.descriptions[id] = xmlParser.parse(res.data, {
                ignoreAttributes: false
              })['wcs:CoverageDescriptions']['wcs:CoverageDescription'];
              onChange();
            });
        });
      }
    });
  };
  editor.onDidChangeModelContent(onChange);
  onChange();
  editor.onDidChangeModel((e) => {
    editor.getModel()['customProps'] = customProps;
  });

  axios.get(`${url}GetCapabilities`).then((res) => {
    customProps.capabilities = xmlParser.parse(res.data);
  });
  return editor;
};

document.addEventListener('DOMContentLoaded', () =>
  document
    .querySelectorAll('div.wcps-editor')
    .forEach((container: HTMLDivElement) => create(container))
);
