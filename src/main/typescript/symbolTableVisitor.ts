import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SymbolTable, ScopedSymbol, Symbol } from 'antlr4-c3';

import { wcpsVisitor } from '../antlr/wcpsVisitor';
import {
  CoverageExpressionScalarLabelContext,
  CoverageExpressionShorthandSubsetLabelContext,
  CoverageExpressionVariableNameLabelContext,
  CoverageVariableNameContext,
  DimensionIntervalElementContext,
  ForClauseLabelContext,
  LetClauseCoverageExpressionLabelContext,
  LetClauseDimensionIntervalListContext,
  SliceDimensionIntervalElementLabelContext,
  TrimDimensionIntervalElementLabelContext
} from '../antlr/wcpsParser';
import { ParserRuleContext } from 'antlr4ts';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

const SUBTYPE = 'wcs:CoverageSubtype';
const ID = 'wcs:CoverageId';
const DOMAIN_SET = 'gml:domainSet';

export class Error implements monaco.editor.IMarkerData {
  constructor(
    public startLineNumber: number,
    public endLineNumber: number,
    public startColumn: number,
    public endColumn: number,
    public message: string,
    public severity: monaco.MarkerSeverity = monaco.MarkerSeverity.Error
  ) {}
}

type description = {
  name: string;
  axis: {
    unit: string;
    label: string;
    max: number | Date;
    min: number | Date;
  }[];
};

export class WCPSSymbol extends Symbol {
  tokenIndex?: number;
  type?: 'coverage' | 'dimension';
  values?: string[];
  descriptions?: description[];
  constructor(
    name: string,
    tokenIndex?: number,
    type?: 'coverage' | 'dimension',
    values?: string[],
    descriptions?: description[]
  ) {
    super(name);
    this.tokenIndex = tokenIndex;
    this.type = type;
    this.values = values;
    this.descriptions = descriptions;
  }
}

export class SymbolTableVisitor
  extends AbstractParseTreeVisitor<SymbolTable>
  implements wcpsVisitor<SymbolTable> {
  constructor(
    protected readonly errors: Error[] = [],
    protected readonly summary: any[] = [],
    protected readonly descriptions: Object = {},
    protected readonly symbolTable: SymbolTable = new SymbolTable('', {}),
    protected scope = symbolTable.addNewSymbolOfType(ScopedSymbol, undefined)
  ) {
    super();
  }

  protected defaultResult(): SymbolTable {
    return this.symbolTable;
  }

  private addMarker = (
    ctx: ParserRuleContext,
    message: string,
    severity: monaco.MarkerSeverity
  ) => {
    this.errors.push(
      new Error(
        ctx.start.line,
        ctx.stop.line,
        ctx.start.charPositionInLine + 1,
        ctx.stop.charPositionInLine + ctx.stop.text.length + 1,
        message,
        severity
      )
    );
  };

  private addWarning = (ctx: ParserRuleContext, message: string) => {
    this.addMarker(ctx, message, monaco.MarkerSeverity.Warning);
    return false;
  };

  private addError = (ctx: ParserRuleContext, message: string) => {
    this.addMarker(ctx, message, monaco.MarkerSeverity.Error);
    return false;
  };

  private addSymbol = (
    ctx: CoverageVariableNameContext,
    type: string,
    values: string[] = [],
    descriptions?: description[]
  ) => {
    const found: WCPSSymbol[] = this.symbolTable.getAllNestedSymbols(ctx.text);
    if (found.length)
      return this.addError(ctx, `Cannot redeclare variable ${ctx.text}`);

    this.symbolTable.addNewSymbolOfType(
      WCPSSymbol,
      this.scope,
      ctx.text,
      ctx.start.tokenIndex,
      type,
      values,
      descriptions
    );
  };

  visitForClauseLabel = (ctx: ForClauseLabelContext) => {
    const ids = ctx.coverageIdForClause();
    const names = [];
    ids.reduce((firstSumm, id) => {
      if (names.includes(id.text))
        this.addError(id, `Duplicate CoverageId ${id.text}`);
      names.push(id.text);
      if (!this.summary) return null;
      const summ = this.summary.find((v) => v[ID] === id.text);
      if (firstSumm && summ && firstSumm[SUBTYPE] !== summ[SUBTYPE])
        this.addWarning(
          id,
          `The first coverage has SubType of ${firstSumm[SUBTYPE]} while this one has ${summ[SUBTYPE]}`
        );
      return firstSumm || summ;
    }, null);
    const descriptions: description[] = ids
      .map((id) => {
        const desc = this.descriptions[id.text];
        if (desc) {
          const envelope = desc['gml:boundedBy']['gml:Envelope'];
          const labels: string[] = envelope['@_axisLabels'].split(' ');
          const units: string[] = envelope['@_uomLabels'].split(' ');
          const lower: string[] = envelope['gml:lowerCorner'].split(' ');
          const upper: string[] = envelope['gml:upperCorner'].split(' ');
          const axis = labels.map((label, i) => ({
            unit: units[i],
            label,
            max: getVal(upper[i]),
            min: getVal(lower[i])
          }));
          return { name: id.text, axis };
        }
        this.addError(id, `Could not find DescribeCoverage of ${id.text}`);
        return null;
      })
      .filter((v) => v);
    const areSimilar =
      descriptions.length === ids.length &&
      descriptions.every(({ axis, name }, i) => {
        if (i > 0) {
          const { axis: firstAxis, name: firstName } = descriptions[0];
          if (firstAxis.length !== axis.length)
            return this.addError(
              ids[i],
              `Mismatched dimensions: '${firstName}' has '${firstAxis.length}' but '${name}' has '${axis.length}'`
            );
          const isSimilar = axis.every((axis) => {
            const same = firstAxis.find((v) => v.label === axis.label);
            if (!same)
              return this.addError(
                ids[i],
                `Label mismatch: Can not find '${
                  axis.label
                }' from '${name}' in '${firstName}' ('${firstName}' axis labels are ${firstAxis
                  .map((v) => `'${v.label}'`)
                  .join(', ')})`
              );
            if (same.unit !== axis.unit)
              return this.addWarning(
                ids[i],
                `Unit mismatch: label '${axis.label}' in '${firstName}' is '${
                  same.unit
                }' but '${
                  axis.unit
                }' in '${name}' ('${firstName}' axis units are ${firstAxis
                  .map((v) => `'${v.label}':'${v.unit}'`)
                  .join(', ')})`
              );
            return true;
          });
          return isSimilar;
        }
        return true;
      });
    this.addSymbol(
      ctx.coverageVariableName(),
      'coverage',
      names,
      areSimilar && descriptions
    );
    return this.visitChildren(ctx);
  };

  visitLetClauseDimensionIntervalList = (
    ctx: LetClauseDimensionIntervalListContext
  ) => {
    const { text } = ctx.dimensionIntervalList();
    this.addSymbol(ctx.coverageVariableName(), 'dimension', text.split(', '));
    return this.visitChildren(ctx);
  };

  visitLetClauseCoverageExpressionLabel = (
    ctx: LetClauseCoverageExpressionLabelContext
  ) => {
    const expression = ctx.coverageExpression();
    this.addSymbol(ctx.coverageVariableName(), 'expression');
    return this.visitChildren(ctx);
  };

  visitCoverageExpressionVariableNameLabel = (
    ctx: CoverageExpressionVariableNameLabelContext
  ) => {
    const symbol: WCPSSymbol = this.symbolTable.getAllNestedSymbols(
      ctx.text
    )[0];
    if (!symbol) this.addError(ctx, `Cannot find name '${ctx.text}'`);
    const descs = symbol?.descriptions;
    if (
      ctx.parent instanceof CoverageExpressionShorthandSubsetLabelContext &&
      symbol?.descriptions?.length
    ) {
      const intervalElements = ctx.parent
        .dimensionIntervalList()
        .children.filter((v) => v instanceof DimensionIntervalElementContext);
      intervalElements.forEach(
        (
          interval:
            | TrimDimensionIntervalElementLabelContext
            | SliceDimensionIntervalElementLabelContext,
          intervalIndex
        ) => {
          const name = interval.axisName().text;
          if (
            intervalElements.some(
              (v: any, i) => i < intervalIndex && v.axisName().text === name
            )
          )
            return this.addError(
              interval,
              `Duplicate axis found: '${name}' already exists in this interval list`
            );
          symbol.descriptions.every((desc) => {
            const found = desc.axis.find((axis) => axis.label === name);
            if (!found)
              return this.addWarning(
                interval.axisName(),
                `'${name}' is not a valid axis label of '${ctx.text}'`
              );
            const { min, max, label } = found;
            const expressions = interval.children.filter(
              (v) => v instanceof CoverageExpressionScalarLabelContext
            );
            return expressions.reduce(
              (acc: boolean, expr: CoverageExpressionScalarLabelContext) => {
                const value = getVal(expr.text);
                if (value.constructor.name !== min.constructor.name)
                  return this.addError(
                    expr,
                    `CRS of axis '${label}' is not ${value.constructor.name}, it is ${min.constructor.name}`
                  );
                if (value < min)
                  return this.addError(
                    expr,
                    `${val(value)} is less than the lower bound ( ${val(
                      min
                    )} ) of axis '${label}' for '${desc.name}'`
                  );
                if (value > max)
                  return this.addError(
                    expr,
                    `${val(value)} exceeds the upper bound ( ${val(
                      max
                    )} ) of axis '${label}' for ${desc.name}`
                  );
                return acc;
              },
              true
            );
          });
        }
      );
    }
    return this.visitChildren(ctx);
  };
}

const getVal = (val: string) =>
  isNaN(Number(val)) ? new Date(JSON.parse(val)) : Number(val);

const val = (val: number | Date) =>
  val instanceof Date ? val.toISOString() : val;
