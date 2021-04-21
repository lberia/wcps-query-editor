// Generated from src/main/antlr/wcps.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class wcpsParser extends Parser {
	public static readonly FOR = 1;
	public static readonly ABSOLUTE_VALUE = 2;
	public static readonly ADD = 3;
	public static readonly ALL = 4;
	public static readonly AND = 5;
	public static readonly ARCSIN = 6;
	public static readonly ARCCOS = 7;
	public static readonly ARCTAN = 8;
	public static readonly AVG = 9;
	public static readonly BIT = 10;
	public static readonly CASE = 11;
	public static readonly CLIP = 12;
	public static readonly COLON = 13;
	public static readonly COMMA = 14;
	public static readonly CONDENSE = 15;
	public static readonly COS = 16;
	public static readonly COSH = 17;
	public static readonly COUNT = 18;
	public static readonly CURTAIN = 19;
	public static readonly CORRIDOR = 20;
	public static readonly COVERAGE = 21;
	public static readonly COVERAGE_VARIABLE_NAME_PREFIX = 22;
	public static readonly DECODE = 23;
	public static readonly DEFAULT = 24;
	public static readonly DISCRETE = 25;
	public static readonly DESCRIBE_COVERAGE = 26;
	public static readonly DIVISION = 27;
	public static readonly DOT = 28;
	public static readonly ENCODE = 29;
	public static readonly EQUAL = 30;
	public static readonly EXP = 31;
	public static readonly EXTEND = 32;
	public static readonly FALSE = 33;
	public static readonly GREATER_THAN = 34;
	public static readonly GREATER_OR_EQUAL_THAN = 35;
	public static readonly IMAGINARY_PART = 36;
	public static readonly IDENTIFIER = 37;
	public static readonly CRSSET = 38;
	public static readonly IMAGECRSDOMAIN = 39;
	public static readonly IMAGECRS = 40;
	public static readonly IS = 41;
	public static readonly DOMAIN = 42;
	public static readonly IN = 43;
	public static readonly LEFT_BRACE = 44;
	public static readonly LEFT_BRACKET = 45;
	public static readonly LEFT_PARENTHESIS = 46;
	public static readonly LET = 47;
	public static readonly LN = 48;
	public static readonly LIST = 49;
	public static readonly LOG = 50;
	public static readonly LOWER_BOUND = 51;
	public static readonly LOWER_THAN = 52;
	public static readonly LOWER_OR_EQUAL_THAN = 53;
	public static readonly MAX = 54;
	public static readonly MIN = 55;
	public static readonly MINUS = 56;
	public static readonly MULTIPLICATION = 57;
	public static readonly NOT = 58;
	public static readonly NOT_EQUAL = 59;
	public static readonly NAN_NUMBER_CONSTANT = 60;
	public static readonly NULL = 61;
	public static readonly OR = 62;
	public static readonly OVER = 63;
	public static readonly OVERLAY = 64;
	public static readonly QUOTE = 65;
	public static readonly ESCAPED_QUOTE = 66;
	public static readonly PLUS = 67;
	public static readonly POWER = 68;
	public static readonly REAL_PART = 69;
	public static readonly ROUND = 70;
	public static readonly RETURN = 71;
	public static readonly RIGHT_BRACE = 72;
	public static readonly RIGHT_BRACKET = 73;
	public static readonly RIGHT_PARENTHESIS = 74;
	public static readonly SCALE = 75;
	public static readonly SCALE_FACTOR = 76;
	public static readonly SCALE_AXES = 77;
	public static readonly SCALE_SIZE = 78;
	public static readonly SCALE_EXTENT = 79;
	public static readonly SEMICOLON = 80;
	public static readonly SIN = 81;
	public static readonly SINH = 82;
	public static readonly SLICE = 83;
	public static readonly SOME = 84;
	public static readonly SQUARE_ROOT = 85;
	public static readonly STRUCT = 86;
	public static readonly SWITCH = 87;
	public static readonly TAN = 88;
	public static readonly TANH = 89;
	public static readonly TRIM = 90;
	public static readonly TRUE = 91;
	public static readonly USING = 92;
	public static readonly UPPER_BOUND = 93;
	public static readonly VALUE = 94;
	public static readonly VALUES = 95;
	public static readonly WHERE = 96;
	public static readonly XOR = 97;
	public static readonly CRS_TRANSFORM = 98;
	public static readonly POLYGON = 99;
	public static readonly LINESTRING = 100;
	public static readonly MULTIPOLYGON = 101;
	public static readonly PROJECTION = 102;
	public static readonly WITH_COORDINATES = 103;
	public static readonly INTEGER = 104;
	public static readonly REAL_NUMBER_CONSTANT = 105;
	public static readonly SCIENTIFIC_NUMBER_CONSTANT = 106;
	public static readonly POSITIONAL_PARAMETER = 107;
	public static readonly COVERAGE_VARIABLE_NAME = 108;
	public static readonly STRING_LITERAL = 109;
	public static readonly WS = 110;
	public static readonly EXTRA_PARAMS = 111;
	public static readonly RULE_wcpsQuery = 0;
	public static readonly RULE_forClauseList = 1;
	public static readonly RULE_coverageIdForClause = 2;
	public static readonly RULE_forClause = 3;
	public static readonly RULE_letClauseList = 4;
	public static readonly RULE_letClauseDimensionIntervalList = 5;
	public static readonly RULE_letClause = 6;
	public static readonly RULE_whereClause = 7;
	public static readonly RULE_returnClause = 8;
	public static readonly RULE_coverageVariableName = 9;
	public static readonly RULE_processingExpression = 10;
	public static readonly RULE_scalarValueCoverageExpression = 11;
	public static readonly RULE_scalarExpression = 12;
	public static readonly RULE_booleanScalarExpression = 13;
	public static readonly RULE_booleanUnaryOperator = 14;
	public static readonly RULE_booleanConstant = 15;
	public static readonly RULE_booleanOperator = 16;
	public static readonly RULE_numericalComparissonOperator = 17;
	public static readonly RULE_stringOperator = 18;
	public static readonly RULE_stringScalarExpression = 19;
	public static readonly RULE_starExpression = 20;
	public static readonly RULE_booleanSwitchCaseCoverageExpression = 21;
	public static readonly RULE_booleanSwitchCaseCombinedExpression = 22;
	public static readonly RULE_numericalScalarExpression = 23;
	public static readonly RULE_complexNumberConstant = 24;
	public static readonly RULE_numericalOperator = 25;
	public static readonly RULE_numericalUnaryOperation = 26;
	public static readonly RULE_trigonometricOperator = 27;
	public static readonly RULE_getComponentExpression = 28;
	public static readonly RULE_coverageIdentifierExpression = 29;
	public static readonly RULE_coverageCrsSetExpression = 30;
	public static readonly RULE_sdomExtraction = 31;
	public static readonly RULE_domainExpression = 32;
	public static readonly RULE_imageCrsDomainByDimensionExpression = 33;
	public static readonly RULE_imageCrsDomainExpression = 34;
	public static readonly RULE_imageCrsExpression = 35;
	public static readonly RULE_describeCoverageExpression = 36;
	public static readonly RULE_domainIntervals = 37;
	public static readonly RULE_positionalParamater = 38;
	public static readonly RULE_extraParams = 39;
	public static readonly RULE_encodedCoverageExpression = 40;
	public static readonly RULE_decodeCoverageExpression = 41;
	public static readonly RULE_coverageExpression = 42;
	public static readonly RULE_coverageArithmeticOperator = 43;
	public static readonly RULE_unaryArithmeticExpressionOperator = 44;
	public static readonly RULE_unaryArithmeticExpression = 45;
	public static readonly RULE_trigonometricExpression = 46;
	public static readonly RULE_exponentialExpressionOperator = 47;
	public static readonly RULE_exponentialExpression = 48;
	public static readonly RULE_unaryPowerExpression = 49;
	public static readonly RULE_minBinaryExpression = 50;
	public static readonly RULE_maxBinaryExpression = 51;
	public static readonly RULE_unaryBooleanExpression = 52;
	public static readonly RULE_rangeType = 53;
	public static readonly RULE_castExpression = 54;
	public static readonly RULE_fieldName = 55;
	public static readonly RULE_rangeConstructorExpression = 56;
	public static readonly RULE_rangeConstructorSwitchCaseExpression = 57;
	public static readonly RULE_dimensionPointList = 58;
	public static readonly RULE_dimensionPointElement = 59;
	public static readonly RULE_dimensionIntervalList = 60;
	public static readonly RULE_scaleDimensionIntervalList = 61;
	public static readonly RULE_scaleDimensionIntervalElement = 62;
	public static readonly RULE_dimensionIntervalElement = 63;
	public static readonly RULE_wktPoints = 64;
	public static readonly RULE_wktPointElementList = 65;
	public static readonly RULE_wktLineString = 66;
	public static readonly RULE_wktPolygon = 67;
	public static readonly RULE_wktMultipolygon = 68;
	public static readonly RULE_wktExpression = 69;
	public static readonly RULE_curtainProjectionAxisLabel1 = 70;
	public static readonly RULE_curtainProjectionAxisLabel2 = 71;
	public static readonly RULE_clipCurtainExpression = 72;
	public static readonly RULE_corridorProjectionAxisLabel1 = 73;
	public static readonly RULE_corridorProjectionAxisLabel2 = 74;
	public static readonly RULE_clipCorridorExpression = 75;
	public static readonly RULE_clipWKTExpression = 76;
	public static readonly RULE_crsTransformExpression = 77;
	public static readonly RULE_dimensionCrsList = 78;
	public static readonly RULE_dimensionCrsElement = 79;
	public static readonly RULE_interpolationType = 80;
	public static readonly RULE_coverageConstructorExpression = 81;
	public static readonly RULE_axisIterator = 82;
	public static readonly RULE_intervalExpression = 83;
	public static readonly RULE_coverageConstantExpression = 84;
	public static readonly RULE_axisSpec = 85;
	public static readonly RULE_condenseExpression = 86;
	public static readonly RULE_reduceBooleanExpressionOperator = 87;
	public static readonly RULE_reduceNumericalExpressionOperator = 88;
	public static readonly RULE_reduceBooleanExpression = 89;
	public static readonly RULE_reduceNumericalExpression = 90;
	public static readonly RULE_reduceExpression = 91;
	public static readonly RULE_condenseExpressionOperator = 92;
	public static readonly RULE_generalCondenseExpression = 93;
	public static readonly RULE_switchCaseExpression = 94;
	public static readonly RULE_crsName = 95;
	public static readonly RULE_axisName = 96;
	public static readonly RULE_number = 97;
	public static readonly RULE_constant = 98;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"wcpsQuery", "forClauseList", "coverageIdForClause", "forClause", "letClauseList", 
		"letClauseDimensionIntervalList", "letClause", "whereClause", "returnClause", 
		"coverageVariableName", "processingExpression", "scalarValueCoverageExpression", 
		"scalarExpression", "booleanScalarExpression", "booleanUnaryOperator", 
		"booleanConstant", "booleanOperator", "numericalComparissonOperator", 
		"stringOperator", "stringScalarExpression", "starExpression", "booleanSwitchCaseCoverageExpression", 
		"booleanSwitchCaseCombinedExpression", "numericalScalarExpression", "complexNumberConstant", 
		"numericalOperator", "numericalUnaryOperation", "trigonometricOperator", 
		"getComponentExpression", "coverageIdentifierExpression", "coverageCrsSetExpression", 
		"sdomExtraction", "domainExpression", "imageCrsDomainByDimensionExpression", 
		"imageCrsDomainExpression", "imageCrsExpression", "describeCoverageExpression", 
		"domainIntervals", "positionalParamater", "extraParams", "encodedCoverageExpression", 
		"decodeCoverageExpression", "coverageExpression", "coverageArithmeticOperator", 
		"unaryArithmeticExpressionOperator", "unaryArithmeticExpression", "trigonometricExpression", 
		"exponentialExpressionOperator", "exponentialExpression", "unaryPowerExpression", 
		"minBinaryExpression", "maxBinaryExpression", "unaryBooleanExpression", 
		"rangeType", "castExpression", "fieldName", "rangeConstructorExpression", 
		"rangeConstructorSwitchCaseExpression", "dimensionPointList", "dimensionPointElement", 
		"dimensionIntervalList", "scaleDimensionIntervalList", "scaleDimensionIntervalElement", 
		"dimensionIntervalElement", "wktPoints", "wktPointElementList", "wktLineString", 
		"wktPolygon", "wktMultipolygon", "wktExpression", "curtainProjectionAxisLabel1", 
		"curtainProjectionAxisLabel2", "clipCurtainExpression", "corridorProjectionAxisLabel1", 
		"corridorProjectionAxisLabel2", "clipCorridorExpression", "clipWKTExpression", 
		"crsTransformExpression", "dimensionCrsList", "dimensionCrsElement", "interpolationType", 
		"coverageConstructorExpression", "axisIterator", "intervalExpression", 
		"coverageConstantExpression", "axisSpec", "condenseExpression", "reduceBooleanExpressionOperator", 
		"reduceNumericalExpressionOperator", "reduceBooleanExpression", "reduceNumericalExpression", 
		"reduceExpression", "condenseExpressionOperator", "generalCondenseExpression", 
		"switchCaseExpression", "crsName", "axisName", "number", "constant",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "':'", 
		"','", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'$'", undefined, undefined, undefined, undefined, "'/'", "'.'", 
		undefined, "'='", undefined, undefined, undefined, "'>'", "'>='", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'{'", "'['", "'('", undefined, undefined, undefined, undefined, undefined, 
		"'<'", "'<='", undefined, undefined, "'-'", "'*'", undefined, "'!='", 
		undefined, undefined, undefined, undefined, undefined, "'\"'", "'\\'", 
		"'+'", undefined, undefined, undefined, undefined, "'}'", "']'", "')'", 
		undefined, undefined, undefined, undefined, undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FOR", "ABSOLUTE_VALUE", "ADD", "ALL", "AND", "ARCSIN", "ARCCOS", 
		"ARCTAN", "AVG", "BIT", "CASE", "CLIP", "COLON", "COMMA", "CONDENSE", 
		"COS", "COSH", "COUNT", "CURTAIN", "CORRIDOR", "COVERAGE", "COVERAGE_VARIABLE_NAME_PREFIX", 
		"DECODE", "DEFAULT", "DISCRETE", "DESCRIBE_COVERAGE", "DIVISION", "DOT", 
		"ENCODE", "EQUAL", "EXP", "EXTEND", "FALSE", "GREATER_THAN", "GREATER_OR_EQUAL_THAN", 
		"IMAGINARY_PART", "IDENTIFIER", "CRSSET", "IMAGECRSDOMAIN", "IMAGECRS", 
		"IS", "DOMAIN", "IN", "LEFT_BRACE", "LEFT_BRACKET", "LEFT_PARENTHESIS", 
		"LET", "LN", "LIST", "LOG", "LOWER_BOUND", "LOWER_THAN", "LOWER_OR_EQUAL_THAN", 
		"MAX", "MIN", "MINUS", "MULTIPLICATION", "NOT", "NOT_EQUAL", "NAN_NUMBER_CONSTANT", 
		"NULL", "OR", "OVER", "OVERLAY", "QUOTE", "ESCAPED_QUOTE", "PLUS", "POWER", 
		"REAL_PART", "ROUND", "RETURN", "RIGHT_BRACE", "RIGHT_BRACKET", "RIGHT_PARENTHESIS", 
		"SCALE", "SCALE_FACTOR", "SCALE_AXES", "SCALE_SIZE", "SCALE_EXTENT", "SEMICOLON", 
		"SIN", "SINH", "SLICE", "SOME", "SQUARE_ROOT", "STRUCT", "SWITCH", "TAN", 
		"TANH", "TRIM", "TRUE", "USING", "UPPER_BOUND", "VALUE", "VALUES", "WHERE", 
		"XOR", "CRS_TRANSFORM", "POLYGON", "LINESTRING", "MULTIPOLYGON", "PROJECTION", 
		"WITH_COORDINATES", "INTEGER", "REAL_NUMBER_CONSTANT", "SCIENTIFIC_NUMBER_CONSTANT", 
		"POSITIONAL_PARAMETER", "COVERAGE_VARIABLE_NAME", "STRING_LITERAL", "WS", 
		"EXTRA_PARAMS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(wcpsParser._LITERAL_NAMES, wcpsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return wcpsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "wcps.g4"; }

	// @Override
	public get ruleNames(): string[] { return wcpsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return wcpsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(wcpsParser._ATN, this);
	}
	// @RuleVersion(0)
	public wcpsQuery(): WcpsQueryContext {
		let _localctx: WcpsQueryContext = new WcpsQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, wcpsParser.RULE_wcpsQuery);
		let _la: number;
		try {
			_localctx = new WcpsQueryLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 198;
			this.forClauseList();
			}
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.WHERE) {
				{
				this.state = 199;
				this.whereClause();
				}
			}

			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.LET) {
				{
				this.state = 202;
				this.letClauseList();
				}
			}

			{
			this.state = 205;
			this.returnClause();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forClauseList(): ForClauseListContext {
		let _localctx: ForClauseListContext = new ForClauseListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, wcpsParser.RULE_forClauseList);
		let _la: number;
		try {
			_localctx = new ForClauseListLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.match(wcpsParser.FOR);
			{
			this.state = 208;
			this.forClause();
			}
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.COMMA) {
				{
				{
				this.state = 209;
				this.match(wcpsParser.COMMA);
				this.state = 210;
				this.forClause();
				}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageIdForClause(): CoverageIdForClauseContext {
		let _localctx: CoverageIdForClauseContext = new CoverageIdForClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, wcpsParser.RULE_coverageIdForClause);
		try {
			this.state = 218;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wcpsParser.COVERAGE_VARIABLE_NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 216;
				this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
				}
				break;
			case wcpsParser.DECODE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				this.decodeCoverageExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forClause(): ForClauseContext {
		let _localctx: ForClauseContext = new ForClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, wcpsParser.RULE_forClause);
		let _la: number;
		try {
			let _alt: number;
			_localctx = new ForClauseLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.coverageVariableName();
			this.state = 221;
			this.match(wcpsParser.IN);
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.LEFT_PARENTHESIS) {
				{
				this.state = 222;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
			}

			this.state = 225;
			this.coverageIdForClause();
			this.state = 230;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 226;
					this.match(wcpsParser.COMMA);
					this.state = 227;
					this.coverageIdForClause();
					}
					}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.RIGHT_PARENTHESIS) {
				{
				this.state = 233;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letClauseList(): LetClauseListContext {
		let _localctx: LetClauseListContext = new LetClauseListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, wcpsParser.RULE_letClauseList);
		let _la: number;
		try {
			_localctx = new LetClauseListLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(wcpsParser.LET);
			{
			this.state = 237;
			this.letClause();
			}
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.COMMA) {
				{
				{
				this.state = 238;
				this.match(wcpsParser.COMMA);
				this.state = 239;
				this.letClause();
				}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letClauseDimensionIntervalList(): LetClauseDimensionIntervalListContext {
		let _localctx: LetClauseDimensionIntervalListContext = new LetClauseDimensionIntervalListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, wcpsParser.RULE_letClauseDimensionIntervalList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.coverageVariableName();
			this.state = 246;
			this.match(wcpsParser.COLON);
			this.state = 247;
			this.match(wcpsParser.EQUAL);
			this.state = 248;
			this.match(wcpsParser.LEFT_BRACKET);
			this.state = 249;
			this.dimensionIntervalList();
			this.state = 250;
			this.match(wcpsParser.RIGHT_BRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letClause(): LetClauseContext {
		let _localctx: LetClauseContext = new LetClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, wcpsParser.RULE_letClause);
		try {
			this.state = 258;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				_localctx = new LetClauseDimensionIntervalListLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 252;
				this.letClauseDimensionIntervalList();
				}
				break;

			case 2:
				_localctx = new LetClauseCoverageExpressionLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 253;
				this.coverageVariableName();
				this.state = 254;
				this.match(wcpsParser.COLON);
				this.state = 255;
				this.match(wcpsParser.EQUAL);
				this.state = 256;
				this.coverageExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let _localctx: WhereClauseContext = new WhereClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, wcpsParser.RULE_whereClause);
		let _la: number;
		try {
			_localctx = new WhereClauseLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.match(wcpsParser.WHERE);
			this.state = 262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 261;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 264;
			this.coverageExpression(0);
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.RIGHT_PARENTHESIS) {
				{
				this.state = 265;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnClause(): ReturnClauseContext {
		let _localctx: ReturnClauseContext = new ReturnClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, wcpsParser.RULE_returnClause);
		let _la: number;
		try {
			_localctx = new ReturnClauseLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(wcpsParser.RETURN);
			this.state = 270;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 269;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 272;
			this.processingExpression();
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.RIGHT_PARENTHESIS) {
				{
				this.state = 273;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageVariableName(): CoverageVariableNameContext {
		let _localctx: CoverageVariableNameContext = new CoverageVariableNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, wcpsParser.RULE_coverageVariableName);
		try {
			_localctx = new CoverageVariableNameLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processingExpression(): ProcessingExpressionContext {
		let _localctx: ProcessingExpressionContext = new ProcessingExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, wcpsParser.RULE_processingExpression);
		try {
			this.state = 282;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 278;
				this.getComponentExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 279;
				this.scalarExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 280;
				this.encodedCoverageExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 281;
				this.scalarValueCoverageExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scalarValueCoverageExpression(): ScalarValueCoverageExpressionContext {
		let _localctx: ScalarValueCoverageExpressionContext = new ScalarValueCoverageExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, wcpsParser.RULE_scalarValueCoverageExpression);
		try {
			_localctx = new ScalarValueCoverageExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 284;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 287;
			this.coverageExpression(0);
			this.state = 289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 288;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scalarExpression(): ScalarExpressionContext {
		let _localctx: ScalarExpressionContext = new ScalarExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, wcpsParser.RULE_scalarExpression);
		try {
			this.state = 295;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 291;
				this.booleanScalarExpression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 292;
				this.numericalScalarExpression(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 293;
				this.stringScalarExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 294;
				this.starExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanScalarExpression(): BooleanScalarExpressionContext;
	public booleanScalarExpression(_p: number): BooleanScalarExpressionContext;
	// @RuleVersion(0)
	public booleanScalarExpression(_p?: number): BooleanScalarExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanScalarExpressionContext = new BooleanScalarExpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanScalarExpressionContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, wcpsParser.RULE_booleanScalarExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				_localctx = new BooleanReduceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 298;
				this.reduceBooleanExpression();
				}
				break;

			case 2:
				{
				_localctx = new BooleanConstantLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 299;
				this.booleanConstant();
				}
				break;

			case 3:
				{
				_localctx = new BooleanUnaryScalarLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 300;
				this.booleanUnaryOperator();
				this.state = 302;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
				case 1:
					{
					this.state = 301;
					this.match(wcpsParser.LEFT_PARENTHESIS);
					}
					break;
				}
				this.state = 304;
				this.booleanScalarExpression(0);
				this.state = 306;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 305;
					this.match(wcpsParser.RIGHT_PARENTHESIS);
					}
					break;
				}
				}
				break;

			case 4:
				{
				_localctx = new BooleanNumericalComparisonScalarLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 308;
				this.numericalScalarExpression(0);
				this.state = 309;
				this.numericalComparissonOperator();
				this.state = 310;
				this.numericalScalarExpression(0);
				}
				break;

			case 5:
				{
				_localctx = new BooleanReduceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 312;
				this.reduceBooleanExpression();
				}
				break;

			case 6:
				{
				_localctx = new BooleanStringComparisonScalarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 313;
				this.stringScalarExpression();
				this.state = 314;
				this.stringOperator();
				this.state = 315;
				this.stringScalarExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 325;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BooleanBinaryScalarLabelContext(new BooleanScalarExpressionContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, wcpsParser.RULE_booleanScalarExpression);
					this.state = 319;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 320;
					this.booleanOperator();
					this.state = 321;
					this.booleanScalarExpression(5);
					}
					}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanUnaryOperator(): BooleanUnaryOperatorContext {
		let _localctx: BooleanUnaryOperatorContext = new BooleanUnaryOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, wcpsParser.RULE_booleanUnaryOperator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(wcpsParser.NOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanConstant(): BooleanConstantContext {
		let _localctx: BooleanConstantContext = new BooleanConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, wcpsParser.RULE_booleanConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			_la = this._input.LA(1);
			if (!(_la === wcpsParser.FALSE || _la === wcpsParser.TRUE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanOperator(): BooleanOperatorContext {
		let _localctx: BooleanOperatorContext = new BooleanOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, wcpsParser.RULE_booleanOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			_la = this._input.LA(1);
			if (!(_la === wcpsParser.AND || _la === wcpsParser.OR || _la === wcpsParser.XOR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericalComparissonOperator(): NumericalComparissonOperatorContext {
		let _localctx: NumericalComparissonOperatorContext = new NumericalComparissonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, wcpsParser.RULE_numericalComparissonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (wcpsParser.EQUAL - 30)) | (1 << (wcpsParser.GREATER_THAN - 30)) | (1 << (wcpsParser.GREATER_OR_EQUAL_THAN - 30)) | (1 << (wcpsParser.LOWER_THAN - 30)) | (1 << (wcpsParser.LOWER_OR_EQUAL_THAN - 30)) | (1 << (wcpsParser.NOT_EQUAL - 30)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringOperator(): StringOperatorContext {
		let _localctx: StringOperatorContext = new StringOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, wcpsParser.RULE_stringOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			_la = this._input.LA(1);
			if (!(_la === wcpsParser.EQUAL || _la === wcpsParser.NOT_EQUAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringScalarExpression(): StringScalarExpressionContext {
		let _localctx: StringScalarExpressionContext = new StringScalarExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, wcpsParser.RULE_stringScalarExpression);
		try {
			_localctx = new StringScalarExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
			this.match(wcpsParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public starExpression(): StarExpressionContext {
		let _localctx: StarExpressionContext = new StarExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, wcpsParser.RULE_starExpression);
		try {
			_localctx = new StarExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(wcpsParser.MULTIPLICATION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanSwitchCaseCoverageExpression(): BooleanSwitchCaseCoverageExpressionContext {
		let _localctx: BooleanSwitchCaseCoverageExpressionContext = new BooleanSwitchCaseCoverageExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, wcpsParser.RULE_booleanSwitchCaseCoverageExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 342;
					this.match(wcpsParser.LEFT_PARENTHESIS);
					}
					}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 348;
			this.coverageExpression(0);
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.RIGHT_PARENTHESIS) {
				{
				{
				this.state = 349;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				}
				this.state = 354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 355;
			this.numericalComparissonOperator();
			this.state = 359;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 356;
					this.match(wcpsParser.LEFT_PARENTHESIS);
					}
					}
				}
				this.state = 361;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 362;
			this.coverageExpression(0);
			this.state = 366;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 363;
					this.match(wcpsParser.RIGHT_PARENTHESIS);
					}
					}
				}
				this.state = 368;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanSwitchCaseCombinedExpression(): BooleanSwitchCaseCombinedExpressionContext;
	public booleanSwitchCaseCombinedExpression(_p: number): BooleanSwitchCaseCombinedExpressionContext;
	// @RuleVersion(0)
	public booleanSwitchCaseCombinedExpression(_p?: number): BooleanSwitchCaseCombinedExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanSwitchCaseCombinedExpressionContext = new BooleanSwitchCaseCombinedExpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanSwitchCaseCombinedExpressionContext = _localctx;
		let _startState: number = 44;
		this.enterRecursionRule(_localctx, 44, wcpsParser.RULE_booleanSwitchCaseCombinedExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 370;
				this.booleanSwitchCaseCoverageExpression();
				this.state = 371;
				this.booleanOperator();
				this.state = 372;
				this.booleanSwitchCaseCoverageExpression();
				}
				break;

			case 2:
				{
				this.state = 374;
				this.booleanSwitchCaseCoverageExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 383;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BooleanSwitchCaseCombinedExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, wcpsParser.RULE_booleanSwitchCaseCombinedExpression);
					this.state = 377;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 378;
					this.booleanOperator();
					this.state = 379;
					this.booleanSwitchCaseCombinedExpression(2);
					}
					}
				}
				this.state = 385;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public numericalScalarExpression(): NumericalScalarExpressionContext;
	public numericalScalarExpression(_p: number): NumericalScalarExpressionContext;
	// @RuleVersion(0)
	public numericalScalarExpression(_p?: number): NumericalScalarExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NumericalScalarExpressionContext = new NumericalScalarExpressionContext(this._ctx, _parentState);
		let _prevctx: NumericalScalarExpressionContext = _localctx;
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, wcpsParser.RULE_numericalScalarExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				_localctx = new NumericalUnaryScalarExpressionLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 387;
				this.numericalUnaryOperation();
				this.state = 388;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 389;
				this.numericalScalarExpression(0);
				this.state = 390;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 2:
				{
				_localctx = new NumericalTrigonometricScalarExpressionLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 392;
				this.trigonometricOperator();
				this.state = 393;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 394;
				this.numericalScalarExpression(0);
				this.state = 395;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 3:
				{
				_localctx = new NumericalCondenseExpressionLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 397;
				this.condenseExpression();
				}
				break;

			case 4:
				{
				_localctx = new NumericalRealNumberExpressionLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 398;
				this.number();
				}
				break;

			case 5:
				{
				_localctx = new NumericalNanNumberExpressionLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 399;
				this.match(wcpsParser.NAN_NUMBER_CONSTANT);
				}
				break;

			case 6:
				{
				_localctx = new NumericalComplexNumberConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 400;
				this.complexNumberConstant();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 409;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new NumericalBinaryScalarExpressionLabelContext(new NumericalScalarExpressionContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, wcpsParser.RULE_numericalScalarExpression);
					this.state = 403;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 404;
					this.numericalOperator();
					this.state = 405;
					this.numericalScalarExpression(6);
					}
					}
				}
				this.state = 411;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public complexNumberConstant(): ComplexNumberConstantContext {
		let _localctx: ComplexNumberConstantContext = new ComplexNumberConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, wcpsParser.RULE_complexNumberConstant);
		try {
			_localctx = new ComplexNumberConstantLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 413;
			this.match(wcpsParser.REAL_NUMBER_CONSTANT);
			this.state = 414;
			this.match(wcpsParser.COMMA);
			this.state = 415;
			this.match(wcpsParser.REAL_NUMBER_CONSTANT);
			this.state = 416;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericalOperator(): NumericalOperatorContext {
		let _localctx: NumericalOperatorContext = new NumericalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, wcpsParser.RULE_numericalOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			_la = this._input.LA(1);
			if (!(_la === wcpsParser.DIVISION || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (wcpsParser.MINUS - 56)) | (1 << (wcpsParser.MULTIPLICATION - 56)) | (1 << (wcpsParser.PLUS - 56)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericalUnaryOperation(): NumericalUnaryOperationContext {
		let _localctx: NumericalUnaryOperationContext = new NumericalUnaryOperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, wcpsParser.RULE_numericalUnaryOperation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			_la = this._input.LA(1);
			if (!(_la === wcpsParser.ABSOLUTE_VALUE || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (wcpsParser.IMAGINARY_PART - 36)) | (1 << (wcpsParser.MINUS - 36)) | (1 << (wcpsParser.PLUS - 36)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (wcpsParser.REAL_PART - 69)) | (1 << (wcpsParser.ROUND - 69)) | (1 << (wcpsParser.SQUARE_ROOT - 69)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trigonometricOperator(): TrigonometricOperatorContext {
		let _localctx: TrigonometricOperatorContext = new TrigonometricOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, wcpsParser.RULE_trigonometricOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << wcpsParser.ARCSIN) | (1 << wcpsParser.ARCCOS) | (1 << wcpsParser.ARCTAN) | (1 << wcpsParser.COS) | (1 << wcpsParser.COSH))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (wcpsParser.SIN - 81)) | (1 << (wcpsParser.SINH - 81)) | (1 << (wcpsParser.TAN - 81)) | (1 << (wcpsParser.TANH - 81)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getComponentExpression(): GetComponentExpressionContext {
		let _localctx: GetComponentExpressionContext = new GetComponentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, wcpsParser.RULE_getComponentExpression);
		try {
			this.state = 431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 424;
				this.coverageIdentifierExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 425;
				this.coverageCrsSetExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 426;
				this.domainExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 427;
				this.imageCrsDomainExpression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 428;
				this.imageCrsDomainByDimensionExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 429;
				this.imageCrsExpression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 430;
				this.describeCoverageExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageIdentifierExpression(): CoverageIdentifierExpressionContext {
		let _localctx: CoverageIdentifierExpressionContext = new CoverageIdentifierExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, wcpsParser.RULE_coverageIdentifierExpression);
		try {
			_localctx = new CoverageIdentifierExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.match(wcpsParser.IDENTIFIER);
			this.state = 434;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 435;
			this.coverageExpression(0);
			this.state = 436;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageCrsSetExpression(): CoverageCrsSetExpressionContext {
		let _localctx: CoverageCrsSetExpressionContext = new CoverageCrsSetExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, wcpsParser.RULE_coverageCrsSetExpression);
		try {
			_localctx = new CoverageCrsSetExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			this.match(wcpsParser.CRSSET);
			this.state = 439;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 440;
			this.coverageExpression(0);
			this.state = 441;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sdomExtraction(): SdomExtractionContext {
		let _localctx: SdomExtractionContext = new SdomExtractionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, wcpsParser.RULE_sdomExtraction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			_la = this._input.LA(1);
			if (!(_la === wcpsParser.LOWER_BOUND || _la === wcpsParser.UPPER_BOUND)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public domainExpression(): DomainExpressionContext {
		let _localctx: DomainExpressionContext = new DomainExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, wcpsParser.RULE_domainExpression);
		let _la: number;
		try {
			_localctx = new DomainExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(wcpsParser.DOMAIN);
			this.state = 446;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 447;
			this.coverageExpression(0);
			this.state = 448;
			this.match(wcpsParser.COMMA);
			this.state = 449;
			this.axisName();
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.COMMA) {
				{
				this.state = 450;
				this.match(wcpsParser.COMMA);
				this.state = 451;
				this.crsName();
				}
			}

			this.state = 454;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imageCrsDomainByDimensionExpression(): ImageCrsDomainByDimensionExpressionContext {
		let _localctx: ImageCrsDomainByDimensionExpressionContext = new ImageCrsDomainByDimensionExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, wcpsParser.RULE_imageCrsDomainByDimensionExpression);
		try {
			_localctx = new ImageCrsDomainByDimensionExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this.match(wcpsParser.IMAGECRSDOMAIN);
			this.state = 457;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 458;
			this.coverageExpression(0);
			this.state = 459;
			this.match(wcpsParser.COMMA);
			this.state = 460;
			this.axisName();
			this.state = 461;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imageCrsDomainExpression(): ImageCrsDomainExpressionContext {
		let _localctx: ImageCrsDomainExpressionContext = new ImageCrsDomainExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, wcpsParser.RULE_imageCrsDomainExpression);
		try {
			_localctx = new ImageCrsDomainExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.match(wcpsParser.IMAGECRSDOMAIN);
			this.state = 464;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 465;
			this.coverageExpression(0);
			this.state = 466;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public imageCrsExpression(): ImageCrsExpressionContext {
		let _localctx: ImageCrsExpressionContext = new ImageCrsExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, wcpsParser.RULE_imageCrsExpression);
		try {
			_localctx = new ImageCrsExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.match(wcpsParser.IMAGECRS);
			this.state = 469;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 470;
			this.coverageExpression(0);
			this.state = 471;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public describeCoverageExpression(): DescribeCoverageExpressionContext {
		let _localctx: DescribeCoverageExpressionContext = new DescribeCoverageExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, wcpsParser.RULE_describeCoverageExpression);
		try {
			_localctx = new DescribeCoverageExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.match(wcpsParser.DESCRIBE_COVERAGE);
			this.state = 474;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 475;
			this.coverageVariableName();
			this.state = 476;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public domainIntervals(): DomainIntervalsContext {
		let _localctx: DomainIntervalsContext = new DomainIntervalsContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, wcpsParser.RULE_domainIntervals);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 478;
				this.domainExpression();
				}
				break;

			case 2:
				{
				this.state = 479;
				this.imageCrsDomainExpression();
				}
				break;

			case 3:
				{
				this.state = 480;
				this.imageCrsDomainByDimensionExpression();
				}
				break;
			}
			this.state = 484;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 483;
				this.sdomExtraction();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public positionalParamater(): PositionalParamaterContext {
		let _localctx: PositionalParamaterContext = new PositionalParamaterContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, wcpsParser.RULE_positionalParamater);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.match(wcpsParser.POSITIONAL_PARAMETER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extraParams(): ExtraParamsContext {
		let _localctx: ExtraParamsContext = new ExtraParamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, wcpsParser.RULE_extraParams);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			_la = this._input.LA(1);
			if (!(_la === wcpsParser.STRING_LITERAL || _la === wcpsParser.EXTRA_PARAMS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public encodedCoverageExpression(): EncodedCoverageExpressionContext {
		let _localctx: EncodedCoverageExpressionContext = new EncodedCoverageExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, wcpsParser.RULE_encodedCoverageExpression);
		let _la: number;
		try {
			_localctx = new EncodedCoverageExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this.match(wcpsParser.ENCODE);
			this.state = 491;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 492;
			this.coverageExpression(0);
			this.state = 493;
			this.match(wcpsParser.COMMA);
			this.state = 494;
			this.match(wcpsParser.STRING_LITERAL);
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.COMMA) {
				{
				this.state = 495;
				this.match(wcpsParser.COMMA);
				this.state = 496;
				this.extraParams();
				}
			}

			this.state = 499;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decodeCoverageExpression(): DecodeCoverageExpressionContext {
		let _localctx: DecodeCoverageExpressionContext = new DecodeCoverageExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, wcpsParser.RULE_decodeCoverageExpression);
		let _la: number;
		try {
			_localctx = new DecodedCoverageExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			this.match(wcpsParser.DECODE);
			this.state = 502;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 503;
			this.positionalParamater();
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.COMMA) {
				{
				this.state = 504;
				this.match(wcpsParser.COMMA);
				this.state = 505;
				this.extraParams();
				}
			}

			this.state = 508;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public coverageExpression(): CoverageExpressionContext;
	public coverageExpression(_p: number): CoverageExpressionContext;
	// @RuleVersion(0)
	public coverageExpression(_p?: number): CoverageExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CoverageExpressionContext = new CoverageExpressionContext(this._ctx, _parentState);
		let _prevctx: CoverageExpressionContext = _localctx;
		let _startState: number = 84;
		this.enterRecursionRule(_localctx, 84, wcpsParser.RULE_coverageExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				_localctx = new CoverageExpressionDomainIntervalsLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 511;
				this.domainIntervals();
				}
				break;

			case 2:
				{
				_localctx = new CoverageExpressionConstructorLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 512;
				this.coverageConstructorExpression();
				}
				break;

			case 3:
				{
				_localctx = new CoverageExpressionVariableNameLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 513;
				this.coverageVariableName();
				}
				break;

			case 4:
				{
				_localctx = new CoverageExpressionConstantLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 514;
				this.coverageConstantExpression();
				}
				break;

			case 5:
				{
				_localctx = new CoverageExpressionDecodeLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 515;
				this.decodeCoverageExpression();
				}
				break;

			case 6:
				{
				_localctx = new CoverageExpressionSliceLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 516;
				this.match(wcpsParser.SLICE);
				this.state = 517;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 518;
				this.coverageExpression(0);
				this.state = 519;
				this.match(wcpsParser.COMMA);
				this.state = 520;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 521;
				this.dimensionPointList();
				this.state = 522;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 523;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 7:
				{
				_localctx = new CoverageExpressionTrimCoverageLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 525;
				this.match(wcpsParser.TRIM);
				this.state = 526;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 527;
				this.coverageExpression(0);
				this.state = 528;
				this.match(wcpsParser.COMMA);
				this.state = 529;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 530;
				this.dimensionIntervalList();
				this.state = 531;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 532;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 8:
				{
				_localctx = new CoverageExpressionExtendLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 534;
				this.match(wcpsParser.EXTEND);
				this.state = 535;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 536;
				this.coverageExpression(0);
				this.state = 537;
				this.match(wcpsParser.COMMA);
				this.state = 538;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 539;
				this.dimensionIntervalList();
				this.state = 540;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 541;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 9:
				{
				_localctx = new CoverageExpressionExtendByDomainIntervalsLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 543;
				this.match(wcpsParser.EXTEND);
				this.state = 544;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 545;
				this.coverageExpression(0);
				this.state = 546;
				this.match(wcpsParser.COMMA);
				this.state = 547;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 548;
				this.domainIntervals();
				this.state = 549;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 550;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 10:
				{
				_localctx = new CoverageExpressionUnaryArithmeticLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 552;
				this.unaryArithmeticExpression();
				}
				break;

			case 11:
				{
				_localctx = new CoverageExpressionTrigonometricLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 553;
				this.trigonometricExpression();
				}
				break;

			case 12:
				{
				_localctx = new CoverageExpressionExponentialLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 554;
				this.exponentialExpression();
				}
				break;

			case 13:
				{
				_localctx = new CoverageExpressionMinBinaryLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 555;
				this.minBinaryExpression();
				}
				break;

			case 14:
				{
				_localctx = new CoverageExpressionMaxBinaryLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 556;
				this.maxBinaryExpression();
				}
				break;

			case 15:
				{
				_localctx = new CoverageExpressionPowerLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 557;
				this.unaryPowerExpression();
				}
				break;

			case 16:
				{
				_localctx = new CoverageExpressionUnaryBooleanLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 558;
				this.unaryBooleanExpression();
				}
				break;

			case 17:
				{
				_localctx = new CoverageExpressionCastLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 559;
				this.castExpression();
				}
				break;

			case 18:
				{
				_localctx = new CoverageExpressionRangeConstructorLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 560;
				this.rangeConstructorExpression();
				}
				break;

			case 19:
				{
				_localctx = new CoverageExpressionClipWKTLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 561;
				this.clipWKTExpression();
				}
				break;

			case 20:
				{
				_localctx = new CoverageExpressionClipCurtainLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 562;
				this.clipCurtainExpression();
				}
				break;

			case 21:
				{
				_localctx = new CoverageExpressionClipCorridorLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 563;
				this.clipCorridorExpression();
				}
				break;

			case 22:
				{
				_localctx = new CoverageExpressionCrsTransformLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 564;
				this.crsTransformExpression();
				}
				break;

			case 23:
				{
				_localctx = new CoverageExpressionSwitchCaseLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 565;
				this.switchCaseExpression();
				}
				break;

			case 24:
				{
				_localctx = new CoverageExpressionScaleByDimensionIntervalsLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 566;
				this.match(wcpsParser.SCALE);
				this.state = 567;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 568;
				this.coverageExpression(0);
				this.state = 569;
				this.match(wcpsParser.COMMA);
				this.state = 570;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 571;
				this.dimensionIntervalList();
				this.state = 572;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 573;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 25:
				{
				_localctx = new CoverageExpressionScaleByImageCrsDomainLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 575;
				this.match(wcpsParser.SCALE);
				this.state = 576;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 577;
				this.coverageExpression(0);
				this.state = 578;
				this.match(wcpsParser.COMMA);
				this.state = 579;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 580;
				this.domainIntervals();
				this.state = 581;
				this.match(wcpsParser.RIGHT_BRACE);
				this.state = 582;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 26:
				{
				_localctx = new CoverageExpressionCoverageLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 584;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 585;
				this.coverageExpression(0);
				this.state = 586;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 27:
				{
				_localctx = new CoverageExpressionScaleByFactorLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 588;
				this.match(wcpsParser.SCALE_FACTOR);
				this.state = 589;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 590;
				this.coverageExpression(0);
				this.state = 591;
				this.match(wcpsParser.COMMA);
				this.state = 592;
				this.number();
				this.state = 593;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 28:
				{
				_localctx = new CoverageExpressionScaleByAxesLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 595;
				this.match(wcpsParser.SCALE_AXES);
				this.state = 596;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 597;
				this.coverageExpression(0);
				this.state = 598;
				this.match(wcpsParser.COMMA);
				this.state = 599;
				this.match(wcpsParser.LEFT_BRACKET);
				this.state = 600;
				this.scaleDimensionIntervalList();
				this.state = 601;
				this.match(wcpsParser.RIGHT_BRACKET);
				this.state = 602;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 29:
				{
				_localctx = new CoverageExpressionScaleBySizeLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 604;
				this.match(wcpsParser.SCALE_SIZE);
				this.state = 605;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 606;
				this.coverageExpression(0);
				this.state = 607;
				this.match(wcpsParser.COMMA);
				this.state = 608;
				this.match(wcpsParser.LEFT_BRACKET);
				this.state = 609;
				this.scaleDimensionIntervalList();
				this.state = 610;
				this.match(wcpsParser.RIGHT_BRACKET);
				this.state = 611;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 30:
				{
				_localctx = new CoverageExpressionScaleByExtentLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 613;
				this.match(wcpsParser.SCALE_EXTENT);
				this.state = 614;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 615;
				this.coverageExpression(0);
				this.state = 616;
				this.match(wcpsParser.COMMA);
				this.state = 617;
				this.match(wcpsParser.LEFT_BRACKET);
				this.state = 618;
				this.scaleDimensionIntervalList();
				this.state = 619;
				this.match(wcpsParser.RIGHT_BRACKET);
				this.state = 620;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 31:
				{
				_localctx = new CoverageExpressionScalarLabelContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 622;
				this.scalarExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 666;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 664;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
					case 1:
						{
						_localctx = new CoverageExpressionLogicLabelContext(new CoverageExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 625;
						if (!(this.precpred(this._ctx, 40))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 40)");
						}
						this.state = 626;
						this.booleanOperator();
						this.state = 627;
						this.coverageExpression(41);
						}
						break;

					case 2:
						{
						_localctx = new CoverageExpressionArithmeticLabelContext(new CoverageExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 629;
						if (!(this.precpred(this._ctx, 37))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 37)");
						}
						this.state = 630;
						this.coverageArithmeticOperator();
						this.state = 631;
						this.coverageExpression(38);
						}
						break;

					case 3:
						{
						_localctx = new CoverageExpressionComparissonLabelContext(new CoverageExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 633;
						if (!(this.precpred(this._ctx, 36))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 36)");
						}
						this.state = 634;
						this.numericalComparissonOperator();
						this.state = 635;
						this.coverageExpression(37);
						}
						break;

					case 4:
						{
						_localctx = new CoverageExpressionOverlayLabelContext(new CoverageExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 637;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 638;
						this.match(wcpsParser.OVERLAY);
						this.state = 639;
						this.coverageExpression(2);
						}
						break;

					case 5:
						{
						_localctx = new CoverageExpressionShorthandSliceLabelContext(new CoverageExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 640;
						if (!(this.precpred(this._ctx, 32))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 32)");
						}
						this.state = 641;
						this.match(wcpsParser.LEFT_BRACKET);
						this.state = 642;
						this.dimensionPointList();
						this.state = 643;
						this.match(wcpsParser.RIGHT_BRACKET);
						}
						break;

					case 6:
						{
						_localctx = new CoverageExpressionShorthandSubsetLabelContext(new CoverageExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 645;
						if (!(this.precpred(this._ctx, 30))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 30)");
						}
						this.state = 646;
						this.match(wcpsParser.LEFT_BRACKET);
						this.state = 647;
						this.dimensionIntervalList();
						this.state = 648;
						this.match(wcpsParser.RIGHT_BRACKET);
						}
						break;

					case 7:
						{
						_localctx = new CoverageXpressionShortHandSubsetWithLetClauseVariableLabelContext(new CoverageExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 650;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						this.state = 651;
						this.match(wcpsParser.LEFT_BRACKET);
						this.state = 652;
						this.coverageVariableName();
						this.state = 653;
						this.match(wcpsParser.RIGHT_BRACKET);
						}
						break;

					case 8:
						{
						_localctx = new CoverageExpressionRangeSubsettingLabelContext(new CoverageExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 655;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 656;
						this.match(wcpsParser.DOT);
						this.state = 657;
						this.fieldName();
						}
						break;

					case 9:
						{
						_localctx = new CoverageIsNullExpressionContext(new CoverageExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, wcpsParser.RULE_coverageExpression);
						this.state = 658;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 659;
						this.match(wcpsParser.IS);
						this.state = 661;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === wcpsParser.NOT) {
							{
							this.state = 660;
							this.match(wcpsParser.NOT);
							}
						}

						this.state = 663;
						this.match(wcpsParser.NULL);
						}
						break;
					}
					}
				}
				this.state = 668;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageArithmeticOperator(): CoverageArithmeticOperatorContext {
		let _localctx: CoverageArithmeticOperatorContext = new CoverageArithmeticOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, wcpsParser.RULE_coverageArithmeticOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			_la = this._input.LA(1);
			if (!(_la === wcpsParser.DIVISION || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & ((1 << (wcpsParser.MINUS - 56)) | (1 << (wcpsParser.MULTIPLICATION - 56)) | (1 << (wcpsParser.PLUS - 56)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryArithmeticExpressionOperator(): UnaryArithmeticExpressionOperatorContext {
		let _localctx: UnaryArithmeticExpressionOperatorContext = new UnaryArithmeticExpressionOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, wcpsParser.RULE_unaryArithmeticExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 671;
			_la = this._input.LA(1);
			if (!(_la === wcpsParser.ABSOLUTE_VALUE || _la === wcpsParser.IMAGINARY_PART || _la === wcpsParser.REAL_PART || _la === wcpsParser.SQUARE_ROOT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryArithmeticExpression(): UnaryArithmeticExpressionContext {
		let _localctx: UnaryArithmeticExpressionContext = new UnaryArithmeticExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, wcpsParser.RULE_unaryArithmeticExpression);
		try {
			_localctx = new UnaryCoverageArithmeticExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 673;
			this.unaryArithmeticExpressionOperator();
			this.state = 675;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 674;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				}
				break;
			}
			this.state = 677;
			this.coverageExpression(0);
			this.state = 679;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 678;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trigonometricExpression(): TrigonometricExpressionContext {
		let _localctx: TrigonometricExpressionContext = new TrigonometricExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, wcpsParser.RULE_trigonometricExpression);
		try {
			_localctx = new TrigonometricExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this.trigonometricOperator();
			this.state = 682;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 683;
			this.coverageExpression(0);
			this.state = 684;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exponentialExpressionOperator(): ExponentialExpressionOperatorContext {
		let _localctx: ExponentialExpressionOperatorContext = new ExponentialExpressionOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, wcpsParser.RULE_exponentialExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			_la = this._input.LA(1);
			if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (wcpsParser.EXP - 31)) | (1 << (wcpsParser.LN - 31)) | (1 << (wcpsParser.LOG - 31)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exponentialExpression(): ExponentialExpressionContext {
		let _localctx: ExponentialExpressionContext = new ExponentialExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, wcpsParser.RULE_exponentialExpression);
		try {
			_localctx = new ExponentialExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 688;
			this.exponentialExpressionOperator();
			this.state = 689;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 690;
			this.coverageExpression(0);
			this.state = 691;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryPowerExpression(): UnaryPowerExpressionContext {
		let _localctx: UnaryPowerExpressionContext = new UnaryPowerExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, wcpsParser.RULE_unaryPowerExpression);
		try {
			_localctx = new UnaryPowerExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 693;
			this.match(wcpsParser.POWER);
			this.state = 694;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 695;
			this.coverageExpression(0);
			this.state = 696;
			this.match(wcpsParser.COMMA);
			this.state = 697;
			this.numericalScalarExpression(0);
			this.state = 698;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public minBinaryExpression(): MinBinaryExpressionContext {
		let _localctx: MinBinaryExpressionContext = new MinBinaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, wcpsParser.RULE_minBinaryExpression);
		try {
			_localctx = new MinBinaryExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			this.match(wcpsParser.MIN);
			this.state = 701;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 702;
			this.coverageExpression(0);
			this.state = 703;
			this.match(wcpsParser.COMMA);
			this.state = 704;
			this.coverageExpression(0);
			this.state = 705;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public maxBinaryExpression(): MaxBinaryExpressionContext {
		let _localctx: MaxBinaryExpressionContext = new MaxBinaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, wcpsParser.RULE_maxBinaryExpression);
		try {
			_localctx = new MaxBinaryExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.match(wcpsParser.MAX);
			this.state = 708;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 709;
			this.coverageExpression(0);
			this.state = 710;
			this.match(wcpsParser.COMMA);
			this.state = 711;
			this.coverageExpression(0);
			this.state = 712;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryBooleanExpression(): UnaryBooleanExpressionContext {
		let _localctx: UnaryBooleanExpressionContext = new UnaryBooleanExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, wcpsParser.RULE_unaryBooleanExpression);
		try {
			this.state = 726;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wcpsParser.NOT:
				_localctx = new NotUnaryBooleanExpressionLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 714;
				this.match(wcpsParser.NOT);
				this.state = 715;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 716;
				this.coverageExpression(0);
				this.state = 717;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			case wcpsParser.BIT:
				_localctx = new BitUnaryBooleanExpressionLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 719;
				this.match(wcpsParser.BIT);
				this.state = 720;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 721;
				this.coverageExpression(0);
				this.state = 722;
				this.match(wcpsParser.COMMA);
				this.state = 723;
				this.numericalScalarExpression(0);
				this.state = 724;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rangeType(): RangeTypeContext {
		let _localctx: RangeTypeContext = new RangeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, wcpsParser.RULE_rangeType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			this.state = 732;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.COVERAGE_VARIABLE_NAME) {
				{
				{
				this.state = 729;
				this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
				}
				}
				this.state = 734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public castExpression(): CastExpressionContext {
		let _localctx: CastExpressionContext = new CastExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, wcpsParser.RULE_castExpression);
		try {
			_localctx = new CastExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 736;
			this.rangeType();
			this.state = 737;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 738;
			this.coverageExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldName(): FieldNameContext {
		let _localctx: FieldNameContext = new FieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, wcpsParser.RULE_fieldName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 740;
			_la = this._input.LA(1);
			if (!(_la === wcpsParser.INTEGER || _la === wcpsParser.COVERAGE_VARIABLE_NAME)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rangeConstructorExpression(): RangeConstructorExpressionContext {
		let _localctx: RangeConstructorExpressionContext = new RangeConstructorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, wcpsParser.RULE_rangeConstructorExpression);
		let _la: number;
		try {
			_localctx = new RangeConstructorExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 742;
			this.match(wcpsParser.LEFT_BRACE);
			{
			this.state = 743;
			this.fieldName();
			this.state = 744;
			this.match(wcpsParser.COLON);
			this.state = 745;
			this.coverageExpression(0);
			}
			this.state = 754;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.SEMICOLON) {
				{
				{
				this.state = 747;
				this.match(wcpsParser.SEMICOLON);
				this.state = 748;
				this.fieldName();
				this.state = 749;
				this.match(wcpsParser.COLON);
				this.state = 750;
				this.coverageExpression(0);
				}
				}
				this.state = 756;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 757;
			this.match(wcpsParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rangeConstructorSwitchCaseExpression(): RangeConstructorSwitchCaseExpressionContext {
		let _localctx: RangeConstructorSwitchCaseExpressionContext = new RangeConstructorSwitchCaseExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, wcpsParser.RULE_rangeConstructorSwitchCaseExpression);
		let _la: number;
		try {
			_localctx = new RangeConstructorSwitchCaseExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this.match(wcpsParser.LEFT_BRACE);
			{
			this.state = 760;
			this.fieldName();
			this.state = 761;
			this.match(wcpsParser.COLON);
			this.state = 762;
			this.coverageExpression(0);
			}
			this.state = 771;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.SEMICOLON) {
				{
				{
				this.state = 764;
				this.match(wcpsParser.SEMICOLON);
				this.state = 765;
				this.fieldName();
				this.state = 766;
				this.match(wcpsParser.COLON);
				this.state = 767;
				this.coverageExpression(0);
				}
				}
				this.state = 773;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 774;
			this.match(wcpsParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimensionPointList(): DimensionPointListContext {
		let _localctx: DimensionPointListContext = new DimensionPointListContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, wcpsParser.RULE_dimensionPointList);
		let _la: number;
		try {
			_localctx = new DimensionPointListLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			this.dimensionPointElement();
			this.state = 781;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.COMMA) {
				{
				{
				this.state = 777;
				this.match(wcpsParser.COMMA);
				this.state = 778;
				this.dimensionPointElement();
				}
				}
				this.state = 783;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimensionPointElement(): DimensionPointElementContext {
		let _localctx: DimensionPointElementContext = new DimensionPointElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, wcpsParser.RULE_dimensionPointElement);
		let _la: number;
		try {
			_localctx = new DimensionPointElementLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 784;
			this.axisName();
			this.state = 787;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.COLON) {
				{
				this.state = 785;
				this.match(wcpsParser.COLON);
				this.state = 786;
				this.crsName();
				}
			}

			this.state = 789;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 790;
			this.coverageExpression(0);
			this.state = 791;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimensionIntervalList(): DimensionIntervalListContext {
		let _localctx: DimensionIntervalListContext = new DimensionIntervalListContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, wcpsParser.RULE_dimensionIntervalList);
		let _la: number;
		try {
			_localctx = new DimensionIntervalListLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.dimensionIntervalElement();
			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.COMMA) {
				{
				{
				this.state = 794;
				this.match(wcpsParser.COMMA);
				this.state = 795;
				this.dimensionIntervalElement();
				}
				}
				this.state = 800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scaleDimensionIntervalList(): ScaleDimensionIntervalListContext {
		let _localctx: ScaleDimensionIntervalListContext = new ScaleDimensionIntervalListContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, wcpsParser.RULE_scaleDimensionIntervalList);
		let _la: number;
		try {
			_localctx = new ScaleDimensionIntervalListLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 801;
			this.scaleDimensionIntervalElement();
			this.state = 806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.COMMA) {
				{
				{
				this.state = 802;
				this.match(wcpsParser.COMMA);
				this.state = 803;
				this.scaleDimensionIntervalElement();
				}
				}
				this.state = 808;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scaleDimensionIntervalElement(): ScaleDimensionIntervalElementContext {
		let _localctx: ScaleDimensionIntervalElementContext = new ScaleDimensionIntervalElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, wcpsParser.RULE_scaleDimensionIntervalElement);
		try {
			this.state = 827;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				_localctx = new TrimScaleDimensionIntervalElementLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 809;
				this.axisName();
				this.state = 810;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 813;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case wcpsParser.MINUS:
				case wcpsParser.INTEGER:
				case wcpsParser.REAL_NUMBER_CONSTANT:
				case wcpsParser.SCIENTIFIC_NUMBER_CONSTANT:
					{
					this.state = 811;
					this.number();
					}
					break;
				case wcpsParser.STRING_LITERAL:
					{
					this.state = 812;
					this.match(wcpsParser.STRING_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 815;
				this.match(wcpsParser.COLON);
				this.state = 818;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case wcpsParser.MINUS:
				case wcpsParser.INTEGER:
				case wcpsParser.REAL_NUMBER_CONSTANT:
				case wcpsParser.SCIENTIFIC_NUMBER_CONSTANT:
					{
					this.state = 816;
					this.number();
					}
					break;
				case wcpsParser.STRING_LITERAL:
					{
					this.state = 817;
					this.match(wcpsParser.STRING_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 820;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 2:
				_localctx = new SliceScaleDimensionIntervalElementLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 822;
				this.axisName();
				this.state = 823;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 824;
				this.number();
				this.state = 825;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimensionIntervalElement(): DimensionIntervalElementContext {
		let _localctx: DimensionIntervalElementContext = new DimensionIntervalElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, wcpsParser.RULE_dimensionIntervalElement);
		let _la: number;
		try {
			this.state = 849;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				_localctx = new TrimDimensionIntervalElementLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 829;
				this.axisName();
				this.state = 832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === wcpsParser.COLON) {
					{
					this.state = 830;
					this.match(wcpsParser.COLON);
					this.state = 831;
					this.crsName();
					}
				}

				this.state = 834;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 835;
				this.coverageExpression(0);
				this.state = 836;
				this.match(wcpsParser.COLON);
				this.state = 837;
				this.coverageExpression(0);
				this.state = 838;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 2:
				_localctx = new SliceDimensionIntervalElementLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 840;
				this.axisName();
				this.state = 843;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === wcpsParser.COLON) {
					{
					this.state = 841;
					this.match(wcpsParser.COLON);
					this.state = 842;
					this.crsName();
					}
				}

				this.state = 845;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 846;
				this.coverageExpression(0);
				this.state = 847;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wktPoints(): WktPointsContext {
		let _localctx: WktPointsContext = new WktPointsContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, wcpsParser.RULE_wktPoints);
		let _la: number;
		try {
			_localctx = new WktPointsLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 851;
			this.constant();
			this.state = 855;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (wcpsParser.FALSE - 33)) | (1 << (wcpsParser.LEFT_PARENTHESIS - 33)) | (1 << (wcpsParser.MINUS - 33)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (wcpsParser.TRUE - 91)) | (1 << (wcpsParser.INTEGER - 91)) | (1 << (wcpsParser.REAL_NUMBER_CONSTANT - 91)) | (1 << (wcpsParser.SCIENTIFIC_NUMBER_CONSTANT - 91)) | (1 << (wcpsParser.STRING_LITERAL - 91)))) !== 0)) {
				{
				{
				this.state = 852;
				this.constant();
				}
				}
				this.state = 857;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 868;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.COMMA) {
				{
				{
				this.state = 858;
				this.match(wcpsParser.COMMA);
				this.state = 859;
				this.constant();
				this.state = 863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (wcpsParser.FALSE - 33)) | (1 << (wcpsParser.LEFT_PARENTHESIS - 33)) | (1 << (wcpsParser.MINUS - 33)))) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (wcpsParser.TRUE - 91)) | (1 << (wcpsParser.INTEGER - 91)) | (1 << (wcpsParser.REAL_NUMBER_CONSTANT - 91)) | (1 << (wcpsParser.SCIENTIFIC_NUMBER_CONSTANT - 91)) | (1 << (wcpsParser.STRING_LITERAL - 91)))) !== 0)) {
					{
					{
					this.state = 860;
					this.constant();
					}
					}
					this.state = 865;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 870;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wktPointElementList(): WktPointElementListContext {
		let _localctx: WktPointElementListContext = new WktPointElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, wcpsParser.RULE_wktPointElementList);
		try {
			let _alt: number;
			_localctx = new WKTPointElementListLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 871;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 872;
			this.wktPoints();
			this.state = 873;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 881;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 874;
					this.match(wcpsParser.COMMA);
					this.state = 875;
					this.match(wcpsParser.LEFT_PARENTHESIS);
					this.state = 876;
					this.wktPoints();
					this.state = 877;
					this.match(wcpsParser.RIGHT_PARENTHESIS);
					}
					}
				}
				this.state = 883;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wktLineString(): WktLineStringContext {
		let _localctx: WktLineStringContext = new WktLineStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, wcpsParser.RULE_wktLineString);
		try {
			_localctx = new WKTLineStringLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 884;
			this.match(wcpsParser.LINESTRING);
			this.state = 885;
			this.wktPointElementList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wktPolygon(): WktPolygonContext {
		let _localctx: WktPolygonContext = new WktPolygonContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, wcpsParser.RULE_wktPolygon);
		try {
			_localctx = new WKTPolygonLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 887;
			this.match(wcpsParser.POLYGON);
			this.state = 888;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 889;
			this.wktPointElementList();
			this.state = 890;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wktMultipolygon(): WktMultipolygonContext {
		let _localctx: WktMultipolygonContext = new WktMultipolygonContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, wcpsParser.RULE_wktMultipolygon);
		let _la: number;
		try {
			_localctx = new WKTMultipolygonLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 892;
			this.match(wcpsParser.MULTIPOLYGON);
			this.state = 893;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 894;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 895;
			this.wktPointElementList();
			this.state = 896;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 904;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.COMMA) {
				{
				{
				this.state = 897;
				this.match(wcpsParser.COMMA);
				this.state = 898;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 899;
				this.wktPointElementList();
				this.state = 900;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				}
				this.state = 906;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 907;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wktExpression(): WktExpressionContext {
		let _localctx: WktExpressionContext = new WktExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, wcpsParser.RULE_wktExpression);
		try {
			_localctx = new WKTExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 912;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wcpsParser.POLYGON:
				{
				this.state = 909;
				this.wktPolygon();
				}
				break;
			case wcpsParser.LINESTRING:
				{
				this.state = 910;
				this.wktLineString();
				}
				break;
			case wcpsParser.MULTIPOLYGON:
				{
				this.state = 911;
				this.wktMultipolygon();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public curtainProjectionAxisLabel1(): CurtainProjectionAxisLabel1Context {
		let _localctx: CurtainProjectionAxisLabel1Context = new CurtainProjectionAxisLabel1Context(this._ctx, this.state);
		this.enterRule(_localctx, 140, wcpsParser.RULE_curtainProjectionAxisLabel1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 914;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public curtainProjectionAxisLabel2(): CurtainProjectionAxisLabel2Context {
		let _localctx: CurtainProjectionAxisLabel2Context = new CurtainProjectionAxisLabel2Context(this._ctx, this.state);
		this.enterRule(_localctx, 142, wcpsParser.RULE_curtainProjectionAxisLabel2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 916;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clipCurtainExpression(): ClipCurtainExpressionContext {
		let _localctx: ClipCurtainExpressionContext = new ClipCurtainExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, wcpsParser.RULE_clipCurtainExpression);
		let _la: number;
		try {
			_localctx = new ClipCurtainExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 918;
			this.match(wcpsParser.CLIP);
			this.state = 919;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 920;
			this.coverageExpression(0);
			this.state = 921;
			this.match(wcpsParser.COMMA);
			this.state = 922;
			this.match(wcpsParser.CURTAIN);
			this.state = 923;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 924;
			this.match(wcpsParser.PROJECTION);
			this.state = 925;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 926;
			this.curtainProjectionAxisLabel1();
			this.state = 927;
			this.match(wcpsParser.COMMA);
			this.state = 928;
			this.curtainProjectionAxisLabel2();
			this.state = 929;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 930;
			this.match(wcpsParser.COMMA);
			this.state = 931;
			this.wktExpression();
			this.state = 932;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 935;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.COMMA) {
				{
				this.state = 933;
				this.match(wcpsParser.COMMA);
				this.state = 934;
				this.crsName();
				}
			}

			this.state = 937;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public corridorProjectionAxisLabel1(): CorridorProjectionAxisLabel1Context {
		let _localctx: CorridorProjectionAxisLabel1Context = new CorridorProjectionAxisLabel1Context(this._ctx, this.state);
		this.enterRule(_localctx, 146, wcpsParser.RULE_corridorProjectionAxisLabel1);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 939;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public corridorProjectionAxisLabel2(): CorridorProjectionAxisLabel2Context {
		let _localctx: CorridorProjectionAxisLabel2Context = new CorridorProjectionAxisLabel2Context(this._ctx, this.state);
		this.enterRule(_localctx, 148, wcpsParser.RULE_corridorProjectionAxisLabel2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 941;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clipCorridorExpression(): ClipCorridorExpressionContext {
		let _localctx: ClipCorridorExpressionContext = new ClipCorridorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, wcpsParser.RULE_clipCorridorExpression);
		let _la: number;
		try {
			_localctx = new ClipCorridorExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 943;
			this.match(wcpsParser.CLIP);
			this.state = 944;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 945;
			this.coverageExpression(0);
			this.state = 946;
			this.match(wcpsParser.COMMA);
			this.state = 947;
			this.match(wcpsParser.CORRIDOR);
			this.state = 948;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 949;
			this.match(wcpsParser.PROJECTION);
			this.state = 950;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 951;
			this.corridorProjectionAxisLabel1();
			this.state = 952;
			this.match(wcpsParser.COMMA);
			this.state = 953;
			this.corridorProjectionAxisLabel2();
			this.state = 954;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 955;
			this.match(wcpsParser.COMMA);
			this.state = 956;
			this.wktLineString();
			this.state = 957;
			this.match(wcpsParser.COMMA);
			this.state = 958;
			this.wktExpression();
			this.state = 961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.COMMA) {
				{
				this.state = 959;
				this.match(wcpsParser.COMMA);
				this.state = 960;
				this.match(wcpsParser.DISCRETE);
				}
			}

			this.state = 963;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 966;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.COMMA) {
				{
				this.state = 964;
				this.match(wcpsParser.COMMA);
				this.state = 965;
				this.crsName();
				}
			}

			this.state = 968;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clipWKTExpression(): ClipWKTExpressionContext {
		let _localctx: ClipWKTExpressionContext = new ClipWKTExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, wcpsParser.RULE_clipWKTExpression);
		let _la: number;
		try {
			_localctx = new ClipWKTExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this.match(wcpsParser.CLIP);
			this.state = 971;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 972;
			this.coverageExpression(0);
			this.state = 973;
			this.match(wcpsParser.COMMA);
			this.state = 974;
			this.wktExpression();
			this.state = 977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.COMMA) {
				{
				this.state = 975;
				this.match(wcpsParser.COMMA);
				this.state = 976;
				this.crsName();
				}
			}

			this.state = 979;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			this.state = 981;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 980;
				this.match(wcpsParser.WITH_COORDINATES);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public crsTransformExpression(): CrsTransformExpressionContext {
		let _localctx: CrsTransformExpressionContext = new CrsTransformExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, wcpsParser.RULE_crsTransformExpression);
		let _la: number;
		try {
			_localctx = new CrsTransformExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 983;
			this.match(wcpsParser.CRS_TRANSFORM);
			this.state = 984;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 985;
			this.coverageExpression(0);
			this.state = 986;
			this.match(wcpsParser.COMMA);
			this.state = 987;
			this.dimensionCrsList();
			this.state = 994;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.COMMA) {
				{
				this.state = 988;
				this.match(wcpsParser.COMMA);
				this.state = 989;
				this.match(wcpsParser.LEFT_BRACE);
				this.state = 991;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === wcpsParser.COVERAGE_VARIABLE_NAME) {
					{
					this.state = 990;
					this.interpolationType();
					}
				}

				this.state = 993;
				this.match(wcpsParser.RIGHT_BRACE);
				}
			}

			this.state = 996;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimensionCrsList(): DimensionCrsListContext {
		let _localctx: DimensionCrsListContext = new DimensionCrsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, wcpsParser.RULE_dimensionCrsList);
		let _la: number;
		try {
			_localctx = new DimensionCrsListLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 998;
			this.match(wcpsParser.LEFT_BRACE);
			this.state = 999;
			this.dimensionCrsElement();
			this.state = 1004;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.COMMA) {
				{
				{
				this.state = 1000;
				this.match(wcpsParser.COMMA);
				this.state = 1001;
				this.dimensionCrsElement();
				}
				}
				this.state = 1006;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1007;
			this.match(wcpsParser.RIGHT_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimensionCrsElement(): DimensionCrsElementContext {
		let _localctx: DimensionCrsElementContext = new DimensionCrsElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, wcpsParser.RULE_dimensionCrsElement);
		try {
			_localctx = new DimensionCrsElementLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1009;
			this.axisName();
			this.state = 1010;
			this.match(wcpsParser.COLON);
			this.state = 1011;
			this.crsName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interpolationType(): InterpolationTypeContext {
		let _localctx: InterpolationTypeContext = new InterpolationTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, wcpsParser.RULE_interpolationType);
		try {
			_localctx = new InterpolationTypeLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1013;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageConstructorExpression(): CoverageConstructorExpressionContext {
		let _localctx: CoverageConstructorExpressionContext = new CoverageConstructorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, wcpsParser.RULE_coverageConstructorExpression);
		let _la: number;
		try {
			_localctx = new CoverageConstructorExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1015;
			this.match(wcpsParser.COVERAGE);
			this.state = 1016;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			this.state = 1017;
			this.match(wcpsParser.OVER);
			this.state = 1018;
			this.axisIterator();
			this.state = 1023;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.COMMA) {
				{
				{
				this.state = 1019;
				this.match(wcpsParser.COMMA);
				this.state = 1020;
				this.axisIterator();
				}
				}
				this.state = 1025;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1026;
			this.match(wcpsParser.VALUES);
			this.state = 1027;
			this.coverageExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public axisIterator(): AxisIteratorContext {
		let _localctx: AxisIteratorContext = new AxisIteratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, wcpsParser.RULE_axisIterator);
		try {
			this.state = 1038;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				_localctx = new AxisIteratorDomainIntervalsLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1029;
				this.coverageVariableName();
				this.state = 1030;
				this.axisName();
				this.state = 1031;
				this.match(wcpsParser.LEFT_PARENTHESIS);
				this.state = 1032;
				this.domainIntervals();
				this.state = 1033;
				this.match(wcpsParser.RIGHT_PARENTHESIS);
				}
				break;

			case 2:
				_localctx = new AxisIteratorLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1035;
				this.coverageVariableName();
				this.state = 1036;
				this.dimensionIntervalElement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intervalExpression(): IntervalExpressionContext {
		let _localctx: IntervalExpressionContext = new IntervalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, wcpsParser.RULE_intervalExpression);
		try {
			_localctx = new IntervalExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1040;
			this.scalarExpression();
			this.state = 1041;
			this.match(wcpsParser.COLON);
			this.state = 1042;
			this.scalarExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coverageConstantExpression(): CoverageConstantExpressionContext {
		let _localctx: CoverageConstantExpressionContext = new CoverageConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, wcpsParser.RULE_coverageConstantExpression);
		let _la: number;
		try {
			_localctx = new CoverageConstantExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			this.match(wcpsParser.COVERAGE);
			this.state = 1045;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			this.state = 1046;
			this.match(wcpsParser.OVER);
			this.state = 1047;
			this.axisIterator();
			this.state = 1052;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.COMMA) {
				{
				{
				this.state = 1048;
				this.match(wcpsParser.COMMA);
				this.state = 1049;
				this.axisIterator();
				}
				}
				this.state = 1054;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1055;
			this.match(wcpsParser.VALUE);
			this.state = 1056;
			this.match(wcpsParser.LIST);
			this.state = 1057;
			this.match(wcpsParser.LOWER_THAN);
			this.state = 1058;
			this.constant();
			this.state = 1063;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.SEMICOLON) {
				{
				{
				this.state = 1059;
				this.match(wcpsParser.SEMICOLON);
				this.state = 1060;
				this.constant();
				}
				}
				this.state = 1065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1066;
			this.match(wcpsParser.GREATER_THAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public axisSpec(): AxisSpecContext {
		let _localctx: AxisSpecContext = new AxisSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, wcpsParser.RULE_axisSpec);
		try {
			_localctx = new AxisSpecLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1068;
			this.dimensionIntervalElement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condenseExpression(): CondenseExpressionContext {
		let _localctx: CondenseExpressionContext = new CondenseExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, wcpsParser.RULE_condenseExpression);
		try {
			this.state = 1072;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wcpsParser.ADD:
			case wcpsParser.ALL:
			case wcpsParser.AVG:
			case wcpsParser.COUNT:
			case wcpsParser.MAX:
			case wcpsParser.MIN:
			case wcpsParser.SOME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1070;
				this.reduceExpression();
				}
				break;
			case wcpsParser.CONDENSE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1071;
				this.generalCondenseExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reduceBooleanExpressionOperator(): ReduceBooleanExpressionOperatorContext {
		let _localctx: ReduceBooleanExpressionOperatorContext = new ReduceBooleanExpressionOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, wcpsParser.RULE_reduceBooleanExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1074;
			_la = this._input.LA(1);
			if (!(_la === wcpsParser.ALL || _la === wcpsParser.SOME)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reduceNumericalExpressionOperator(): ReduceNumericalExpressionOperatorContext {
		let _localctx: ReduceNumericalExpressionOperatorContext = new ReduceNumericalExpressionOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, wcpsParser.RULE_reduceNumericalExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1076;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << wcpsParser.ADD) | (1 << wcpsParser.AVG) | (1 << wcpsParser.COUNT))) !== 0) || _la === wcpsParser.MAX || _la === wcpsParser.MIN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reduceBooleanExpression(): ReduceBooleanExpressionContext {
		let _localctx: ReduceBooleanExpressionContext = new ReduceBooleanExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, wcpsParser.RULE_reduceBooleanExpression);
		try {
			_localctx = new ReduceBooleanExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1078;
			this.reduceBooleanExpressionOperator();
			this.state = 1079;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1080;
			this.coverageExpression(0);
			this.state = 1081;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reduceNumericalExpression(): ReduceNumericalExpressionContext {
		let _localctx: ReduceNumericalExpressionContext = new ReduceNumericalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, wcpsParser.RULE_reduceNumericalExpression);
		try {
			_localctx = new ReduceNumericalExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1083;
			this.reduceNumericalExpressionOperator();
			this.state = 1084;
			this.match(wcpsParser.LEFT_PARENTHESIS);
			this.state = 1085;
			this.coverageExpression(0);
			this.state = 1086;
			this.match(wcpsParser.RIGHT_PARENTHESIS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reduceExpression(): ReduceExpressionContext {
		let _localctx: ReduceExpressionContext = new ReduceExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, wcpsParser.RULE_reduceExpression);
		try {
			this.state = 1090;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wcpsParser.ALL:
			case wcpsParser.SOME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1088;
				this.reduceBooleanExpression();
				}
				break;
			case wcpsParser.ADD:
			case wcpsParser.AVG:
			case wcpsParser.COUNT:
			case wcpsParser.MAX:
			case wcpsParser.MIN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1089;
				this.reduceNumericalExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condenseExpressionOperator(): CondenseExpressionOperatorContext {
		let _localctx: CondenseExpressionOperatorContext = new CondenseExpressionOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, wcpsParser.RULE_condenseExpressionOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1092;
			_la = this._input.LA(1);
			if (!(_la === wcpsParser.AND || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (wcpsParser.MAX - 54)) | (1 << (wcpsParser.MIN - 54)) | (1 << (wcpsParser.MULTIPLICATION - 54)) | (1 << (wcpsParser.OR - 54)) | (1 << (wcpsParser.PLUS - 54)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generalCondenseExpression(): GeneralCondenseExpressionContext {
		let _localctx: GeneralCondenseExpressionContext = new GeneralCondenseExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, wcpsParser.RULE_generalCondenseExpression);
		let _la: number;
		try {
			_localctx = new GeneralCondenseExpressionLabelContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1094;
			this.match(wcpsParser.CONDENSE);
			this.state = 1095;
			this.condenseExpressionOperator();
			this.state = 1096;
			this.match(wcpsParser.OVER);
			this.state = 1097;
			this.axisIterator();
			this.state = 1102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === wcpsParser.COMMA) {
				{
				{
				this.state = 1098;
				this.match(wcpsParser.COMMA);
				this.state = 1099;
				this.axisIterator();
				}
				}
				this.state = 1104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === wcpsParser.WHERE) {
				{
				this.state = 1105;
				this.whereClause();
				}
			}

			this.state = 1108;
			this.match(wcpsParser.USING);
			this.state = 1109;
			this.coverageExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchCaseExpression(): SwitchCaseExpressionContext {
		let _localctx: SwitchCaseExpressionContext = new SwitchCaseExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, wcpsParser.RULE_switchCaseExpression);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				_localctx = new SwitchCaseRangeConstructorExpressionLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1111;
				this.match(wcpsParser.SWITCH);
				this.state = 1112;
				this.match(wcpsParser.CASE);
				this.state = 1116;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1113;
						this.match(wcpsParser.LEFT_PARENTHESIS);
						}
						}
					}
					this.state = 1118;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
				}
				this.state = 1119;
				this.booleanSwitchCaseCombinedExpression(0);
				this.state = 1123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === wcpsParser.RIGHT_PARENTHESIS) {
					{
					{
					this.state = 1120;
					this.match(wcpsParser.RIGHT_PARENTHESIS);
					}
					}
					this.state = 1125;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1126;
				this.match(wcpsParser.RETURN);
				this.state = 1127;
				this.rangeConstructorSwitchCaseExpression();
				this.state = 1147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === wcpsParser.CASE) {
					{
					{
					this.state = 1128;
					this.match(wcpsParser.CASE);
					this.state = 1132;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1129;
							this.match(wcpsParser.LEFT_PARENTHESIS);
							}
							}
						}
						this.state = 1134;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
					}
					this.state = 1135;
					this.booleanSwitchCaseCombinedExpression(0);
					this.state = 1139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === wcpsParser.RIGHT_PARENTHESIS) {
						{
						{
						this.state = 1136;
						this.match(wcpsParser.RIGHT_PARENTHESIS);
						}
						}
						this.state = 1141;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1142;
					this.match(wcpsParser.RETURN);
					this.state = 1143;
					this.rangeConstructorSwitchCaseExpression();
					}
					}
					this.state = 1149;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1150;
				this.match(wcpsParser.DEFAULT);
				this.state = 1151;
				this.match(wcpsParser.RETURN);
				this.state = 1152;
				this.rangeConstructorSwitchCaseExpression();
				}
				break;

			case 2:
				_localctx = new SwitchCaseScalarValueExpressionLabelContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1154;
				this.match(wcpsParser.SWITCH);
				this.state = 1155;
				this.match(wcpsParser.CASE);
				this.state = 1159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1156;
						this.match(wcpsParser.LEFT_PARENTHESIS);
						}
						}
					}
					this.state = 1161;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
				}
				this.state = 1162;
				this.booleanSwitchCaseCombinedExpression(0);
				this.state = 1166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === wcpsParser.RIGHT_PARENTHESIS) {
					{
					{
					this.state = 1163;
					this.match(wcpsParser.RIGHT_PARENTHESIS);
					}
					}
					this.state = 1168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1169;
				this.match(wcpsParser.RETURN);
				this.state = 1170;
				this.scalarValueCoverageExpression();
				this.state = 1190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === wcpsParser.CASE) {
					{
					{
					this.state = 1171;
					this.match(wcpsParser.CASE);
					this.state = 1175;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 1172;
							this.match(wcpsParser.LEFT_PARENTHESIS);
							}
							}
						}
						this.state = 1177;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
					}
					this.state = 1178;
					this.booleanSwitchCaseCombinedExpression(0);
					this.state = 1182;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === wcpsParser.RIGHT_PARENTHESIS) {
						{
						{
						this.state = 1179;
						this.match(wcpsParser.RIGHT_PARENTHESIS);
						}
						}
						this.state = 1184;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 1185;
					this.match(wcpsParser.RETURN);
					this.state = 1186;
					this.scalarValueCoverageExpression();
					}
					}
					this.state = 1192;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1193;
				this.match(wcpsParser.DEFAULT);
				this.state = 1194;
				this.match(wcpsParser.RETURN);
				this.state = 1195;
				this.scalarValueCoverageExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public crsName(): CrsNameContext {
		let _localctx: CrsNameContext = new CrsNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, wcpsParser.RULE_crsName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1199;
			this.match(wcpsParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public axisName(): AxisNameContext {
		let _localctx: AxisNameContext = new AxisNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, wcpsParser.RULE_axisName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1201;
			this.match(wcpsParser.COVERAGE_VARIABLE_NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, wcpsParser.RULE_number);
		let _la: number;
		try {
			this.state = 1215;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === wcpsParser.MINUS) {
					{
					this.state = 1203;
					this.match(wcpsParser.MINUS);
					}
				}

				this.state = 1206;
				this.match(wcpsParser.INTEGER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1208;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === wcpsParser.MINUS) {
					{
					this.state = 1207;
					this.match(wcpsParser.MINUS);
					}
				}

				this.state = 1210;
				this.match(wcpsParser.REAL_NUMBER_CONSTANT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === wcpsParser.MINUS) {
					{
					this.state = 1211;
					this.match(wcpsParser.MINUS);
					}
				}

				this.state = 1214;
				this.match(wcpsParser.SCIENTIFIC_NUMBER_CONSTANT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, wcpsParser.RULE_constant);
		try {
			this.state = 1225;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case wcpsParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1217;
				this.match(wcpsParser.STRING_LITERAL);
				}
				break;
			case wcpsParser.TRUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1218;
				this.match(wcpsParser.TRUE);
				}
				break;
			case wcpsParser.FALSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1219;
				this.match(wcpsParser.FALSE);
				}
				break;
			case wcpsParser.MINUS:
			case wcpsParser.INTEGER:
			case wcpsParser.REAL_NUMBER_CONSTANT:
			case wcpsParser.SCIENTIFIC_NUMBER_CONSTANT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1221;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
				case 1:
					{
					this.state = 1220;
					this.match(wcpsParser.MINUS);
					}
					break;
				}
				this.state = 1223;
				this.number();
				}
				break;
			case wcpsParser.LEFT_PARENTHESIS:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1224;
				this.complexNumberConstant();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 13:
			return this.booleanScalarExpression_sempred(_localctx as BooleanScalarExpressionContext, predIndex);

		case 22:
			return this.booleanSwitchCaseCombinedExpression_sempred(_localctx as BooleanSwitchCaseCombinedExpressionContext, predIndex);

		case 23:
			return this.numericalScalarExpression_sempred(_localctx as NumericalScalarExpressionContext, predIndex);

		case 42:
			return this.coverageExpression_sempred(_localctx as CoverageExpressionContext, predIndex);
		}
		return true;
	}
	private booleanScalarExpression_sempred(_localctx: BooleanScalarExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private booleanSwitchCaseCombinedExpression_sempred(_localctx: BooleanSwitchCaseCombinedExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private numericalScalarExpression_sempred(_localctx: NumericalScalarExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private coverageExpression_sempred(_localctx: CoverageExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 40);

		case 4:
			return this.precpred(this._ctx, 37);

		case 5:
			return this.precpred(this._ctx, 36);

		case 6:
			return this.precpred(this._ctx, 1);

		case 7:
			return this.precpred(this._ctx, 32);

		case 8:
			return this.precpred(this._ctx, 30);

		case 9:
			return this.precpred(this._ctx, 29);

		case 10:
			return this.precpred(this._ctx, 17);

		case 11:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03q\u04CE\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x03\x02\x03\x02\x05\x02\xCB\n\x02\x03" +
		"\x02\x05\x02\xCE\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03\xD6\n\x03\f\x03\x0E\x03\xD9\v\x03\x03\x04\x03\x04\x05\x04\xDD" +
		"\n\x04\x03\x05\x03\x05\x03\x05\x05\x05\xE2\n\x05\x03\x05\x03\x05\x03\x05" +
		"\x07\x05\xE7\n\x05\f\x05\x0E\x05\xEA\v\x05\x03\x05\x05\x05\xED\n\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x07\x06\xF3\n\x06\f\x06\x0E\x06\xF6\v\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\b\u0105\n\b\x03\t\x03\t\x05\t\u0109\n\t\x03\t" +
		"\x03\t\x05\t\u010D\n\t\x03\n\x03\n\x05\n\u0111\n\n\x03\n\x03\n\x05\n\u0115" +
		"\n\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x05\f\u011D\n\f\x03\r\x05\r\u0120" +
		"\n\r\x03\r\x03\r\x05\r\u0124\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\u012A\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0131\n\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\u0135\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0140\n\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x07\x0F\u0146\n\x0F\f\x0F\x0E\x0F\u0149\v\x0F\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x07\x17\u015A\n\x17\f\x17\x0E" +
		"\x17\u015D\v\x17\x03\x17\x03\x17\x07\x17\u0161\n\x17\f\x17\x0E\x17\u0164" +
		"\v\x17\x03\x17\x03\x17\x07\x17\u0168\n\x17\f\x17\x0E\x17\u016B\v\x17\x03" +
		"\x17\x03\x17\x07\x17\u016F\n\x17\f\x17\x0E\x17\u0172\v\x17\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u017A\n\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x07\x18\u0180\n\x18\f\x18\x0E\x18\u0183\v\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0194\n\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x07\x19\u019A\n\x19\f\x19\x0E\x19\u019D\v\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u01B2\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03 \x03 \x03 \x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x05\"\u01C7\n\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03" +
		"&\x03\'\x03\'\x03\'\x05\'\u01E4\n\'\x03\'\x05\'\u01E7\n\'\x03(\x03(\x03" +
		")\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u01F4\n*\x03*\x03*\x03" +
		"+\x03+\x03+\x03+\x03+\x05+\u01FD\n+\x03+\x03+\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u0272\n,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u0298\n,\x03,\x07,\u029B\n," +
		"\f,\x0E,\u029E\v,\x03-\x03-\x03.\x03.\x03/\x03/\x05/\u02A6\n/\x03/\x03" +
		"/\x05/\u02AA\n/\x030\x030\x030\x030\x030\x031\x031\x032\x032\x032\x03" +
		"2\x032\x033\x033\x033\x033\x033\x033\x033\x034\x034\x034\x034\x034\x03" +
		"4\x034\x035\x035\x035\x035\x035\x035\x035\x036\x036\x036\x036\x036\x03" +
		"6\x036\x036\x036\x036\x036\x036\x056\u02D9\n6\x037\x037\x077\u02DD\n7" +
		"\f7\x0E7\u02E0\v7\x038\x038\x038\x038\x038\x039\x039\x03:\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x03:\x03:\x03:\x07:\u02F3\n:\f:\x0E:\u02F6\v:\x03:\x03" +
		":\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x07;\u0304\n;\f;\x0E" +
		";\u0307\v;\x03;\x03;\x03<\x03<\x03<\x07<\u030E\n<\f<\x0E<\u0311\v<\x03" +
		"=\x03=\x03=\x05=\u0316\n=\x03=\x03=\x03=\x03=\x03>\x03>\x03>\x07>\u031F" +
		"\n>\f>\x0E>\u0322\v>\x03?\x03?\x03?\x07?\u0327\n?\f?\x0E?\u032A\v?\x03" +
		"@\x03@\x03@\x03@\x05@\u0330\n@\x03@\x03@\x03@\x05@\u0335\n@\x03@\x03@" +
		"\x03@\x03@\x03@\x03@\x03@\x05@\u033E\n@\x03A\x03A\x03A\x05A\u0343\nA\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u034E\nA\x03A\x03A\x03" +
		"A\x03A\x05A\u0354\nA\x03B\x03B\x07B\u0358\nB\fB\x0EB\u035B\vB\x03B\x03" +
		"B\x03B\x07B\u0360\nB\fB\x0EB\u0363\vB\x07B\u0365\nB\fB\x0EB\u0368\vB\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x07C\u0372\nC\fC\x0EC\u0375\vC\x03" +
		"D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x03F\x07F\u0389\nF\fF\x0EF\u038C\vF\x03F\x03F\x03G\x03G\x03" +
		"G\x05G\u0393\nG\x03H\x03H\x03I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u03AA\nJ\x03" +
		"J\x03J\x03K\x03K\x03L\x03L\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u03C4\nM\x03M\x03" +
		"M\x03M\x05M\u03C9\nM\x03M\x03M\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x05" +
		"N\u03D4\nN\x03N\x03N\x05N\u03D8\nN\x03O\x03O\x03O\x03O\x03O\x03O\x03O" +
		"\x03O\x05O\u03E2\nO\x03O\x05O\u03E5\nO\x03O\x03O\x03P\x03P\x03P\x03P\x07" +
		"P\u03ED\nP\fP\x0EP\u03F0\vP\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03" +
		"S\x03S\x03S\x03S\x03S\x03S\x07S\u0400\nS\fS\x0ES\u0403\vS\x03S\x03S\x03" +
		"S\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u0411\nT\x03U\x03" +
		"U\x03U\x03U\x03V\x03V\x03V\x03V\x03V\x03V\x07V\u041D\nV\fV\x0EV\u0420" +
		"\vV\x03V\x03V\x03V\x03V\x03V\x03V\x07V\u0428\nV\fV\x0EV\u042B\vV\x03V" +
		"\x03V\x03W\x03W\x03X\x03X\x05X\u0433\nX\x03Y\x03Y\x03Z\x03Z\x03[\x03[" +
		"\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x03\\\x03]\x03]\x05]\u0445\n]" +
		"\x03^\x03^\x03_\x03_\x03_\x03_\x03_\x03_\x07_\u044F\n_\f_\x0E_\u0452\v" +
		"_\x03_\x05_\u0455\n_\x03_\x03_\x03_\x03`\x03`\x03`\x07`\u045D\n`\f`\x0E" +
		"`\u0460\v`\x03`\x03`\x07`\u0464\n`\f`\x0E`\u0467\v`\x03`\x03`\x03`\x03" +
		"`\x07`\u046D\n`\f`\x0E`\u0470\v`\x03`\x03`\x07`\u0474\n`\f`\x0E`\u0477" +
		"\v`\x03`\x03`\x03`\x07`\u047C\n`\f`\x0E`\u047F\v`\x03`\x03`\x03`\x03`" +
		"\x03`\x03`\x03`\x07`\u0488\n`\f`\x0E`\u048B\v`\x03`\x03`\x07`\u048F\n" +
		"`\f`\x0E`\u0492\v`\x03`\x03`\x03`\x03`\x07`\u0498\n`\f`\x0E`\u049B\v`" +
		"\x03`\x03`\x07`\u049F\n`\f`\x0E`\u04A2\v`\x03`\x03`\x03`\x07`\u04A7\n" +
		"`\f`\x0E`\u04AA\v`\x03`\x03`\x03`\x03`\x05`\u04B0\n`\x03a\x03a\x03b\x03" +
		"b\x03c\x05c\u04B7\nc\x03c\x03c\x05c\u04BB\nc\x03c\x03c\x05c\u04BF\nc\x03" +
		"c\x05c\u04C2\nc\x03d\x03d\x03d\x03d\x05d\u04C8\nd\x03d\x03d\x05d\u04CC" +
		"\nd\x03d\x02\x02\x06\x1C.0Ve\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\x02\x11\x04\x02##]]\x05\x02\x07\x07@" +
		"@cc\x06\x02  $%67==\x04\x02  ==\x05\x02\x1D\x1D:;EE\b\x02\x04\x04&&::" +
		"EEGHWW\x06\x02\b\n\x12\x13STZ[\x04\x0255__\x04\x02ooqq\x06\x02\x04\x04" +
		"&&GGWW\x05\x02!!2244\x04\x02jjnn\x04\x02\x06\x06VV\x06\x02\x05\x05\v\v" +
		"\x14\x1489\x07\x02\x07\x0789;;@@EE\x02\u0503\x02\xC8\x03\x02\x02\x02\x04" +
		"\xD1\x03\x02\x02\x02\x06\xDC\x03\x02\x02\x02\b\xDE\x03\x02\x02\x02\n\xEE" +
		"\x03\x02\x02\x02\f\xF7\x03\x02\x02\x02\x0E\u0104\x03\x02\x02\x02\x10\u0106" +
		"\x03\x02\x02\x02\x12\u010E\x03\x02\x02\x02\x14\u0116\x03\x02\x02\x02\x16" +
		"\u011C\x03\x02\x02\x02\x18\u011F\x03\x02\x02\x02\x1A\u0129\x03\x02\x02" +
		"\x02\x1C\u013F\x03\x02\x02\x02\x1E\u014A\x03\x02\x02\x02 \u014C\x03\x02" +
		"\x02\x02\"\u014E\x03\x02\x02\x02$\u0150\x03\x02\x02\x02&\u0152\x03\x02" +
		"\x02\x02(\u0154\x03\x02\x02\x02*\u0156\x03\x02\x02\x02,\u015B\x03\x02" +
		"\x02\x02.\u0179\x03\x02\x02\x020\u0193\x03\x02\x02\x022\u019E\x03\x02" +
		"\x02\x024\u01A4\x03\x02\x02\x026\u01A6\x03\x02\x02\x028\u01A8\x03\x02" +
		"\x02\x02:\u01B1\x03\x02\x02\x02<\u01B3\x03\x02\x02\x02>\u01B8\x03\x02" +
		"\x02\x02@\u01BD\x03\x02\x02\x02B\u01BF\x03\x02\x02\x02D\u01CA\x03\x02" +
		"\x02\x02F\u01D1\x03\x02\x02\x02H\u01D6\x03\x02\x02\x02J\u01DB\x03\x02" +
		"\x02\x02L\u01E3\x03\x02\x02\x02N\u01E8\x03\x02\x02\x02P\u01EA\x03\x02" +
		"\x02\x02R\u01EC\x03\x02\x02\x02T\u01F7\x03\x02\x02\x02V\u0271\x03\x02" +
		"\x02\x02X\u029F\x03\x02\x02\x02Z\u02A1\x03\x02\x02\x02\\\u02A3\x03\x02" +
		"\x02\x02^\u02AB\x03\x02\x02\x02`\u02B0\x03\x02\x02\x02b\u02B2\x03\x02" +
		"\x02\x02d\u02B7\x03\x02\x02\x02f\u02BE\x03\x02\x02\x02h\u02C5\x03\x02" +
		"\x02\x02j\u02D8\x03\x02\x02\x02l\u02DA\x03\x02\x02\x02n\u02E1\x03\x02" +
		"\x02\x02p\u02E6\x03\x02\x02\x02r\u02E8\x03\x02\x02\x02t\u02F9\x03\x02" +
		"\x02\x02v\u030A\x03\x02\x02\x02x\u0312\x03\x02\x02\x02z\u031B\x03\x02" +
		"\x02\x02|\u0323\x03\x02\x02\x02~\u033D\x03\x02\x02\x02\x80\u0353\x03\x02" +
		"\x02\x02\x82\u0355\x03\x02\x02\x02\x84\u0369\x03\x02\x02\x02\x86\u0376" +
		"\x03\x02\x02\x02\x88\u0379\x03\x02\x02\x02\x8A\u037E\x03\x02\x02\x02\x8C" +
		"\u0392\x03\x02\x02\x02\x8E\u0394\x03\x02\x02\x02\x90\u0396\x03\x02\x02" +
		"\x02\x92\u0398\x03\x02\x02\x02\x94\u03AD\x03\x02\x02\x02\x96\u03AF\x03" +
		"\x02\x02\x02\x98\u03B1\x03\x02\x02\x02\x9A\u03CC\x03\x02\x02\x02\x9C\u03D9" +
		"\x03\x02\x02\x02\x9E\u03E8\x03\x02\x02\x02\xA0\u03F3\x03\x02\x02\x02\xA2" +
		"\u03F7\x03\x02\x02\x02\xA4\u03F9\x03\x02\x02\x02\xA6\u0410\x03\x02\x02" +
		"\x02\xA8\u0412\x03\x02\x02\x02\xAA\u0416\x03\x02\x02\x02\xAC\u042E\x03" +
		"\x02\x02\x02\xAE\u0432\x03\x02\x02\x02\xB0\u0434\x03\x02\x02\x02\xB2\u0436" +
		"\x03\x02\x02\x02\xB4\u0438\x03\x02\x02\x02\xB6\u043D\x03\x02\x02\x02\xB8" +
		"\u0444\x03\x02\x02\x02\xBA\u0446\x03\x02\x02\x02\xBC\u0448\x03\x02\x02" +
		"\x02\xBE\u04AF\x03\x02\x02\x02\xC0\u04B1\x03\x02\x02\x02\xC2\u04B3\x03" +
		"\x02\x02\x02\xC4\u04C1\x03\x02\x02\x02\xC6\u04CB\x03\x02\x02\x02\xC8\xCA" +
		"\x05\x04\x03\x02\xC9\xCB\x05\x10\t\x02\xCA\xC9\x03\x02\x02\x02\xCA\xCB" +
		"\x03\x02\x02\x02\xCB\xCD\x03\x02\x02\x02\xCC\xCE\x05\n\x06\x02\xCD\xCC" +
		"\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0" +
		"\x05\x12\n\x02\xD0\x03\x03\x02\x02\x02\xD1\xD2\x07\x03\x02\x02\xD2\xD7" +
		"\x05\b\x05\x02\xD3\xD4\x07\x10\x02\x02\xD4\xD6\x05\b\x05\x02\xD5\xD3\x03" +
		"\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03" +
		"\x02\x02\x02\xD8\x05\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDD\x07" +
		"n\x02\x02\xDB\xDD\x05T+\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDB\x03\x02\x02" +
		"\x02\xDD\x07\x03\x02\x02\x02\xDE\xDF\x05\x14\v\x02\xDF\xE1\x07-\x02\x02" +
		"\xE0\xE2\x070\x02\x02\xE1\xE0\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02" +
		"\xE2\xE3\x03\x02\x02\x02\xE3\xE8\x05\x06\x04\x02\xE4\xE5\x07\x10\x02\x02" +
		"\xE5\xE7\x05\x06\x04\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEA\x03\x02\x02\x02" +
		"\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02" +
		"\xEA\xE8\x03\x02\x02\x02\xEB\xED\x07L\x02\x02\xEC\xEB\x03\x02\x02\x02" +
		"\xEC\xED\x03\x02\x02\x02\xED\t\x03\x02\x02\x02\xEE\xEF\x071\x02\x02\xEF" +
		"\xF4\x05\x0E\b\x02\xF0\xF1\x07\x10\x02\x02\xF1\xF3\x05\x0E\b\x02\xF2\xF0" +
		"\x03\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5" +
		"\x03\x02\x02\x02\xF5\v\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF8" +
		"\x05\x14\v\x02\xF8\xF9\x07\x0F\x02\x02\xF9\xFA\x07 \x02\x02\xFA\xFB\x07" +
		"/\x02\x02\xFB\xFC\x05z>\x02\xFC\xFD\x07K\x02\x02\xFD\r\x03\x02\x02\x02" +
		"\xFE\u0105\x05\f\x07\x02\xFF\u0100\x05\x14\v\x02\u0100\u0101\x07\x0F\x02" +
		"\x02\u0101\u0102\x07 \x02\x02\u0102\u0103\x05V,\x02\u0103\u0105\x03\x02" +
		"\x02\x02\u0104\xFE\x03\x02\x02\x02\u0104\xFF\x03\x02\x02\x02\u0105\x0F" +
		"\x03\x02\x02\x02\u0106\u0108\x07b\x02\x02\u0107\u0109\x070\x02\x02\u0108" +
		"\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02" +
		"\x02\x02\u010A\u010C\x05V,\x02\u010B\u010D\x07L\x02\x02\u010C\u010B\x03" +
		"\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\x11\x03\x02\x02\x02\u010E" +
		"\u0110\x07I\x02\x02\u010F\u0111\x070\x02\x02\u0110\u010F\x03\x02\x02\x02" +
		"\u0110\u0111\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114\x05" +
		"\x16\f\x02\u0113\u0115\x07L\x02\x02\u0114\u0113\x03\x02\x02\x02\u0114" +
		"\u0115\x03\x02\x02\x02\u0115\x13\x03\x02\x02\x02\u0116\u0117\x07n\x02" +
		"\x02\u0117\x15\x03\x02\x02\x02\u0118\u011D\x05:\x1E\x02\u0119\u011D\x05" +
		"\x1A\x0E\x02\u011A\u011D\x05R*\x02\u011B\u011D\x05\x18\r\x02\u011C\u0118" +
		"\x03\x02\x02\x02\u011C\u0119\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02" +
		"\u011C\u011B\x03\x02\x02\x02\u011D\x17\x03\x02\x02\x02\u011E\u0120\x07" +
		"0\x02\x02\u011F\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120" +
		"\u0121\x03\x02\x02\x02\u0121\u0123\x05V,\x02\u0122\u0124\x07L\x02\x02" +
		"\u0123\u0122\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\x19\x03" +
		"\x02\x02\x02\u0125\u012A\x05\x1C\x0F\x02\u0126\u012A\x050\x19\x02\u0127" +
		"\u012A\x05(\x15\x02\u0128\u012A\x05*\x16\x02\u0129\u0125\x03\x02\x02\x02" +
		"\u0129\u0126\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u0128\x03" +
		"\x02\x02\x02\u012A\x1B\x03\x02\x02\x02\u012B\u012C\b\x0F\x01\x02\u012C" +
		"\u0140\x05\xB4[\x02\u012D\u0140\x05 \x11\x02\u012E\u0130\x05\x1E\x10\x02" +
		"\u012F\u0131\x070\x02\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03" +
		"\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0134\x05\x1C\x0F\x02\u0133" +
		"\u0135\x07L\x02\x02\u0134\u0133\x03\x02\x02\x02\u0134\u0135\x03\x02\x02" +
		"\x02\u0135\u0140\x03\x02\x02\x02\u0136\u0137\x050\x19\x02\u0137\u0138" +
		"\x05$\x13\x02\u0138\u0139\x050\x19\x02\u0139\u0140\x03\x02\x02\x02\u013A" +
		"\u0140\x05\xB4[\x02\u013B\u013C\x05(\x15\x02\u013C\u013D\x05&\x14\x02" +
		"\u013D\u013E\x05(\x15\x02\u013E\u0140\x03\x02\x02\x02\u013F\u012B\x03" +
		"\x02\x02\x02\u013F\u012D\x03\x02\x02\x02\u013F\u012E\x03\x02\x02\x02\u013F" +
		"\u0136\x03\x02\x02\x02\u013F\u013A\x03\x02\x02\x02\u013F\u013B\x03\x02" +
		"\x02\x02\u0140\u0147\x03\x02\x02\x02\u0141\u0142\f\x06\x02\x02\u0142\u0143" +
		"\x05\"\x12\x02\u0143\u0144\x05\x1C\x0F\x07\u0144\u0146\x03\x02\x02\x02" +
		"\u0145\u0141\x03\x02\x02\x02\u0146\u0149\x03\x02\x02\x02\u0147\u0145\x03" +
		"\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\x1D\x03\x02\x02\x02\u0149" +
		"\u0147\x03\x02\x02\x02\u014A\u014B\x07<\x02\x02\u014B\x1F\x03\x02\x02" +
		"\x02\u014C\u014D\t\x02\x02\x02\u014D!\x03\x02\x02\x02\u014E\u014F\t\x03" +
		"\x02\x02\u014F#\x03\x02\x02\x02\u0150\u0151\t\x04\x02\x02\u0151%\x03\x02" +
		"\x02\x02\u0152\u0153\t\x05\x02\x02\u0153\'\x03\x02\x02\x02\u0154\u0155" +
		"\x07o\x02\x02\u0155)\x03\x02\x02\x02\u0156\u0157\x07;\x02\x02\u0157+\x03" +
		"\x02\x02\x02\u0158\u015A\x070\x02\x02\u0159\u0158\x03\x02\x02\x02\u015A" +
		"\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015B\u015C\x03\x02" +
		"\x02\x02\u015C\u015E\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015E" +
		"\u0162\x05V,\x02\u015F\u0161\x07L\x02\x02\u0160\u015F\x03\x02\x02\x02" +
		"\u0161\u0164\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0163\x03" +
		"\x02\x02\x02\u0163\u0165\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0165" +
		"\u0169\x05$\x13\x02\u0166\u0168\x070\x02\x02\u0167\u0166\x03\x02\x02\x02" +
		"\u0168\u016B\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03" +
		"\x02\x02\x02\u016A\u016C\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C" +
		"\u0170\x05V,\x02\u016D\u016F\x07L\x02\x02\u016E\u016D\x03\x02\x02\x02" +
		"\u016F\u0172\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03" +
		"\x02\x02\x02\u0171-\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0173" +
		"\u0174\b\x18\x01\x02\u0174\u0175\x05,\x17\x02\u0175\u0176\x05\"\x12\x02" +
		"\u0176\u0177\x05,\x17\x02\u0177\u017A\x03\x02\x02\x02\u0178\u017A\x05" +
		",\x17\x02\u0179\u0173\x03\x02\x02\x02\u0179\u0178\x03\x02\x02\x02\u017A" +
		"\u0181\x03\x02\x02\x02\u017B\u017C\f\x03\x02\x02\u017C\u017D\x05\"\x12" +
		"\x02\u017D\u017E\x05.\x18\x04\u017E\u0180\x03\x02\x02\x02\u017F\u017B" +
		"\x03\x02\x02\x02\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02" +
		"\u0181\u0182\x03\x02\x02\x02\u0182/\x03\x02\x02\x02\u0183\u0181\x03\x02" +
		"\x02\x02\u0184\u0185\b\x19\x01\x02\u0185\u0186\x056\x1C\x02\u0186\u0187" +
		"\x070\x02\x02\u0187\u0188\x050\x19\x02\u0188\u0189\x07L\x02\x02\u0189" +
		"\u0194\x03\x02\x02\x02\u018A\u018B\x058\x1D\x02\u018B\u018C\x070\x02\x02" +
		"\u018C\u018D\x050\x19\x02\u018D\u018E\x07L\x02\x02\u018E\u0194\x03\x02" +
		"\x02\x02\u018F\u0194\x05\xAEX\x02\u0190\u0194\x05\xC4c\x02\u0191\u0194" +
		"\x07>\x02\x02\u0192\u0194\x052\x1A\x02\u0193\u0184\x03\x02\x02\x02\u0193" +
		"\u018A\x03\x02\x02\x02\u0193\u018F\x03\x02\x02\x02\u0193\u0190\x03\x02" +
		"\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0192\x03\x02\x02\x02\u0194" +
		"\u019B\x03\x02\x02\x02\u0195\u0196";
	private static readonly _serializedATNSegment1: string =
		"\f\x07\x02\x02\u0196\u0197\x054\x1B\x02\u0197\u0198\x050\x19\b\u0198\u019A" +
		"\x03\x02\x02\x02\u0199\u0195\x03\x02\x02\x02\u019A\u019D\x03\x02\x02\x02" +
		"\u019B\u0199\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C1\x03\x02" +
		"\x02\x02\u019D\u019B\x03\x02\x02\x02\u019E\u019F\x070\x02\x02\u019F\u01A0" +
		"\x07k\x02\x02\u01A0\u01A1\x07\x10\x02\x02\u01A1\u01A2\x07k\x02\x02\u01A2" +
		"\u01A3\x07L\x02\x02\u01A33\x03\x02\x02\x02\u01A4\u01A5\t\x06\x02\x02\u01A5" +
		"5\x03\x02\x02\x02\u01A6\u01A7\t\x07\x02\x02\u01A77\x03\x02\x02\x02\u01A8" +
		"\u01A9\t\b\x02\x02\u01A99\x03\x02\x02\x02\u01AA\u01B2\x05<\x1F\x02\u01AB" +
		"\u01B2\x05> \x02\u01AC\u01B2\x05B\"\x02\u01AD\u01B2\x05F$\x02\u01AE\u01B2" +
		"\x05D#\x02\u01AF\u01B2\x05H%\x02\u01B0\u01B2\x05J&\x02\u01B1\u01AA\x03" +
		"\x02\x02\x02\u01B1\u01AB\x03\x02\x02\x02\u01B1\u01AC\x03\x02\x02\x02\u01B1" +
		"\u01AD\x03\x02\x02\x02\u01B1\u01AE\x03\x02\x02\x02\u01B1\u01AF\x03\x02" +
		"\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2;\x03\x02\x02\x02\u01B3\u01B4" +
		"\x07\'\x02\x02\u01B4\u01B5\x070\x02\x02\u01B5\u01B6\x05V,\x02\u01B6\u01B7" +
		"\x07L\x02\x02\u01B7=\x03\x02\x02\x02\u01B8\u01B9\x07(\x02\x02\u01B9\u01BA" +
		"\x070\x02\x02\u01BA\u01BB\x05V,\x02\u01BB\u01BC\x07L\x02\x02\u01BC?\x03" +
		"\x02\x02\x02\u01BD\u01BE\t\t\x02\x02\u01BEA\x03\x02\x02\x02\u01BF\u01C0" +
		"\x07,\x02\x02\u01C0\u01C1\x070\x02\x02\u01C1\u01C2\x05V,\x02\u01C2\u01C3" +
		"\x07\x10\x02\x02\u01C3\u01C6\x05\xC2b\x02\u01C4\u01C5\x07\x10\x02\x02" +
		"\u01C5\u01C7\x05\xC0a\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03" +
		"\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9\x07L\x02\x02\u01C9" +
		"C\x03\x02\x02\x02\u01CA\u01CB\x07)\x02\x02\u01CB\u01CC\x070\x02\x02\u01CC" +
		"\u01CD\x05V,\x02\u01CD\u01CE\x07\x10\x02\x02\u01CE\u01CF\x05\xC2b\x02" +
		"\u01CF\u01D0\x07L\x02\x02\u01D0E\x03\x02\x02\x02\u01D1\u01D2\x07)\x02" +
		"\x02\u01D2\u01D3\x070\x02\x02\u01D3\u01D4\x05V,\x02\u01D4\u01D5\x07L\x02" +
		"\x02\u01D5G\x03\x02\x02\x02\u01D6\u01D7\x07*\x02\x02\u01D7\u01D8\x070" +
		"\x02\x02\u01D8\u01D9\x05V,\x02\u01D9\u01DA\x07L\x02\x02\u01DAI\x03\x02" +
		"\x02\x02\u01DB\u01DC\x07\x1C\x02\x02\u01DC\u01DD\x070\x02\x02\u01DD\u01DE" +
		"\x05\x14\v\x02\u01DE\u01DF\x07L\x02\x02\u01DFK\x03\x02\x02\x02\u01E0\u01E4" +
		"\x05B\"\x02\u01E1\u01E4\x05F$\x02\u01E2\u01E4\x05D#\x02\u01E3\u01E0\x03" +
		"\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4" +
		"\u01E6\x03\x02\x02\x02\u01E5\u01E7\x05@!\x02\u01E6\u01E5\x03\x02\x02\x02" +
		"\u01E6\u01E7\x03\x02\x02\x02\u01E7M\x03\x02\x02\x02\u01E8\u01E9\x07m\x02" +
		"\x02\u01E9O\x03\x02\x02\x02\u01EA\u01EB\t\n\x02\x02\u01EBQ\x03\x02\x02" +
		"\x02\u01EC\u01ED\x07\x1F\x02\x02\u01ED\u01EE\x070\x02\x02\u01EE\u01EF" +
		"\x05V,\x02\u01EF\u01F0\x07\x10\x02\x02\u01F0\u01F3\x07o\x02\x02\u01F1" +
		"\u01F2\x07\x10\x02\x02\u01F2\u01F4\x05P)\x02\u01F3\u01F1\x03\x02\x02\x02" +
		"\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F6\x07" +
		"L\x02\x02\u01F6S\x03\x02\x02\x02\u01F7\u01F8\x07\x19\x02\x02\u01F8\u01F9" +
		"\x070\x02\x02\u01F9\u01FC\x05N(\x02\u01FA\u01FB\x07\x10\x02\x02\u01FB" +
		"\u01FD\x05P)\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02" +
		"\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF\x07L\x02\x02\u01FFU\x03\x02\x02" +
		"\x02\u0200\u0201\b,\x01\x02\u0201\u0272\x05L\'\x02\u0202\u0272\x05\xA4" +
		"S\x02\u0203\u0272\x05\x14\v\x02\u0204\u0272\x05\xAAV\x02\u0205\u0272\x05" +
		"T+\x02\u0206\u0207\x07U\x02\x02\u0207\u0208\x070\x02\x02\u0208\u0209\x05" +
		"V,\x02\u0209\u020A\x07\x10\x02\x02\u020A\u020B\x07.\x02\x02\u020B\u020C" +
		"\x05v<\x02\u020C\u020D\x07J\x02\x02\u020D\u020E\x07L\x02\x02\u020E\u0272" +
		"\x03\x02\x02\x02\u020F\u0210\x07\\\x02\x02\u0210\u0211\x070\x02\x02\u0211" +
		"\u0212\x05V,\x02\u0212\u0213\x07\x10\x02\x02\u0213\u0214\x07.\x02\x02" +
		"\u0214\u0215\x05z>\x02\u0215\u0216\x07J\x02\x02\u0216\u0217\x07L\x02\x02" +
		"\u0217\u0272\x03\x02\x02\x02\u0218\u0219\x07\"\x02\x02\u0219\u021A\x07" +
		"0\x02\x02\u021A\u021B\x05V,\x02\u021B\u021C\x07\x10\x02\x02\u021C\u021D" +
		"\x07.\x02\x02\u021D\u021E\x05z>\x02\u021E\u021F\x07J\x02\x02\u021F\u0220" +
		"\x07L\x02\x02\u0220\u0272\x03\x02\x02\x02\u0221\u0222\x07\"\x02\x02\u0222" +
		"\u0223\x070\x02\x02\u0223\u0224\x05V,\x02\u0224\u0225\x07\x10\x02\x02" +
		"\u0225\u0226\x07.\x02\x02\u0226\u0227\x05L\'\x02\u0227\u0228\x07J\x02" +
		"\x02\u0228\u0229\x07L\x02\x02\u0229\u0272\x03\x02\x02\x02\u022A\u0272" +
		"\x05\\/\x02\u022B\u0272\x05^0\x02\u022C\u0272\x05b2\x02\u022D\u0272\x05" +
		"f4\x02\u022E\u0272\x05h5\x02\u022F\u0272\x05d3\x02\u0230\u0272\x05j6\x02" +
		"\u0231\u0272\x05n8\x02\u0232\u0272\x05r:\x02\u0233\u0272\x05\x9AN\x02" +
		"\u0234\u0272\x05\x92J\x02\u0235\u0272\x05\x98M\x02\u0236\u0272\x05\x9C" +
		"O\x02\u0237\u0272\x05\xBE`\x02\u0238\u0239\x07M\x02\x02\u0239\u023A\x07" +
		"0\x02\x02\u023A\u023B\x05V,\x02\u023B\u023C\x07\x10\x02\x02\u023C\u023D" +
		"\x07.\x02\x02\u023D\u023E\x05z>\x02\u023E\u023F\x07J\x02\x02\u023F\u0240" +
		"\x07L\x02\x02\u0240\u0272\x03\x02\x02\x02\u0241\u0242\x07M\x02\x02\u0242" +
		"\u0243\x070\x02\x02\u0243\u0244\x05V,\x02\u0244\u0245\x07\x10\x02\x02" +
		"\u0245\u0246\x07.\x02\x02\u0246\u0247\x05L\'\x02\u0247\u0248\x07J\x02" +
		"\x02\u0248\u0249\x07L\x02\x02\u0249\u0272\x03\x02\x02\x02\u024A\u024B" +
		"\x070\x02\x02\u024B\u024C\x05V,\x02\u024C\u024D\x07L\x02\x02\u024D\u0272" +
		"\x03\x02\x02\x02\u024E\u024F\x07N\x02\x02\u024F\u0250\x070\x02\x02\u0250" +
		"\u0251\x05V,\x02\u0251\u0252\x07\x10\x02\x02\u0252\u0253\x05\xC4c\x02" +
		"\u0253\u0254\x07L\x02\x02\u0254\u0272\x03\x02\x02\x02\u0255\u0256\x07" +
		"O\x02\x02\u0256\u0257\x070\x02\x02\u0257\u0258\x05V,\x02\u0258\u0259\x07" +
		"\x10\x02\x02\u0259\u025A\x07/\x02\x02\u025A\u025B\x05|?\x02\u025B\u025C" +
		"\x07K\x02\x02\u025C\u025D\x07L\x02\x02\u025D\u0272\x03\x02\x02\x02\u025E" +
		"\u025F\x07P\x02\x02\u025F\u0260\x070\x02\x02\u0260\u0261\x05V,\x02\u0261" +
		"\u0262\x07\x10\x02\x02\u0262\u0263\x07/\x02\x02\u0263\u0264\x05|?\x02" +
		"\u0264\u0265\x07K\x02\x02\u0265\u0266\x07L\x02\x02\u0266\u0272\x03\x02" +
		"\x02\x02\u0267\u0268\x07Q\x02\x02\u0268\u0269\x070\x02\x02\u0269\u026A" +
		"\x05V,\x02\u026A\u026B\x07\x10\x02\x02\u026B\u026C\x07/\x02\x02\u026C" +
		"\u026D\x05|?\x02\u026D\u026E\x07K\x02\x02\u026E\u026F\x07L\x02\x02\u026F" +
		"\u0272\x03\x02\x02\x02\u0270\u0272\x05\x1A\x0E\x02\u0271\u0200\x03\x02" +
		"\x02\x02\u0271\u0202\x03\x02\x02\x02\u0271\u0203\x03\x02\x02\x02\u0271" +
		"\u0204\x03\x02\x02\x02\u0271\u0205\x03\x02\x02\x02\u0271\u0206\x03\x02" +
		"\x02\x02\u0271\u020F\x03\x02\x02\x02\u0271\u0218\x03\x02\x02\x02\u0271" +
		"\u0221\x03\x02\x02\x02\u0271\u022A\x03\x02\x02\x02\u0271\u022B\x03\x02" +
		"\x02\x02\u0271\u022C\x03\x02\x02\x02\u0271\u022D\x03\x02\x02\x02\u0271" +
		"\u022E\x03\x02\x02\x02\u0271\u022F\x03\x02\x02\x02\u0271\u0230\x03\x02" +
		"\x02\x02\u0271\u0231\x03\x02\x02\x02\u0271\u0232\x03\x02\x02\x02\u0271" +
		"\u0233\x03\x02\x02\x02\u0271\u0234\x03\x02\x02\x02\u0271\u0235\x03\x02" +
		"\x02\x02\u0271\u0236\x03\x02\x02\x02\u0271\u0237\x03\x02\x02\x02\u0271" +
		"\u0238\x03\x02\x02\x02\u0271\u0241\x03\x02\x02\x02\u0271\u024A\x03\x02" +
		"\x02\x02\u0271\u024E\x03\x02\x02\x02\u0271\u0255\x03\x02\x02\x02\u0271" +
		"\u025E\x03\x02\x02\x02\u0271\u0267\x03\x02\x02\x02\u0271\u0270\x03\x02" +
		"\x02\x02\u0272\u029C\x03\x02\x02\x02\u0273\u0274\f*\x02\x02\u0274\u0275" +
		"\x05\"\x12\x02\u0275\u0276\x05V,+\u0276\u029B\x03\x02\x02\x02\u0277\u0278" +
		"\f\'\x02\x02\u0278\u0279\x05X-\x02\u0279\u027A\x05V,(\u027A\u029B\x03" +
		"\x02\x02\x02\u027B\u027C\f&\x02\x02\u027C\u027D\x05$\x13\x02\u027D\u027E" +
		"\x05V,\'\u027E\u029B\x03\x02\x02\x02\u027F\u0280\f\x03\x02\x02\u0280\u0281" +
		"\x07B\x02\x02\u0281\u029B\x05V,\x04\u0282\u0283\f\"\x02\x02\u0283\u0284" +
		"\x07/\x02\x02\u0284\u0285\x05v<\x02\u0285\u0286\x07K\x02\x02\u0286\u029B" +
		"\x03\x02\x02\x02\u0287\u0288\f \x02\x02\u0288\u0289\x07/\x02\x02\u0289" +
		"\u028A\x05z>\x02\u028A\u028B\x07K\x02\x02\u028B\u029B\x03\x02\x02\x02" +
		"\u028C\u028D\f\x1F\x02\x02\u028D\u028E\x07/\x02\x02\u028E\u028F\x05\x14" +
		"\v\x02\u028F\u0290\x07K\x02\x02\u0290\u029B\x03\x02\x02\x02\u0291\u0292" +
		"\f\x13\x02\x02\u0292\u0293\x07\x1E\x02\x02\u0293\u029B\x05p9\x02\u0294" +
		"\u0295\f\x04\x02\x02\u0295\u0297\x07+\x02\x02\u0296\u0298\x07<\x02\x02" +
		"\u0297\u0296\x03\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u0299\x03" +
		"\x02\x02\x02\u0299\u029B\x07?\x02\x02\u029A\u0273\x03\x02\x02\x02\u029A" +
		"\u0277\x03\x02\x02\x02\u029A\u027B\x03\x02\x02\x02\u029A\u027F\x03\x02" +
		"\x02\x02\u029A\u0282\x03\x02\x02\x02\u029A\u0287\x03\x02\x02\x02\u029A" +
		"\u028C\x03\x02\x02\x02\u029A\u0291\x03\x02\x02\x02\u029A\u0294\x03\x02" +
		"\x02\x02\u029B\u029E\x03\x02\x02\x02\u029C\u029A\x03\x02\x02\x02\u029C" +
		"\u029D\x03\x02\x02\x02\u029DW\x03\x02\x02\x02\u029E\u029C\x03\x02\x02" +
		"\x02\u029F\u02A0\t\x06\x02\x02\u02A0Y\x03\x02\x02\x02\u02A1\u02A2\t\v" +
		"\x02\x02\u02A2[\x03\x02\x02\x02\u02A3\u02A5\x05Z.\x02\u02A4\u02A6\x07" +
		"0\x02\x02\u02A5\u02A4\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6" +
		"\u02A7\x03\x02\x02\x02\u02A7\u02A9\x05V,\x02\u02A8\u02AA\x07L\x02\x02" +
		"\u02A9\u02A8\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA]\x03\x02" +
		"\x02\x02\u02AB\u02AC\x058\x1D\x02\u02AC\u02AD\x070\x02\x02\u02AD\u02AE" +
		"\x05V,\x02\u02AE\u02AF\x07L\x02\x02\u02AF_\x03\x02\x02\x02\u02B0\u02B1" +
		"\t\f\x02\x02\u02B1a\x03\x02\x02\x02\u02B2\u02B3\x05`1\x02\u02B3\u02B4" +
		"\x070\x02\x02\u02B4\u02B5\x05V,\x02\u02B5\u02B6\x07L\x02\x02\u02B6c\x03" +
		"\x02\x02\x02\u02B7\u02B8\x07F\x02\x02\u02B8\u02B9\x070\x02\x02\u02B9\u02BA" +
		"\x05V,\x02\u02BA\u02BB\x07\x10\x02\x02\u02BB\u02BC\x050\x19\x02\u02BC" +
		"\u02BD\x07L\x02\x02\u02BDe\x03\x02\x02\x02\u02BE\u02BF\x079\x02\x02\u02BF" +
		"\u02C0\x070\x02\x02\u02C0\u02C1\x05V,\x02\u02C1\u02C2\x07\x10\x02\x02" +
		"\u02C2\u02C3\x05V,\x02\u02C3\u02C4\x07L\x02\x02\u02C4g\x03\x02\x02\x02" +
		"\u02C5\u02C6\x078\x02\x02\u02C6\u02C7\x070\x02\x02\u02C7\u02C8\x05V,\x02" +
		"\u02C8\u02C9\x07\x10\x02\x02\u02C9\u02CA\x05V,\x02\u02CA\u02CB\x07L\x02" +
		"\x02\u02CBi\x03\x02\x02\x02\u02CC\u02CD\x07<\x02\x02\u02CD\u02CE\x070" +
		"\x02\x02\u02CE\u02CF\x05V,\x02\u02CF\u02D0\x07L\x02\x02\u02D0\u02D9\x03" +
		"\x02\x02\x02\u02D1\u02D2\x07\f\x02\x02\u02D2\u02D3\x070\x02\x02\u02D3" +
		"\u02D4\x05V,\x02\u02D4\u02D5\x07\x10\x02\x02\u02D5\u02D6\x050\x19\x02" +
		"\u02D6\u02D7\x07L\x02\x02\u02D7\u02D9\x03\x02\x02\x02\u02D8\u02CC\x03" +
		"\x02\x02\x02\u02D8\u02D1\x03\x02\x02\x02\u02D9k\x03\x02\x02\x02\u02DA" +
		"\u02DE\x07n\x02\x02\u02DB\u02DD\x07n\x02\x02\u02DC\u02DB\x03\x02\x02\x02" +
		"\u02DD\u02E0\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03" +
		"\x02\x02\x02\u02DFm\x03\x02\x02\x02\u02E0\u02DE\x03\x02\x02\x02\u02E1" +
		"\u02E2\x070\x02\x02\u02E2\u02E3\x05l7\x02\u02E3\u02E4\x07L\x02\x02\u02E4" +
		"\u02E5\x05V,\x02\u02E5o\x03\x02\x02\x02\u02E6\u02E7\t\r\x02\x02\u02E7" +
		"q\x03\x02\x02\x02\u02E8\u02E9\x07.\x02\x02\u02E9\u02EA\x05p9\x02\u02EA" +
		"\u02EB\x07\x0F\x02\x02\u02EB\u02EC\x05V,\x02\u02EC\u02F4\x03\x02\x02\x02" +
		"\u02ED\u02EE\x07R\x02\x02\u02EE\u02EF\x05p9\x02\u02EF\u02F0\x07\x0F\x02" +
		"\x02\u02F0\u02F1\x05V,\x02\u02F1\u02F3\x03\x02\x02\x02\u02F2\u02ED\x03" +
		"\x02\x02\x02\u02F3\u02F6\x03\x02\x02\x02\u02F4\u02F2\x03\x02\x02\x02\u02F4" +
		"\u02F5\x03\x02\x02\x02\u02F5\u02F7\x03\x02\x02\x02\u02F6\u02F4\x03\x02" +
		"\x02\x02\u02F7\u02F8\x07J\x02\x02\u02F8s\x03\x02\x02\x02\u02F9\u02FA\x07" +
		".\x02\x02\u02FA\u02FB\x05p9\x02\u02FB\u02FC\x07\x0F\x02\x02\u02FC\u02FD" +
		"\x05V,\x02\u02FD\u0305\x03\x02\x02\x02\u02FE\u02FF\x07R\x02\x02\u02FF" +
		"\u0300\x05p9\x02\u0300\u0301\x07\x0F\x02\x02\u0301\u0302\x05V,\x02\u0302" +
		"\u0304\x03\x02\x02\x02\u0303\u02FE\x03\x02\x02\x02\u0304\u0307\x03\x02" +
		"\x02\x02\u0305\u0303\x03\x02\x02\x02\u0305\u0306\x03\x02\x02\x02\u0306" +
		"\u0308\x03\x02\x02\x02\u0307\u0305\x03\x02\x02\x02\u0308\u0309\x07J\x02" +
		"\x02\u0309u\x03\x02\x02\x02\u030A\u030F\x05x=\x02\u030B\u030C\x07\x10" +
		"\x02\x02\u030C\u030E\x05x=\x02\u030D\u030B\x03\x02\x02\x02\u030E\u0311" +
		"\x03\x02\x02\x02\u030F\u030D\x03\x02\x02\x02\u030F\u0310\x03\x02\x02\x02" +
		"\u0310w\x03\x02\x02\x02\u0311\u030F\x03\x02\x02\x02\u0312\u0315\x05\xC2" +
		"b\x02\u0313\u0314\x07\x0F\x02\x02\u0314\u0316\x05\xC0a\x02\u0315\u0313" +
		"\x03\x02\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316\u0317\x03\x02\x02\x02" +
		"\u0317\u0318\x070\x02\x02\u0318\u0319\x05V,\x02\u0319\u031A\x07L\x02\x02" +
		"\u031Ay\x03\x02\x02\x02\u031B\u0320\x05\x80A\x02\u031C\u031D\x07\x10\x02" +
		"\x02\u031D\u031F\x05\x80A\x02\u031E\u031C\x03\x02\x02\x02\u031F\u0322" +
		"\x03\x02\x02\x02\u0320\u031E\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02" +
		"\u0321{\x03\x02\x02\x02\u0322\u0320\x03\x02\x02\x02\u0323\u0328\x05~@" +
		"\x02\u0324\u0325\x07\x10\x02\x02\u0325\u0327\x05~@\x02\u0326\u0324\x03" +
		"\x02\x02\x02\u0327\u032A\x03\x02\x02\x02\u0328\u0326\x03\x02\x02\x02\u0328" +
		"\u0329\x03\x02\x02\x02\u0329}\x03\x02\x02\x02\u032A\u0328\x03\x02\x02" +
		"\x02\u032B\u032C\x05\xC2b\x02\u032C\u032F\x070\x02\x02\u032D\u0330\x05" +
		"\xC4c\x02\u032E\u0330\x07o\x02\x02\u032F\u032D\x03\x02\x02\x02\u032F\u032E" +
		"\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u0334\x07\x0F\x02\x02" +
		"\u0332\u0335\x05\xC4c\x02\u0333\u0335\x07o\x02\x02\u0334\u0332\x03\x02" +
		"\x02\x02\u0334\u0333\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336" +
		"\u0337\x07L\x02\x02\u0337\u033E\x03\x02\x02\x02\u0338\u0339\x05\xC2b\x02" +
		"\u0339\u033A\x070\x02\x02\u033A\u033B\x05\xC4c\x02\u033B\u033C\x07L\x02" +
		"\x02\u033C\u033E\x03\x02\x02\x02\u033D\u032B\x03\x02\x02\x02\u033D\u0338" +
		"\x03\x02\x02\x02\u033E\x7F\x03\x02\x02\x02\u033F\u0342\x05\xC2b\x02\u0340" +
		"\u0341\x07\x0F\x02\x02\u0341\u0343\x05\xC0a\x02\u0342\u0340\x03\x02\x02" +
		"\x02\u0342\u0343\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345" +
		"\x070\x02\x02\u0345\u0346\x05V,\x02\u0346\u0347\x07\x0F\x02\x02\u0347" +
		"\u0348\x05V,\x02\u0348\u0349\x07L\x02\x02\u0349\u0354\x03\x02\x02\x02" +
		"\u034A\u034D\x05\xC2b\x02\u034B\u034C\x07\x0F\x02\x02\u034C\u034E\x05" +
		"\xC0a\x02\u034D\u034B\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E" +
		"\u034F\x03\x02\x02\x02\u034F\u0350\x070\x02\x02\u0350\u0351\x05V,\x02" +
		"\u0351\u0352\x07L\x02\x02\u0352\u0354\x03\x02\x02\x02\u0353\u033F\x03" +
		"\x02\x02\x02\u0353\u034A\x03\x02\x02\x02\u0354\x81\x03\x02\x02\x02\u0355" +
		"\u0359\x05\xC6d\x02\u0356\u0358\x05\xC6d\x02\u0357\u0356\x03\x02\x02\x02" +
		"\u0358\u035B\x03\x02\x02\x02\u0359\u0357\x03\x02\x02\x02\u0359\u035A\x03" +
		"\x02\x02\x02\u035A\u0366\x03\x02\x02\x02\u035B\u0359\x03\x02\x02\x02\u035C" +
		"\u035D\x07\x10\x02\x02\u035D\u0361\x05\xC6d\x02\u035E\u0360\x05\xC6d\x02" +
		"\u035F\u035E\x03\x02\x02\x02\u0360\u0363\x03\x02\x02\x02\u0361\u035F\x03" +
		"\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362\u0365\x03\x02\x02\x02\u0363" +
		"\u0361\x03\x02\x02\x02\u0364\u035C\x03\x02\x02\x02\u0365\u0368\x03\x02" +
		"\x02\x02\u0366\u0364\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367" +
		"\x83\x03\x02\x02\x02\u0368\u0366\x03\x02\x02\x02\u0369\u036A\x070\x02" +
		"\x02\u036A\u036B\x05\x82B\x02\u036B\u0373\x07L\x02\x02\u036C\u036D\x07" +
		"\x10\x02\x02\u036D\u036E\x070\x02\x02\u036E\u036F\x05\x82B\x02\u036F\u0370" +
		"\x07L\x02\x02\u0370\u0372\x03\x02\x02\x02\u0371\u036C\x03\x02\x02\x02" +
		"\u0372\u0375\x03\x02\x02\x02\u0373\u0371\x03\x02\x02\x02\u0373\u0374\x03" +
		"\x02\x02\x02\u0374\x85\x03\x02\x02\x02\u0375\u0373\x03\x02\x02\x02\u0376" +
		"\u0377\x07f\x02\x02\u0377\u0378\x05\x84C\x02\u0378\x87\x03\x02\x02\x02" +
		"\u0379\u037A\x07e\x02\x02\u037A\u037B\x070\x02\x02\u037B\u037C\x05\x84" +
		"C\x02\u037C\u037D\x07L\x02\x02\u037D\x89\x03\x02\x02\x02\u037E\u037F\x07" +
		"g\x02\x02\u037F\u0380\x070\x02\x02\u0380\u0381\x070\x02\x02\u0381\u0382" +
		"\x05\x84C\x02\u0382\u038A\x07L\x02\x02\u0383\u0384\x07\x10\x02\x02\u0384" +
		"\u0385\x070\x02\x02\u0385\u0386\x05\x84C\x02\u0386\u0387\x07L\x02\x02" +
		"\u0387\u0389\x03\x02\x02\x02\u0388\u0383\x03\x02\x02\x02\u0389\u038C\x03" +
		"\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B" +
		"\u038D\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02\u038D\u038E\x07L\x02" +
		"\x02\u038E\x8B\x03\x02\x02\x02\u038F\u0393\x05\x88E\x02\u0390\u0393\x05" +
		"\x86D\x02\u0391\u0393\x05\x8AF\x02\u0392\u038F\x03\x02\x02\x02\u0392\u0390" +
		"\x03\x02\x02\x02\u0392\u0391\x03\x02\x02\x02\u0393\x8D\x03\x02\x02\x02" +
		"\u0394\u0395\x07n\x02\x02\u0395\x8F\x03\x02\x02\x02\u0396\u0397\x07n\x02" +
		"\x02\u0397\x91\x03\x02\x02\x02\u0398\u0399\x07\x0E\x02\x02\u0399\u039A" +
		"\x070\x02\x02\u039A\u039B\x05V,\x02\u039B\u039C\x07\x10\x02\x02\u039C" +
		"\u039D\x07\x15\x02\x02\u039D\u039E\x070\x02\x02\u039E\u039F\x07h\x02\x02" +
		"\u039F\u03A0\x070\x02\x02\u03A0\u03A1\x05\x8EH\x02\u03A1\u03A2\x07\x10" +
		"\x02\x02\u03A2\u03A3\x05\x90I\x02\u03A3\u03A4\x07L\x02\x02\u03A4\u03A5" +
		"\x07\x10\x02\x02\u03A5\u03A6\x05\x8CG\x02\u03A6\u03A9\x07L\x02\x02\u03A7" +
		"\u03A8\x07\x10\x02\x02\u03A8\u03AA\x05\xC0a\x02\u03A9\u03A7\x03\x02\x02" +
		"\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AC" +
		"\x07L\x02\x02\u03AC\x93\x03\x02\x02\x02\u03AD\u03AE\x07n\x02\x02\u03AE" +
		"\x95\x03\x02\x02\x02\u03AF\u03B0\x07n\x02\x02\u03B0\x97\x03\x02\x02\x02" +
		"\u03B1\u03B2\x07\x0E\x02\x02\u03B2\u03B3\x070\x02\x02\u03B3\u03B4\x05" +
		"V,\x02\u03B4\u03B5\x07\x10\x02\x02\u03B5\u03B6\x07\x16\x02\x02\u03B6\u03B7" +
		"\x070\x02\x02\u03B7\u03B8\x07h\x02\x02\u03B8\u03B9\x070\x02\x02\u03B9" +
		"\u03BA\x05\x94K\x02\u03BA\u03BB\x07\x10\x02\x02\u03BB\u03BC\x05\x96L\x02" +
		"\u03BC\u03BD\x07L\x02\x02\u03BD\u03BE\x07\x10\x02\x02\u03BE\u03BF\x05" +
		"\x86D\x02\u03BF\u03C0\x07\x10\x02\x02\u03C0\u03C3\x05\x8CG\x02\u03C1\u03C2" +
		"\x07\x10\x02\x02\u03C2\u03C4\x07\x1B\x02\x02\u03C3\u03C1\x03\x02\x02\x02" +
		"\u03C3\u03C4\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C8\x07" +
		"L\x02\x02\u03C6\u03C7\x07\x10\x02\x02\u03C7\u03C9\x05\xC0a\x02\u03C8\u03C6" +
		"\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02" +
		"\u03CA\u03CB\x07L\x02\x02\u03CB\x99\x03\x02\x02\x02\u03CC\u03CD\x07\x0E" +
		"\x02\x02\u03CD\u03CE\x070\x02\x02\u03CE\u03CF\x05V,\x02\u03CF\u03D0\x07" +
		"\x10\x02\x02\u03D0\u03D3\x05\x8CG\x02\u03D1\u03D2\x07\x10\x02\x02\u03D2" +
		"\u03D4\x05\xC0a\x02\u03D3\u03D1\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02" +
		"\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03D7\x07L\x02\x02\u03D6\u03D8" +
		"\x07i\x02\x02\u03D7\u03D6\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02" +
		"\u03D8\x9B\x03\x02\x02\x02\u03D9\u03DA\x07d\x02\x02\u03DA\u03DB\x070\x02" +
		"\x02\u03DB\u03DC\x05V,\x02\u03DC\u03DD\x07\x10\x02\x02\u03DD\u03E4\x05" +
		"\x9EP\x02\u03DE\u03DF\x07\x10\x02\x02\u03DF\u03E1\x07.\x02\x02\u03E0\u03E2" +
		"\x05\xA2R\x02\u03E1\u03E0\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02" +
		"\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E5\x07J\x02\x02\u03E4\u03DE\x03" +
		"\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6" +
		"\u03E7\x07L\x02\x02\u03E7\x9D\x03\x02\x02\x02\u03E8\u03E9\x07.\x02\x02" +
		"\u03E9\u03EE\x05\xA0Q\x02\u03EA\u03EB\x07\x10\x02\x02\u03EB\u03ED\x05" +
		"\xA0Q\x02\u03EC\u03EA\x03\x02\x02\x02\u03ED\u03F0\x03\x02\x02\x02\u03EE" +
		"\u03EC\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F1\x03\x02" +
		"\x02\x02\u03F0\u03EE\x03\x02\x02\x02\u03F1\u03F2\x07J\x02\x02\u03F2\x9F" +
		"\x03\x02\x02\x02\u03F3\u03F4\x05\xC2b\x02\u03F4\u03F5\x07\x0F\x02\x02" +
		"\u03F5\u03F6\x05\xC0a\x02\u03F6\xA1\x03\x02\x02\x02\u03F7\u03F8\x07n\x02" +
		"\x02\u03F8\xA3\x03\x02\x02\x02\u03F9\u03FA\x07\x17\x02\x02\u03FA\u03FB" +
		"\x07n\x02\x02\u03FB\u03FC\x07A\x02\x02\u03FC\u0401\x05\xA6T\x02\u03FD" +
		"\u03FE\x07\x10\x02\x02\u03FE\u0400\x05\xA6T\x02\u03FF\u03FD\x03\x02\x02" +
		"\x02\u0400\u0403\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0401\u0402" +
		"\x03\x02\x02\x02\u0402\u0404\x03\x02\x02\x02\u0403\u0401\x03\x02\x02\x02" +
		"\u0404\u0405\x07a\x02\x02\u0405\u0406\x05V,\x02\u0406\xA5\x03\x02\x02" +
		"\x02\u0407\u0408\x05\x14\v\x02\u0408\u0409\x05\xC2b\x02\u0409\u040A\x07" +
		"0\x02\x02\u040A\u040B\x05L\'\x02\u040B\u040C\x07L\x02\x02\u040C\u0411" +
		"\x03\x02\x02\x02\u040D\u040E\x05\x14\v\x02\u040E\u040F\x05\x80A\x02\u040F" +
		"\u0411\x03\x02\x02\x02\u0410\u0407\x03\x02\x02\x02\u0410\u040D\x03\x02" +
		"\x02\x02\u0411\xA7\x03\x02\x02\x02\u0412\u0413\x05\x1A\x0E\x02\u0413\u0414" +
		"\x07\x0F\x02\x02\u0414\u0415\x05\x1A\x0E\x02\u0415\xA9\x03\x02\x02\x02" +
		"\u0416\u0417\x07\x17\x02\x02\u0417\u0418\x07n\x02\x02\u0418\u0419\x07" +
		"A\x02\x02\u0419\u041E\x05\xA6T\x02\u041A\u041B\x07\x10\x02\x02\u041B\u041D" +
		"\x05\xA6T\x02\u041C\u041A\x03\x02\x02\x02\u041D\u0420\x03\x02\x02\x02" +
		"\u041E\u041C\x03\x02\x02\x02\u041E\u041F\x03\x02\x02\x02\u041F\u0421\x03" +
		"\x02\x02\x02\u0420\u041E\x03\x02\x02\x02\u0421\u0422\x07`\x02\x02\u0422" +
		"\u0423\x073\x02\x02\u0423\u0424\x076\x02\x02\u0424\u0429\x05\xC6d\x02" +
		"\u0425\u0426\x07R\x02\x02\u0426\u0428\x05\xC6d\x02\u0427\u0425\x03\x02" +
		"\x02\x02\u0428\u042B\x03\x02\x02\x02\u0429\u0427\x03\x02\x02\x02\u0429" +
		"\u042A\x03\x02\x02\x02\u042A\u042C\x03\x02\x02\x02\u042B\u0429\x03\x02" +
		"\x02\x02\u042C\u042D\x07$\x02\x02\u042D\xAB\x03\x02\x02\x02\u042E\u042F" +
		"\x05\x80A\x02\u042F\xAD\x03\x02\x02\x02\u0430\u0433\x05\xB8]\x02\u0431" +
		"\u0433\x05\xBC_\x02\u0432\u0430\x03\x02\x02\x02\u0432\u0431\x03\x02\x02" +
		"\x02\u0433\xAF\x03\x02\x02\x02\u0434\u0435\t\x0E\x02\x02\u0435\xB1\x03" +
		"\x02\x02\x02\u0436\u0437\t\x0F\x02\x02\u0437\xB3\x03\x02\x02\x02\u0438" +
		"\u0439\x05\xB0Y\x02\u0439\u043A\x070\x02\x02\u043A\u043B\x05V,\x02\u043B" +
		"\u043C\x07L\x02\x02\u043C\xB5\x03\x02\x02\x02\u043D\u043E\x05\xB2Z\x02" +
		"\u043E\u043F\x070\x02\x02\u043F\u0440\x05V,\x02\u0440\u0441\x07L\x02\x02" +
		"\u0441\xB7\x03\x02\x02\x02\u0442\u0445\x05\xB4[\x02\u0443\u0445\x05\xB6" +
		"\\\x02\u0444\u0442\x03\x02\x02\x02\u0444\u0443\x03\x02\x02\x02\u0445\xB9" +
		"\x03\x02\x02\x02\u0446\u0447\t\x10\x02\x02\u0447\xBB\x03\x02\x02\x02\u0448" +
		"\u0449\x07\x11\x02\x02\u0449\u044A\x05\xBA^\x02\u044A\u044B\x07A\x02\x02" +
		"\u044B\u0450\x05\xA6T\x02\u044C\u044D\x07\x10\x02\x02\u044D\u044F\x05" +
		"\xA6T\x02\u044E\u044C\x03\x02\x02\x02\u044F\u0452\x03\x02\x02\x02\u0450" +
		"\u044E\x03\x02\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451\u0454\x03\x02" +
		"\x02\x02\u0452\u0450\x03\x02\x02\x02\u0453\u0455\x05\x10\t\x02\u0454\u0453" +
		"\x03\x02\x02\x02\u0454\u0455\x03\x02\x02\x02\u0455\u0456\x03\x02\x02\x02" +
		"\u0456\u0457\x07^\x02\x02\u0457\u0458\x05V,\x02\u0458\xBD\x03\x02\x02" +
		"\x02\u0459\u045A\x07Y\x02\x02\u045A\u045E\x07\r\x02\x02\u045B\u045D\x07" +
		"0\x02\x02\u045C\u045B\x03\x02\x02\x02\u045D\u0460\x03\x02\x02\x02\u045E" +
		"\u045C\x03\x02\x02\x02\u045E\u045F\x03\x02\x02\x02\u045F\u0461\x03\x02" +
		"\x02\x02\u0460\u045E\x03\x02\x02\x02\u0461\u0465\x05.\x18\x02\u0462\u0464" +
		"\x07L\x02\x02\u0463\u0462\x03\x02\x02\x02\u0464\u0467\x03\x02\x02\x02" +
		"\u0465\u0463\x03\x02\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466\u0468\x03" +
		"\x02\x02\x02\u0467\u0465\x03\x02\x02\x02\u0468\u0469\x07I\x02\x02\u0469" +
		"\u047D\x05t;\x02\u046A\u046E\x07\r\x02\x02\u046B\u046D\x070\x02\x02\u046C" +
		"\u046B\x03\x02\x02\x02\u046D\u0470\x03\x02\x02\x02\u046E\u046C\x03\x02" +
		"\x02\x02\u046E\u046F\x03\x02\x02\x02\u046F\u0471\x03\x02\x02\x02\u0470" +
		"\u046E\x03\x02\x02\x02\u0471\u0475\x05.\x18\x02\u0472\u0474\x07L\x02\x02" +
		"\u0473\u0472\x03\x02\x02\x02\u0474\u0477\x03\x02\x02\x02\u0475\u0473\x03" +
		"\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476\u0478\x03\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u0477\u0475\x03\x02\x02\x02\u0478\u0479\x07I\x02\x02\u0479\u047A" +
		"\x05t;\x02\u047A\u047C\x03\x02\x02\x02\u047B\u046A\x03\x02\x02\x02\u047C" +
		"\u047F\x03\x02\x02\x02\u047D\u047B\x03\x02\x02\x02\u047D\u047E\x03\x02" +
		"\x02\x02\u047E\u0480\x03\x02\x02\x02\u047F\u047D\x03\x02\x02\x02\u0480" +
		"\u0481\x07\x1A\x02\x02\u0481\u0482\x07I\x02\x02\u0482\u0483\x05t;\x02" +
		"\u0483\u04B0\x03\x02\x02\x02\u0484\u0485\x07Y\x02\x02\u0485\u0489\x07" +
		"\r\x02\x02\u0486\u0488\x070\x02\x02\u0487\u0486\x03\x02\x02\x02\u0488" +
		"\u048B\x03\x02\x02\x02\u0489\u0487\x03\x02\x02\x02\u0489\u048A\x03\x02" +
		"\x02\x02\u048A\u048C\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048C" +
		"\u0490\x05.\x18\x02\u048D\u048F\x07L\x02\x02\u048E\u048D\x03\x02\x02\x02" +
		"\u048F\u0492\x03\x02\x02\x02\u0490\u048E\x03\x02\x02\x02\u0490\u0491\x03" +
		"\x02\x02\x02\u0491\u0493\x03\x02\x02\x02\u0492\u0490\x03\x02\x02\x02\u0493" +
		"\u0494\x07I\x02\x02\u0494\u04A8\x05\x18\r\x02\u0495\u0499\x07\r\x02\x02" +
		"\u0496\u0498\x070\x02\x02\u0497\u0496\x03\x02\x02\x02\u0498\u049B\x03" +
		"\x02\x02\x02\u0499\u0497\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A" +
		"\u049C\x03\x02\x02\x02\u049B\u0499\x03\x02\x02\x02\u049C\u04A0\x05.\x18" +
		"\x02\u049D\u049F\x07L\x02\x02\u049E\u049D\x03\x02\x02\x02\u049F\u04A2" +
		"\x03\x02\x02\x02\u04A0\u049E\x03\x02\x02\x02\u04A0\u04A1\x03\x02\x02\x02" +
		"\u04A1\u04A3\x03\x02\x02\x02\u04A2\u04A0\x03\x02\x02\x02\u04A3\u04A4\x07" +
		"I\x02\x02\u04A4\u04A5\x05\x18\r\x02\u04A5\u04A7\x03\x02\x02\x02\u04A6" +
		"\u0495\x03\x02\x02\x02\u04A7\u04AA\x03\x02\x02\x02\u04A8\u04A6\x03\x02" +
		"\x02\x02\u04A8\u04A9\x03\x02\x02\x02\u04A9\u04AB\x03\x02\x02\x02\u04AA" +
		"\u04A8\x03\x02\x02\x02\u04AB\u04AC\x07\x1A\x02\x02\u04AC\u04AD\x07I\x02" +
		"\x02\u04AD\u04AE\x05\x18\r\x02\u04AE\u04B0\x03\x02\x02\x02\u04AF\u0459" +
		"\x03\x02\x02\x02\u04AF\u0484\x03\x02\x02\x02\u04B0\xBF\x03\x02\x02\x02" +
		"\u04B1\u04B2\x07o\x02\x02\u04B2\xC1\x03\x02\x02\x02\u04B3\u04B4\x07n\x02" +
		"\x02\u04B4\xC3\x03\x02\x02\x02\u04B5\u04B7\x07:\x02\x02\u04B6\u04B5\x03" +
		"\x02\x02\x02\u04B6\u04B7\x03\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8" +
		"\u04C2\x07j\x02\x02\u04B9\u04BB\x07:\x02\x02\u04BA\u04B9\x03\x02\x02\x02" +
		"\u04BA\u04BB\x03\x02\x02\x02\u04BB\u04BC\x03\x02\x02\x02\u04BC\u04C2\x07" +
		"k\x02\x02\u04BD\u04BF\x07:\x02\x02\u04BE\u04BD\x03\x02\x02\x02\u04BE\u04BF" +
		"\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02\u04C0\u04C2\x07l\x02\x02" +
		"\u04C1\u04B6\x03\x02\x02\x02\u04C1\u04BA\x03\x02\x02\x02\u04C1\u04BE\x03" +
		"\x02\x02\x02\u04C2\xC5\x03\x02\x02\x02\u04C3\u04CC\x07o\x02\x02\u04C4" +
		"\u04CC\x07]\x02\x02\u04C5\u04CC\x07#\x02\x02\u04C6\u04C8\x07:\x02\x02" +
		"\u04C7\u04C6\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04C9\x03" +
		"\x02\x02\x02\u04C9\u04CC\x05\xC4c\x02\u04CA\u04CC\x052\x1A\x02\u04CB\u04C3" +
		"\x03\x02\x02\x02\u04CB\u04C4\x03\x02\x02\x02\u04CB\u04C5\x03\x02\x02\x02" +
		"\u04CB\u04C7\x03\x02\x02\x02\u04CB\u04CA\x03\x02\x02\x02\u04CC\xC7\x03" +
		"\x02\x02\x02`\xCA\xCD\xD7\xDC\xE1\xE8\xEC\xF4\u0104\u0108\u010C\u0110" +
		"\u0114\u011C\u011F\u0123\u0129\u0130\u0134\u013F\u0147\u015B\u0162\u0169" +
		"\u0170\u0179\u0181\u0193\u019B\u01B1\u01C6\u01E3\u01E6\u01F3\u01FC\u0271" +
		"\u0297\u029A\u029C\u02A5\u02A9\u02D8\u02DE\u02F4\u0305\u030F\u0315\u0320" +
		"\u0328\u032F\u0334\u033D\u0342\u034D\u0353\u0359\u0361\u0366\u0373\u038A" +
		"\u0392\u03A9\u03C3\u03C8\u03D3\u03D7\u03E1\u03E4\u03EE\u0401\u0410\u041E" +
		"\u0429\u0432\u0444\u0450\u0454\u045E\u0465\u046E\u0475\u047D\u0489\u0490" +
		"\u0499\u04A0\u04A8\u04AF\u04B6\u04BA\u04BE\u04C1\u04C7\u04CB";
	public static readonly _serializedATN: string = Utils.join(
		[
			wcpsParser._serializedATNSegment0,
			wcpsParser._serializedATNSegment1,
			wcpsParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!wcpsParser.__ATN) {
			wcpsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(wcpsParser._serializedATN));
		}

		return wcpsParser.__ATN;
	}

}

export class WcpsQueryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_wcpsQuery; }
	public copyFrom(ctx: WcpsQueryContext): void {
		super.copyFrom(ctx);
	}
}
export class WcpsQueryLabelContext extends WcpsQueryContext {
	public forClauseList(): ForClauseListContext | undefined {
		return this.tryGetRuleContext(0, ForClauseListContext);
	}
	public returnClause(): ReturnClauseContext | undefined {
		return this.tryGetRuleContext(0, ReturnClauseContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public letClauseList(): LetClauseListContext | undefined {
		return this.tryGetRuleContext(0, LetClauseListContext);
	}
	constructor(ctx: WcpsQueryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ForClauseListContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_forClauseList; }
	public copyFrom(ctx: ForClauseListContext): void {
		super.copyFrom(ctx);
	}
}
export class ForClauseListLabelContext extends ForClauseListContext {
	public FOR(): TerminalNode { return this.getToken(wcpsParser.FOR, 0); }
	public forClause(): ForClauseContext[];
	public forClause(i: number): ForClauseContext;
	public forClause(i?: number): ForClauseContext | ForClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ForClauseContext);
		} else {
			return this.getRuleContext(i, ForClauseContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	constructor(ctx: ForClauseListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class CoverageIdForClauseContext extends ParserRuleContext {
	public COVERAGE_VARIABLE_NAME(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0); }
	public decodeCoverageExpression(): DecodeCoverageExpressionContext | undefined {
		return this.tryGetRuleContext(0, DecodeCoverageExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_coverageIdForClause; }
}


export class ForClauseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_forClause; }
	public copyFrom(ctx: ForClauseContext): void {
		super.copyFrom(ctx);
	}
}
export class ForClauseLabelContext extends ForClauseContext {
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getRuleContext(0, CoverageVariableNameContext);
	}
	public IN(): TerminalNode { return this.getToken(wcpsParser.IN, 0); }
	public coverageIdForClause(): CoverageIdForClauseContext[];
	public coverageIdForClause(i: number): CoverageIdForClauseContext;
	public coverageIdForClause(i?: number): CoverageIdForClauseContext | CoverageIdForClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageIdForClauseContext);
		} else {
			return this.getRuleContext(i, CoverageIdForClauseContext);
		}
	}
	public LEFT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	public RIGHT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: ForClauseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class LetClauseListContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_letClauseList; }
	public copyFrom(ctx: LetClauseListContext): void {
		super.copyFrom(ctx);
	}
}
export class LetClauseListLabelContext extends LetClauseListContext {
	public LET(): TerminalNode { return this.getToken(wcpsParser.LET, 0); }
	public letClause(): LetClauseContext[];
	public letClause(i: number): LetClauseContext;
	public letClause(i?: number): LetClauseContext | LetClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LetClauseContext);
		} else {
			return this.getRuleContext(i, LetClauseContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	constructor(ctx: LetClauseListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class LetClauseDimensionIntervalListContext extends ParserRuleContext {
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getRuleContext(0, CoverageVariableNameContext);
	}
	public COLON(): TerminalNode { return this.getToken(wcpsParser.COLON, 0); }
	public EQUAL(): TerminalNode { return this.getToken(wcpsParser.EQUAL, 0); }
	public LEFT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACKET, 0); }
	public dimensionIntervalList(): DimensionIntervalListContext {
		return this.getRuleContext(0, DimensionIntervalListContext);
	}
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_letClauseDimensionIntervalList; }
}


export class LetClauseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_letClause; }
	public copyFrom(ctx: LetClauseContext): void {
		super.copyFrom(ctx);
	}
}
export class LetClauseDimensionIntervalListLabelContext extends LetClauseContext {
	public letClauseDimensionIntervalList(): LetClauseDimensionIntervalListContext {
		return this.getRuleContext(0, LetClauseDimensionIntervalListContext);
	}
	constructor(ctx: LetClauseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LetClauseCoverageExpressionLabelContext extends LetClauseContext {
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getRuleContext(0, CoverageVariableNameContext);
	}
	public COLON(): TerminalNode { return this.getToken(wcpsParser.COLON, 0); }
	public EQUAL(): TerminalNode { return this.getToken(wcpsParser.EQUAL, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	constructor(ctx: LetClauseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class WhereClauseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_whereClause; }
	public copyFrom(ctx: WhereClauseContext): void {
		super.copyFrom(ctx);
	}
}
export class WhereClauseLabelContext extends WhereClauseContext {
	public WHERE(): TerminalNode { return this.getToken(wcpsParser.WHERE, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: WhereClauseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ReturnClauseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_returnClause; }
	public copyFrom(ctx: ReturnClauseContext): void {
		super.copyFrom(ctx);
	}
}
export class ReturnClauseLabelContext extends ReturnClauseContext {
	public RETURN(): TerminalNode { return this.getToken(wcpsParser.RETURN, 0); }
	public processingExpression(): ProcessingExpressionContext {
		return this.getRuleContext(0, ProcessingExpressionContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: ReturnClauseContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class CoverageVariableNameContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_coverageVariableName; }
	public copyFrom(ctx: CoverageVariableNameContext): void {
		super.copyFrom(ctx);
	}
}
export class CoverageVariableNameLabelContext extends CoverageVariableNameContext {
	public COVERAGE_VARIABLE_NAME(): TerminalNode { return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0); }
	constructor(ctx: CoverageVariableNameContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ProcessingExpressionContext extends ParserRuleContext {
	public getComponentExpression(): GetComponentExpressionContext | undefined {
		return this.tryGetRuleContext(0, GetComponentExpressionContext);
	}
	public scalarExpression(): ScalarExpressionContext | undefined {
		return this.tryGetRuleContext(0, ScalarExpressionContext);
	}
	public encodedCoverageExpression(): EncodedCoverageExpressionContext | undefined {
		return this.tryGetRuleContext(0, EncodedCoverageExpressionContext);
	}
	public scalarValueCoverageExpression(): ScalarValueCoverageExpressionContext | undefined {
		return this.tryGetRuleContext(0, ScalarValueCoverageExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_processingExpression; }
}


export class ScalarValueCoverageExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_scalarValueCoverageExpression; }
	public copyFrom(ctx: ScalarValueCoverageExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ScalarValueCoverageExpressionLabelContext extends ScalarValueCoverageExpressionContext {
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: ScalarValueCoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ScalarExpressionContext extends ParserRuleContext {
	public booleanScalarExpression(): BooleanScalarExpressionContext | undefined {
		return this.tryGetRuleContext(0, BooleanScalarExpressionContext);
	}
	public numericalScalarExpression(): NumericalScalarExpressionContext | undefined {
		return this.tryGetRuleContext(0, NumericalScalarExpressionContext);
	}
	public stringScalarExpression(): StringScalarExpressionContext | undefined {
		return this.tryGetRuleContext(0, StringScalarExpressionContext);
	}
	public starExpression(): StarExpressionContext | undefined {
		return this.tryGetRuleContext(0, StarExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_scalarExpression; }
}


export class BooleanScalarExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_booleanScalarExpression; }
	public copyFrom(ctx: BooleanScalarExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class BooleanReduceExpressionContext extends BooleanScalarExpressionContext {
	public reduceBooleanExpression(): ReduceBooleanExpressionContext {
		return this.getRuleContext(0, ReduceBooleanExpressionContext);
	}
	constructor(ctx: BooleanScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BooleanConstantLabelContext extends BooleanScalarExpressionContext {
	public booleanConstant(): BooleanConstantContext {
		return this.getRuleContext(0, BooleanConstantContext);
	}
	constructor(ctx: BooleanScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BooleanUnaryScalarLabelContext extends BooleanScalarExpressionContext {
	public booleanUnaryOperator(): BooleanUnaryOperatorContext {
		return this.getRuleContext(0, BooleanUnaryOperatorContext);
	}
	public booleanScalarExpression(): BooleanScalarExpressionContext {
		return this.getRuleContext(0, BooleanScalarExpressionContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: BooleanScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BooleanBinaryScalarLabelContext extends BooleanScalarExpressionContext {
	public booleanScalarExpression(): BooleanScalarExpressionContext[];
	public booleanScalarExpression(i: number): BooleanScalarExpressionContext;
	public booleanScalarExpression(i?: number): BooleanScalarExpressionContext | BooleanScalarExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanScalarExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanScalarExpressionContext);
		}
	}
	public booleanOperator(): BooleanOperatorContext {
		return this.getRuleContext(0, BooleanOperatorContext);
	}
	constructor(ctx: BooleanScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BooleanNumericalComparisonScalarLabelContext extends BooleanScalarExpressionContext {
	public numericalScalarExpression(): NumericalScalarExpressionContext[];
	public numericalScalarExpression(i: number): NumericalScalarExpressionContext;
	public numericalScalarExpression(i?: number): NumericalScalarExpressionContext | NumericalScalarExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericalScalarExpressionContext);
		} else {
			return this.getRuleContext(i, NumericalScalarExpressionContext);
		}
	}
	public numericalComparissonOperator(): NumericalComparissonOperatorContext {
		return this.getRuleContext(0, NumericalComparissonOperatorContext);
	}
	constructor(ctx: BooleanScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BooleanStringComparisonScalarContext extends BooleanScalarExpressionContext {
	public stringScalarExpression(): StringScalarExpressionContext[];
	public stringScalarExpression(i: number): StringScalarExpressionContext;
	public stringScalarExpression(i?: number): StringScalarExpressionContext | StringScalarExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringScalarExpressionContext);
		} else {
			return this.getRuleContext(i, StringScalarExpressionContext);
		}
	}
	public stringOperator(): StringOperatorContext {
		return this.getRuleContext(0, StringOperatorContext);
	}
	constructor(ctx: BooleanScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class BooleanUnaryOperatorContext extends ParserRuleContext {
	public NOT(): TerminalNode { return this.getToken(wcpsParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_booleanUnaryOperator; }
}


export class BooleanConstantContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_booleanConstant; }
}


export class BooleanOperatorContext extends ParserRuleContext {
	public AND(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.AND, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.XOR, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_booleanOperator; }
}


export class NumericalComparissonOperatorContext extends ParserRuleContext {
	public GREATER_THAN(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.GREATER_THAN, 0); }
	public GREATER_OR_EQUAL_THAN(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.GREATER_OR_EQUAL_THAN, 0); }
	public LOWER_THAN(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.LOWER_THAN, 0); }
	public LOWER_OR_EQUAL_THAN(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.LOWER_OR_EQUAL_THAN, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.EQUAL, 0); }
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.NOT_EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_numericalComparissonOperator; }
}


export class StringOperatorContext extends ParserRuleContext {
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.EQUAL, 0); }
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.NOT_EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_stringOperator; }
}


export class StringScalarExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_stringScalarExpression; }
	public copyFrom(ctx: StringScalarExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class StringScalarExpressionLabelContext extends StringScalarExpressionContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(wcpsParser.STRING_LITERAL, 0); }
	constructor(ctx: StringScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class StarExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_starExpression; }
	public copyFrom(ctx: StarExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class StarExpressionLabelContext extends StarExpressionContext {
	public MULTIPLICATION(): TerminalNode { return this.getToken(wcpsParser.MULTIPLICATION, 0); }
	constructor(ctx: StarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class BooleanSwitchCaseCoverageExpressionContext extends ParserRuleContext {
	public coverageExpression(): CoverageExpressionContext[];
	public coverageExpression(i: number): CoverageExpressionContext;
	public coverageExpression(i?: number): CoverageExpressionContext | CoverageExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageExpressionContext);
		} else {
			return this.getRuleContext(i, CoverageExpressionContext);
		}
	}
	public numericalComparissonOperator(): NumericalComparissonOperatorContext {
		return this.getRuleContext(0, NumericalComparissonOperatorContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode[];
	public LEFT_PARENTHESIS(i: number): TerminalNode;
	public LEFT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.LEFT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.LEFT_PARENTHESIS, i);
		}
	}
	public RIGHT_PARENTHESIS(): TerminalNode[];
	public RIGHT_PARENTHESIS(i: number): TerminalNode;
	public RIGHT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.RIGHT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.RIGHT_PARENTHESIS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_booleanSwitchCaseCoverageExpression; }
}


export class BooleanSwitchCaseCombinedExpressionContext extends ParserRuleContext {
	public booleanSwitchCaseCoverageExpression(): BooleanSwitchCaseCoverageExpressionContext[];
	public booleanSwitchCaseCoverageExpression(i: number): BooleanSwitchCaseCoverageExpressionContext;
	public booleanSwitchCaseCoverageExpression(i?: number): BooleanSwitchCaseCoverageExpressionContext | BooleanSwitchCaseCoverageExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanSwitchCaseCoverageExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanSwitchCaseCoverageExpressionContext);
		}
	}
	public booleanOperator(): BooleanOperatorContext | undefined {
		return this.tryGetRuleContext(0, BooleanOperatorContext);
	}
	public booleanSwitchCaseCombinedExpression(): BooleanSwitchCaseCombinedExpressionContext[];
	public booleanSwitchCaseCombinedExpression(i: number): BooleanSwitchCaseCombinedExpressionContext;
	public booleanSwitchCaseCombinedExpression(i?: number): BooleanSwitchCaseCombinedExpressionContext | BooleanSwitchCaseCombinedExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanSwitchCaseCombinedExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanSwitchCaseCombinedExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_booleanSwitchCaseCombinedExpression; }
}


export class NumericalScalarExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_numericalScalarExpression; }
	public copyFrom(ctx: NumericalScalarExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NumericalUnaryScalarExpressionLabelContext extends NumericalScalarExpressionContext {
	public numericalUnaryOperation(): NumericalUnaryOperationContext {
		return this.getRuleContext(0, NumericalUnaryOperationContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public numericalScalarExpression(): NumericalScalarExpressionContext {
		return this.getRuleContext(0, NumericalScalarExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: NumericalScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NumericalTrigonometricScalarExpressionLabelContext extends NumericalScalarExpressionContext {
	public trigonometricOperator(): TrigonometricOperatorContext {
		return this.getRuleContext(0, TrigonometricOperatorContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public numericalScalarExpression(): NumericalScalarExpressionContext {
		return this.getRuleContext(0, NumericalScalarExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: NumericalScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NumericalBinaryScalarExpressionLabelContext extends NumericalScalarExpressionContext {
	public numericalScalarExpression(): NumericalScalarExpressionContext[];
	public numericalScalarExpression(i: number): NumericalScalarExpressionContext;
	public numericalScalarExpression(i?: number): NumericalScalarExpressionContext | NumericalScalarExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericalScalarExpressionContext);
		} else {
			return this.getRuleContext(i, NumericalScalarExpressionContext);
		}
	}
	public numericalOperator(): NumericalOperatorContext {
		return this.getRuleContext(0, NumericalOperatorContext);
	}
	constructor(ctx: NumericalScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NumericalCondenseExpressionLabelContext extends NumericalScalarExpressionContext {
	public condenseExpression(): CondenseExpressionContext {
		return this.getRuleContext(0, CondenseExpressionContext);
	}
	constructor(ctx: NumericalScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NumericalRealNumberExpressionLabelContext extends NumericalScalarExpressionContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(ctx: NumericalScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NumericalNanNumberExpressionLabelContext extends NumericalScalarExpressionContext {
	public NAN_NUMBER_CONSTANT(): TerminalNode { return this.getToken(wcpsParser.NAN_NUMBER_CONSTANT, 0); }
	constructor(ctx: NumericalScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NumericalComplexNumberConstantContext extends NumericalScalarExpressionContext {
	public complexNumberConstant(): ComplexNumberConstantContext {
		return this.getRuleContext(0, ComplexNumberConstantContext);
	}
	constructor(ctx: NumericalScalarExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ComplexNumberConstantContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_complexNumberConstant; }
	public copyFrom(ctx: ComplexNumberConstantContext): void {
		super.copyFrom(ctx);
	}
}
export class ComplexNumberConstantLabelContext extends ComplexNumberConstantContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public REAL_NUMBER_CONSTANT(): TerminalNode[];
	public REAL_NUMBER_CONSTANT(i: number): TerminalNode;
	public REAL_NUMBER_CONSTANT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.REAL_NUMBER_CONSTANT);
		} else {
			return this.getToken(wcpsParser.REAL_NUMBER_CONSTANT, i);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: ComplexNumberConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class NumericalOperatorContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.MINUS, 0); }
	public MULTIPLICATION(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.MULTIPLICATION, 0); }
	public DIVISION(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.DIVISION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_numericalOperator; }
}


export class NumericalUnaryOperationContext extends ParserRuleContext {
	public ABSOLUTE_VALUE(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.ABSOLUTE_VALUE, 0); }
	public SQUARE_ROOT(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.SQUARE_ROOT, 0); }
	public REAL_PART(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.REAL_PART, 0); }
	public IMAGINARY_PART(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.IMAGINARY_PART, 0); }
	public ROUND(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.ROUND, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.PLUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_numericalUnaryOperation; }
}


export class TrigonometricOperatorContext extends ParserRuleContext {
	public SIN(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.SIN, 0); }
	public COS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.COS, 0); }
	public TAN(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.TAN, 0); }
	public SINH(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.SINH, 0); }
	public COSH(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.COSH, 0); }
	public TANH(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.TANH, 0); }
	public ARCSIN(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.ARCSIN, 0); }
	public ARCCOS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.ARCCOS, 0); }
	public ARCTAN(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.ARCTAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_trigonometricOperator; }
}


export class GetComponentExpressionContext extends ParserRuleContext {
	public coverageIdentifierExpression(): CoverageIdentifierExpressionContext | undefined {
		return this.tryGetRuleContext(0, CoverageIdentifierExpressionContext);
	}
	public coverageCrsSetExpression(): CoverageCrsSetExpressionContext | undefined {
		return this.tryGetRuleContext(0, CoverageCrsSetExpressionContext);
	}
	public domainExpression(): DomainExpressionContext | undefined {
		return this.tryGetRuleContext(0, DomainExpressionContext);
	}
	public imageCrsDomainExpression(): ImageCrsDomainExpressionContext | undefined {
		return this.tryGetRuleContext(0, ImageCrsDomainExpressionContext);
	}
	public imageCrsDomainByDimensionExpression(): ImageCrsDomainByDimensionExpressionContext | undefined {
		return this.tryGetRuleContext(0, ImageCrsDomainByDimensionExpressionContext);
	}
	public imageCrsExpression(): ImageCrsExpressionContext | undefined {
		return this.tryGetRuleContext(0, ImageCrsExpressionContext);
	}
	public describeCoverageExpression(): DescribeCoverageExpressionContext | undefined {
		return this.tryGetRuleContext(0, DescribeCoverageExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_getComponentExpression; }
}


export class CoverageIdentifierExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_coverageIdentifierExpression; }
	public copyFrom(ctx: CoverageIdentifierExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CoverageIdentifierExpressionLabelContext extends CoverageIdentifierExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(wcpsParser.IDENTIFIER, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: CoverageIdentifierExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class CoverageCrsSetExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_coverageCrsSetExpression; }
	public copyFrom(ctx: CoverageCrsSetExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CoverageCrsSetExpressionLabelContext extends CoverageCrsSetExpressionContext {
	public CRSSET(): TerminalNode { return this.getToken(wcpsParser.CRSSET, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: CoverageCrsSetExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class SdomExtractionContext extends ParserRuleContext {
	public LOWER_BOUND(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.LOWER_BOUND, 0); }
	public UPPER_BOUND(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.UPPER_BOUND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_sdomExtraction; }
}


export class DomainExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_domainExpression; }
	public copyFrom(ctx: DomainExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DomainExpressionLabelContext extends DomainExpressionContext {
	public DOMAIN(): TerminalNode { return this.getToken(wcpsParser.DOMAIN, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	public axisName(): AxisNameContext {
		return this.getRuleContext(0, AxisNameContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	public crsName(): CrsNameContext | undefined {
		return this.tryGetRuleContext(0, CrsNameContext);
	}
	constructor(ctx: DomainExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ImageCrsDomainByDimensionExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_imageCrsDomainByDimensionExpression; }
	public copyFrom(ctx: ImageCrsDomainByDimensionExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ImageCrsDomainByDimensionExpressionLabelContext extends ImageCrsDomainByDimensionExpressionContext {
	public IMAGECRSDOMAIN(): TerminalNode { return this.getToken(wcpsParser.IMAGECRSDOMAIN, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public axisName(): AxisNameContext {
		return this.getRuleContext(0, AxisNameContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: ImageCrsDomainByDimensionExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ImageCrsDomainExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_imageCrsDomainExpression; }
	public copyFrom(ctx: ImageCrsDomainExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ImageCrsDomainExpressionLabelContext extends ImageCrsDomainExpressionContext {
	public IMAGECRSDOMAIN(): TerminalNode { return this.getToken(wcpsParser.IMAGECRSDOMAIN, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: ImageCrsDomainExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ImageCrsExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_imageCrsExpression; }
	public copyFrom(ctx: ImageCrsExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ImageCrsExpressionLabelContext extends ImageCrsExpressionContext {
	public IMAGECRS(): TerminalNode { return this.getToken(wcpsParser.IMAGECRS, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: ImageCrsExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DescribeCoverageExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_describeCoverageExpression; }
	public copyFrom(ctx: DescribeCoverageExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DescribeCoverageExpressionLabelContext extends DescribeCoverageExpressionContext {
	public DESCRIBE_COVERAGE(): TerminalNode { return this.getToken(wcpsParser.DESCRIBE_COVERAGE, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getRuleContext(0, CoverageVariableNameContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: DescribeCoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DomainIntervalsContext extends ParserRuleContext {
	public domainExpression(): DomainExpressionContext | undefined {
		return this.tryGetRuleContext(0, DomainExpressionContext);
	}
	public imageCrsDomainExpression(): ImageCrsDomainExpressionContext | undefined {
		return this.tryGetRuleContext(0, ImageCrsDomainExpressionContext);
	}
	public imageCrsDomainByDimensionExpression(): ImageCrsDomainByDimensionExpressionContext | undefined {
		return this.tryGetRuleContext(0, ImageCrsDomainByDimensionExpressionContext);
	}
	public sdomExtraction(): SdomExtractionContext | undefined {
		return this.tryGetRuleContext(0, SdomExtractionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_domainIntervals; }
}


export class PositionalParamaterContext extends ParserRuleContext {
	public POSITIONAL_PARAMETER(): TerminalNode { return this.getToken(wcpsParser.POSITIONAL_PARAMETER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_positionalParamater; }
}


export class ExtraParamsContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.STRING_LITERAL, 0); }
	public EXTRA_PARAMS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.EXTRA_PARAMS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_extraParams; }
}


export class EncodedCoverageExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_encodedCoverageExpression; }
	public copyFrom(ctx: EncodedCoverageExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class EncodedCoverageExpressionLabelContext extends EncodedCoverageExpressionContext {
	public ENCODE(): TerminalNode { return this.getToken(wcpsParser.ENCODE, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	public STRING_LITERAL(): TerminalNode { return this.getToken(wcpsParser.STRING_LITERAL, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	public extraParams(): ExtraParamsContext | undefined {
		return this.tryGetRuleContext(0, ExtraParamsContext);
	}
	constructor(ctx: EncodedCoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DecodeCoverageExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_decodeCoverageExpression; }
	public copyFrom(ctx: DecodeCoverageExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class DecodedCoverageExpressionLabelContext extends DecodeCoverageExpressionContext {
	public DECODE(): TerminalNode { return this.getToken(wcpsParser.DECODE, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public positionalParamater(): PositionalParamaterContext {
		return this.getRuleContext(0, PositionalParamaterContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.COMMA, 0); }
	public extraParams(): ExtraParamsContext | undefined {
		return this.tryGetRuleContext(0, ExtraParamsContext);
	}
	constructor(ctx: DecodeCoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class CoverageExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_coverageExpression; }
	public copyFrom(ctx: CoverageExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CoverageExpressionLogicLabelContext extends CoverageExpressionContext {
	public coverageExpression(): CoverageExpressionContext[];
	public coverageExpression(i: number): CoverageExpressionContext;
	public coverageExpression(i?: number): CoverageExpressionContext | CoverageExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageExpressionContext);
		} else {
			return this.getRuleContext(i, CoverageExpressionContext);
		}
	}
	public booleanOperator(): BooleanOperatorContext {
		return this.getRuleContext(0, BooleanOperatorContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionDomainIntervalsLabelContext extends CoverageExpressionContext {
	public domainIntervals(): DomainIntervalsContext {
		return this.getRuleContext(0, DomainIntervalsContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionConstructorLabelContext extends CoverageExpressionContext {
	public coverageConstructorExpression(): CoverageConstructorExpressionContext {
		return this.getRuleContext(0, CoverageConstructorExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionArithmeticLabelContext extends CoverageExpressionContext {
	public coverageExpression(): CoverageExpressionContext[];
	public coverageExpression(i: number): CoverageExpressionContext;
	public coverageExpression(i?: number): CoverageExpressionContext | CoverageExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageExpressionContext);
		} else {
			return this.getRuleContext(i, CoverageExpressionContext);
		}
	}
	public coverageArithmeticOperator(): CoverageArithmeticOperatorContext {
		return this.getRuleContext(0, CoverageArithmeticOperatorContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionComparissonLabelContext extends CoverageExpressionContext {
	public coverageExpression(): CoverageExpressionContext[];
	public coverageExpression(i: number): CoverageExpressionContext;
	public coverageExpression(i?: number): CoverageExpressionContext | CoverageExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageExpressionContext);
		} else {
			return this.getRuleContext(i, CoverageExpressionContext);
		}
	}
	public numericalComparissonOperator(): NumericalComparissonOperatorContext {
		return this.getRuleContext(0, NumericalComparissonOperatorContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionVariableNameLabelContext extends CoverageExpressionContext {
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getRuleContext(0, CoverageVariableNameContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionConstantLabelContext extends CoverageExpressionContext {
	public coverageConstantExpression(): CoverageConstantExpressionContext {
		return this.getRuleContext(0, CoverageConstantExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionDecodeLabelContext extends CoverageExpressionContext {
	public decodeCoverageExpression(): DecodeCoverageExpressionContext {
		return this.getRuleContext(0, DecodeCoverageExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionShorthandSliceLabelContext extends CoverageExpressionContext {
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public LEFT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACKET, 0); }
	public dimensionPointList(): DimensionPointListContext {
		return this.getRuleContext(0, DimensionPointListContext);
	}
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACKET, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionSliceLabelContext extends CoverageExpressionContext {
	public SLICE(): TerminalNode { return this.getToken(wcpsParser.SLICE, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public LEFT_BRACE(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACE, 0); }
	public dimensionPointList(): DimensionPointListContext {
		return this.getRuleContext(0, DimensionPointListContext);
	}
	public RIGHT_BRACE(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACE, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionShorthandSubsetLabelContext extends CoverageExpressionContext {
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public LEFT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACKET, 0); }
	public dimensionIntervalList(): DimensionIntervalListContext {
		return this.getRuleContext(0, DimensionIntervalListContext);
	}
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACKET, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageXpressionShortHandSubsetWithLetClauseVariableLabelContext extends CoverageExpressionContext {
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public LEFT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACKET, 0); }
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getRuleContext(0, CoverageVariableNameContext);
	}
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACKET, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionTrimCoverageLabelContext extends CoverageExpressionContext {
	public TRIM(): TerminalNode { return this.getToken(wcpsParser.TRIM, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public LEFT_BRACE(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACE, 0); }
	public dimensionIntervalList(): DimensionIntervalListContext {
		return this.getRuleContext(0, DimensionIntervalListContext);
	}
	public RIGHT_BRACE(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACE, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionExtendLabelContext extends CoverageExpressionContext {
	public EXTEND(): TerminalNode { return this.getToken(wcpsParser.EXTEND, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public LEFT_BRACE(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACE, 0); }
	public dimensionIntervalList(): DimensionIntervalListContext {
		return this.getRuleContext(0, DimensionIntervalListContext);
	}
	public RIGHT_BRACE(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACE, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionExtendByDomainIntervalsLabelContext extends CoverageExpressionContext {
	public EXTEND(): TerminalNode { return this.getToken(wcpsParser.EXTEND, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public LEFT_BRACE(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACE, 0); }
	public domainIntervals(): DomainIntervalsContext {
		return this.getRuleContext(0, DomainIntervalsContext);
	}
	public RIGHT_BRACE(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACE, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionUnaryArithmeticLabelContext extends CoverageExpressionContext {
	public unaryArithmeticExpression(): UnaryArithmeticExpressionContext {
		return this.getRuleContext(0, UnaryArithmeticExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionTrigonometricLabelContext extends CoverageExpressionContext {
	public trigonometricExpression(): TrigonometricExpressionContext {
		return this.getRuleContext(0, TrigonometricExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionExponentialLabelContext extends CoverageExpressionContext {
	public exponentialExpression(): ExponentialExpressionContext {
		return this.getRuleContext(0, ExponentialExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionMinBinaryLabelContext extends CoverageExpressionContext {
	public minBinaryExpression(): MinBinaryExpressionContext {
		return this.getRuleContext(0, MinBinaryExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionMaxBinaryLabelContext extends CoverageExpressionContext {
	public maxBinaryExpression(): MaxBinaryExpressionContext {
		return this.getRuleContext(0, MaxBinaryExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionPowerLabelContext extends CoverageExpressionContext {
	public unaryPowerExpression(): UnaryPowerExpressionContext {
		return this.getRuleContext(0, UnaryPowerExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionUnaryBooleanLabelContext extends CoverageExpressionContext {
	public unaryBooleanExpression(): UnaryBooleanExpressionContext {
		return this.getRuleContext(0, UnaryBooleanExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionCastLabelContext extends CoverageExpressionContext {
	public castExpression(): CastExpressionContext {
		return this.getRuleContext(0, CastExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionRangeSubsettingLabelContext extends CoverageExpressionContext {
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(wcpsParser.DOT, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionRangeConstructorLabelContext extends CoverageExpressionContext {
	public rangeConstructorExpression(): RangeConstructorExpressionContext {
		return this.getRuleContext(0, RangeConstructorExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionClipWKTLabelContext extends CoverageExpressionContext {
	public clipWKTExpression(): ClipWKTExpressionContext {
		return this.getRuleContext(0, ClipWKTExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionClipCurtainLabelContext extends CoverageExpressionContext {
	public clipCurtainExpression(): ClipCurtainExpressionContext {
		return this.getRuleContext(0, ClipCurtainExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionClipCorridorLabelContext extends CoverageExpressionContext {
	public clipCorridorExpression(): ClipCorridorExpressionContext {
		return this.getRuleContext(0, ClipCorridorExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionCrsTransformLabelContext extends CoverageExpressionContext {
	public crsTransformExpression(): CrsTransformExpressionContext {
		return this.getRuleContext(0, CrsTransformExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionSwitchCaseLabelContext extends CoverageExpressionContext {
	public switchCaseExpression(): SwitchCaseExpressionContext {
		return this.getRuleContext(0, SwitchCaseExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionScaleByDimensionIntervalsLabelContext extends CoverageExpressionContext {
	public SCALE(): TerminalNode { return this.getToken(wcpsParser.SCALE, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public LEFT_BRACE(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACE, 0); }
	public dimensionIntervalList(): DimensionIntervalListContext {
		return this.getRuleContext(0, DimensionIntervalListContext);
	}
	public RIGHT_BRACE(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACE, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionScaleByImageCrsDomainLabelContext extends CoverageExpressionContext {
	public SCALE(): TerminalNode { return this.getToken(wcpsParser.SCALE, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public LEFT_BRACE(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACE, 0); }
	public domainIntervals(): DomainIntervalsContext {
		return this.getRuleContext(0, DomainIntervalsContext);
	}
	public RIGHT_BRACE(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACE, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionCoverageLabelContext extends CoverageExpressionContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionScaleByFactorLabelContext extends CoverageExpressionContext {
	public SCALE_FACTOR(): TerminalNode { return this.getToken(wcpsParser.SCALE_FACTOR, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionScaleByAxesLabelContext extends CoverageExpressionContext {
	public SCALE_AXES(): TerminalNode { return this.getToken(wcpsParser.SCALE_AXES, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public LEFT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACKET, 0); }
	public scaleDimensionIntervalList(): ScaleDimensionIntervalListContext {
		return this.getRuleContext(0, ScaleDimensionIntervalListContext);
	}
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACKET, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionScaleBySizeLabelContext extends CoverageExpressionContext {
	public SCALE_SIZE(): TerminalNode { return this.getToken(wcpsParser.SCALE_SIZE, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public LEFT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACKET, 0); }
	public scaleDimensionIntervalList(): ScaleDimensionIntervalListContext {
		return this.getRuleContext(0, ScaleDimensionIntervalListContext);
	}
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACKET, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionScaleByExtentLabelContext extends CoverageExpressionContext {
	public SCALE_EXTENT(): TerminalNode { return this.getToken(wcpsParser.SCALE_EXTENT, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public LEFT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACKET, 0); }
	public scaleDimensionIntervalList(): ScaleDimensionIntervalListContext {
		return this.getRuleContext(0, ScaleDimensionIntervalListContext);
	}
	public RIGHT_BRACKET(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACKET, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionScalarLabelContext extends CoverageExpressionContext {
	public scalarExpression(): ScalarExpressionContext {
		return this.getRuleContext(0, ScalarExpressionContext);
	}
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageIsNullExpressionContext extends CoverageExpressionContext {
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public IS(): TerminalNode { return this.getToken(wcpsParser.IS, 0); }
	public NULL(): TerminalNode { return this.getToken(wcpsParser.NULL, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.NOT, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CoverageExpressionOverlayLabelContext extends CoverageExpressionContext {
	public coverageExpression(): CoverageExpressionContext[];
	public coverageExpression(i: number): CoverageExpressionContext;
	public coverageExpression(i?: number): CoverageExpressionContext | CoverageExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageExpressionContext);
		} else {
			return this.getRuleContext(i, CoverageExpressionContext);
		}
	}
	public OVERLAY(): TerminalNode { return this.getToken(wcpsParser.OVERLAY, 0); }
	constructor(ctx: CoverageExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class CoverageArithmeticOperatorContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.PLUS, 0); }
	public MULTIPLICATION(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.MULTIPLICATION, 0); }
	public DIVISION(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.DIVISION, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_coverageArithmeticOperator; }
}


export class UnaryArithmeticExpressionOperatorContext extends ParserRuleContext {
	public ABSOLUTE_VALUE(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.ABSOLUTE_VALUE, 0); }
	public SQUARE_ROOT(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.SQUARE_ROOT, 0); }
	public REAL_PART(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.REAL_PART, 0); }
	public IMAGINARY_PART(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.IMAGINARY_PART, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_unaryArithmeticExpressionOperator; }
}


export class UnaryArithmeticExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_unaryArithmeticExpression; }
	public copyFrom(ctx: UnaryArithmeticExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryCoverageArithmeticExpressionLabelContext extends UnaryArithmeticExpressionContext {
	public unaryArithmeticExpressionOperator(): UnaryArithmeticExpressionOperatorContext {
		return this.getRuleContext(0, UnaryArithmeticExpressionOperatorContext);
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: UnaryArithmeticExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class TrigonometricExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_trigonometricExpression; }
	public copyFrom(ctx: TrigonometricExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class TrigonometricExpressionLabelContext extends TrigonometricExpressionContext {
	public trigonometricOperator(): TrigonometricOperatorContext {
		return this.getRuleContext(0, TrigonometricOperatorContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: TrigonometricExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExponentialExpressionOperatorContext extends ParserRuleContext {
	public EXP(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.EXP, 0); }
	public LOG(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.LOG, 0); }
	public LN(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.LN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_exponentialExpressionOperator; }
}


export class ExponentialExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_exponentialExpression; }
	public copyFrom(ctx: ExponentialExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExponentialExpressionLabelContext extends ExponentialExpressionContext {
	public exponentialExpressionOperator(): ExponentialExpressionOperatorContext {
		return this.getRuleContext(0, ExponentialExpressionOperatorContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: ExponentialExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class UnaryPowerExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_unaryPowerExpression; }
	public copyFrom(ctx: UnaryPowerExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryPowerExpressionLabelContext extends UnaryPowerExpressionContext {
	public POWER(): TerminalNode { return this.getToken(wcpsParser.POWER, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public numericalScalarExpression(): NumericalScalarExpressionContext {
		return this.getRuleContext(0, NumericalScalarExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: UnaryPowerExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class MinBinaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_minBinaryExpression; }
	public copyFrom(ctx: MinBinaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MinBinaryExpressionLabelContext extends MinBinaryExpressionContext {
	public MIN(): TerminalNode { return this.getToken(wcpsParser.MIN, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext[];
	public coverageExpression(i: number): CoverageExpressionContext;
	public coverageExpression(i?: number): CoverageExpressionContext | CoverageExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageExpressionContext);
		} else {
			return this.getRuleContext(i, CoverageExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: MinBinaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class MaxBinaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_maxBinaryExpression; }
	public copyFrom(ctx: MaxBinaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MaxBinaryExpressionLabelContext extends MaxBinaryExpressionContext {
	public MAX(): TerminalNode { return this.getToken(wcpsParser.MAX, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext[];
	public coverageExpression(i: number): CoverageExpressionContext;
	public coverageExpression(i?: number): CoverageExpressionContext | CoverageExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageExpressionContext);
		} else {
			return this.getRuleContext(i, CoverageExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: MaxBinaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class UnaryBooleanExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_unaryBooleanExpression; }
	public copyFrom(ctx: UnaryBooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NotUnaryBooleanExpressionLabelContext extends UnaryBooleanExpressionContext {
	public NOT(): TerminalNode { return this.getToken(wcpsParser.NOT, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: UnaryBooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BitUnaryBooleanExpressionLabelContext extends UnaryBooleanExpressionContext {
	public BIT(): TerminalNode { return this.getToken(wcpsParser.BIT, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode { return this.getToken(wcpsParser.COMMA, 0); }
	public numericalScalarExpression(): NumericalScalarExpressionContext {
		return this.getRuleContext(0, NumericalScalarExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: UnaryBooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class RangeTypeContext extends ParserRuleContext {
	public COVERAGE_VARIABLE_NAME(): TerminalNode[];
	public COVERAGE_VARIABLE_NAME(i: number): TerminalNode;
	public COVERAGE_VARIABLE_NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COVERAGE_VARIABLE_NAME);
		} else {
			return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_rangeType; }
}


export class CastExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_castExpression; }
	public copyFrom(ctx: CastExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CastExpressionLabelContext extends CastExpressionContext {
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public rangeType(): RangeTypeContext {
		return this.getRuleContext(0, RangeTypeContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	constructor(ctx: CastExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class FieldNameContext extends ParserRuleContext {
	public COVERAGE_VARIABLE_NAME(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_fieldName; }
}


export class RangeConstructorExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_rangeConstructorExpression; }
	public copyFrom(ctx: RangeConstructorExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class RangeConstructorExpressionLabelContext extends RangeConstructorExpressionContext {
	public LEFT_BRACE(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACE, 0); }
	public RIGHT_BRACE(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACE, 0); }
	public fieldName(): FieldNameContext[];
	public fieldName(i: number): FieldNameContext;
	public fieldName(i?: number): FieldNameContext | FieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldNameContext);
		} else {
			return this.getRuleContext(i, FieldNameContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COLON);
		} else {
			return this.getToken(wcpsParser.COLON, i);
		}
	}
	public coverageExpression(): CoverageExpressionContext[];
	public coverageExpression(i: number): CoverageExpressionContext;
	public coverageExpression(i?: number): CoverageExpressionContext | CoverageExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageExpressionContext);
		} else {
			return this.getRuleContext(i, CoverageExpressionContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.SEMICOLON);
		} else {
			return this.getToken(wcpsParser.SEMICOLON, i);
		}
	}
	constructor(ctx: RangeConstructorExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class RangeConstructorSwitchCaseExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_rangeConstructorSwitchCaseExpression; }
	public copyFrom(ctx: RangeConstructorSwitchCaseExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class RangeConstructorSwitchCaseExpressionLabelContext extends RangeConstructorSwitchCaseExpressionContext {
	public LEFT_BRACE(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACE, 0); }
	public RIGHT_BRACE(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACE, 0); }
	public fieldName(): FieldNameContext[];
	public fieldName(i: number): FieldNameContext;
	public fieldName(i?: number): FieldNameContext | FieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldNameContext);
		} else {
			return this.getRuleContext(i, FieldNameContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COLON);
		} else {
			return this.getToken(wcpsParser.COLON, i);
		}
	}
	public coverageExpression(): CoverageExpressionContext[];
	public coverageExpression(i: number): CoverageExpressionContext;
	public coverageExpression(i?: number): CoverageExpressionContext | CoverageExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageExpressionContext);
		} else {
			return this.getRuleContext(i, CoverageExpressionContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.SEMICOLON);
		} else {
			return this.getToken(wcpsParser.SEMICOLON, i);
		}
	}
	constructor(ctx: RangeConstructorSwitchCaseExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DimensionPointListContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_dimensionPointList; }
	public copyFrom(ctx: DimensionPointListContext): void {
		super.copyFrom(ctx);
	}
}
export class DimensionPointListLabelContext extends DimensionPointListContext {
	public dimensionPointElement(): DimensionPointElementContext[];
	public dimensionPointElement(i: number): DimensionPointElementContext;
	public dimensionPointElement(i?: number): DimensionPointElementContext | DimensionPointElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DimensionPointElementContext);
		} else {
			return this.getRuleContext(i, DimensionPointElementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	constructor(ctx: DimensionPointListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DimensionPointElementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_dimensionPointElement; }
	public copyFrom(ctx: DimensionPointElementContext): void {
		super.copyFrom(ctx);
	}
}
export class DimensionPointElementLabelContext extends DimensionPointElementContext {
	public axisName(): AxisNameContext {
		return this.getRuleContext(0, AxisNameContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.COLON, 0); }
	public crsName(): CrsNameContext | undefined {
		return this.tryGetRuleContext(0, CrsNameContext);
	}
	constructor(ctx: DimensionPointElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DimensionIntervalListContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_dimensionIntervalList; }
	public copyFrom(ctx: DimensionIntervalListContext): void {
		super.copyFrom(ctx);
	}
}
export class DimensionIntervalListLabelContext extends DimensionIntervalListContext {
	public dimensionIntervalElement(): DimensionIntervalElementContext[];
	public dimensionIntervalElement(i: number): DimensionIntervalElementContext;
	public dimensionIntervalElement(i?: number): DimensionIntervalElementContext | DimensionIntervalElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DimensionIntervalElementContext);
		} else {
			return this.getRuleContext(i, DimensionIntervalElementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	constructor(ctx: DimensionIntervalListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ScaleDimensionIntervalListContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_scaleDimensionIntervalList; }
	public copyFrom(ctx: ScaleDimensionIntervalListContext): void {
		super.copyFrom(ctx);
	}
}
export class ScaleDimensionIntervalListLabelContext extends ScaleDimensionIntervalListContext {
	public scaleDimensionIntervalElement(): ScaleDimensionIntervalElementContext[];
	public scaleDimensionIntervalElement(i: number): ScaleDimensionIntervalElementContext;
	public scaleDimensionIntervalElement(i?: number): ScaleDimensionIntervalElementContext | ScaleDimensionIntervalElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScaleDimensionIntervalElementContext);
		} else {
			return this.getRuleContext(i, ScaleDimensionIntervalElementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	constructor(ctx: ScaleDimensionIntervalListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ScaleDimensionIntervalElementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_scaleDimensionIntervalElement; }
	public copyFrom(ctx: ScaleDimensionIntervalElementContext): void {
		super.copyFrom(ctx);
	}
}
export class TrimScaleDimensionIntervalElementLabelContext extends ScaleDimensionIntervalElementContext {
	public axisName(): AxisNameContext {
		return this.getRuleContext(0, AxisNameContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public COLON(): TerminalNode { return this.getToken(wcpsParser.COLON, 0); }
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	public STRING_LITERAL(): TerminalNode[];
	public STRING_LITERAL(i: number): TerminalNode;
	public STRING_LITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.STRING_LITERAL);
		} else {
			return this.getToken(wcpsParser.STRING_LITERAL, i);
		}
	}
	constructor(ctx: ScaleDimensionIntervalElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SliceScaleDimensionIntervalElementLabelContext extends ScaleDimensionIntervalElementContext {
	public axisName(): AxisNameContext {
		return this.getRuleContext(0, AxisNameContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: ScaleDimensionIntervalElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DimensionIntervalElementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_dimensionIntervalElement; }
	public copyFrom(ctx: DimensionIntervalElementContext): void {
		super.copyFrom(ctx);
	}
}
export class TrimDimensionIntervalElementLabelContext extends DimensionIntervalElementContext {
	public axisName(): AxisNameContext {
		return this.getRuleContext(0, AxisNameContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext[];
	public coverageExpression(i: number): CoverageExpressionContext;
	public coverageExpression(i?: number): CoverageExpressionContext | CoverageExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoverageExpressionContext);
		} else {
			return this.getRuleContext(i, CoverageExpressionContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COLON);
		} else {
			return this.getToken(wcpsParser.COLON, i);
		}
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	public crsName(): CrsNameContext | undefined {
		return this.tryGetRuleContext(0, CrsNameContext);
	}
	constructor(ctx: DimensionIntervalElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SliceDimensionIntervalElementLabelContext extends DimensionIntervalElementContext {
	public axisName(): AxisNameContext {
		return this.getRuleContext(0, AxisNameContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.COLON, 0); }
	public crsName(): CrsNameContext | undefined {
		return this.tryGetRuleContext(0, CrsNameContext);
	}
	constructor(ctx: DimensionIntervalElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class WktPointsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_wktPoints; }
	public copyFrom(ctx: WktPointsContext): void {
		super.copyFrom(ctx);
	}
}
export class WktPointsLabelContext extends WktPointsContext {
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	constructor(ctx: WktPointsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class WktPointElementListContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_wktPointElementList; }
	public copyFrom(ctx: WktPointElementListContext): void {
		super.copyFrom(ctx);
	}
}
export class WKTPointElementListLabelContext extends WktPointElementListContext {
	public LEFT_PARENTHESIS(): TerminalNode[];
	public LEFT_PARENTHESIS(i: number): TerminalNode;
	public LEFT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.LEFT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.LEFT_PARENTHESIS, i);
		}
	}
	public wktPoints(): WktPointsContext[];
	public wktPoints(i: number): WktPointsContext;
	public wktPoints(i?: number): WktPointsContext | WktPointsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WktPointsContext);
		} else {
			return this.getRuleContext(i, WktPointsContext);
		}
	}
	public RIGHT_PARENTHESIS(): TerminalNode[];
	public RIGHT_PARENTHESIS(i: number): TerminalNode;
	public RIGHT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.RIGHT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.RIGHT_PARENTHESIS, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	constructor(ctx: WktPointElementListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class WktLineStringContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_wktLineString; }
	public copyFrom(ctx: WktLineStringContext): void {
		super.copyFrom(ctx);
	}
}
export class WKTLineStringLabelContext extends WktLineStringContext {
	public LINESTRING(): TerminalNode { return this.getToken(wcpsParser.LINESTRING, 0); }
	public wktPointElementList(): WktPointElementListContext {
		return this.getRuleContext(0, WktPointElementListContext);
	}
	constructor(ctx: WktLineStringContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class WktPolygonContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_wktPolygon; }
	public copyFrom(ctx: WktPolygonContext): void {
		super.copyFrom(ctx);
	}
}
export class WKTPolygonLabelContext extends WktPolygonContext {
	public POLYGON(): TerminalNode { return this.getToken(wcpsParser.POLYGON, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public wktPointElementList(): WktPointElementListContext {
		return this.getRuleContext(0, WktPointElementListContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: WktPolygonContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class WktMultipolygonContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_wktMultipolygon; }
	public copyFrom(ctx: WktMultipolygonContext): void {
		super.copyFrom(ctx);
	}
}
export class WKTMultipolygonLabelContext extends WktMultipolygonContext {
	public MULTIPOLYGON(): TerminalNode { return this.getToken(wcpsParser.MULTIPOLYGON, 0); }
	public LEFT_PARENTHESIS(): TerminalNode[];
	public LEFT_PARENTHESIS(i: number): TerminalNode;
	public LEFT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.LEFT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.LEFT_PARENTHESIS, i);
		}
	}
	public wktPointElementList(): WktPointElementListContext[];
	public wktPointElementList(i: number): WktPointElementListContext;
	public wktPointElementList(i?: number): WktPointElementListContext | WktPointElementListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WktPointElementListContext);
		} else {
			return this.getRuleContext(i, WktPointElementListContext);
		}
	}
	public RIGHT_PARENTHESIS(): TerminalNode[];
	public RIGHT_PARENTHESIS(i: number): TerminalNode;
	public RIGHT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.RIGHT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.RIGHT_PARENTHESIS, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	constructor(ctx: WktMultipolygonContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class WktExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_wktExpression; }
	public copyFrom(ctx: WktExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class WKTExpressionLabelContext extends WktExpressionContext {
	public wktPolygon(): WktPolygonContext | undefined {
		return this.tryGetRuleContext(0, WktPolygonContext);
	}
	public wktLineString(): WktLineStringContext | undefined {
		return this.tryGetRuleContext(0, WktLineStringContext);
	}
	public wktMultipolygon(): WktMultipolygonContext | undefined {
		return this.tryGetRuleContext(0, WktMultipolygonContext);
	}
	constructor(ctx: WktExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class CurtainProjectionAxisLabel1Context extends ParserRuleContext {
	public COVERAGE_VARIABLE_NAME(): TerminalNode { return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_curtainProjectionAxisLabel1; }
}


export class CurtainProjectionAxisLabel2Context extends ParserRuleContext {
	public COVERAGE_VARIABLE_NAME(): TerminalNode { return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_curtainProjectionAxisLabel2; }
}


export class ClipCurtainExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_clipCurtainExpression; }
	public copyFrom(ctx: ClipCurtainExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ClipCurtainExpressionLabelContext extends ClipCurtainExpressionContext {
	public CLIP(): TerminalNode { return this.getToken(wcpsParser.CLIP, 0); }
	public LEFT_PARENTHESIS(): TerminalNode[];
	public LEFT_PARENTHESIS(i: number): TerminalNode;
	public LEFT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.LEFT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.LEFT_PARENTHESIS, i);
		}
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	public CURTAIN(): TerminalNode { return this.getToken(wcpsParser.CURTAIN, 0); }
	public PROJECTION(): TerminalNode { return this.getToken(wcpsParser.PROJECTION, 0); }
	public curtainProjectionAxisLabel1(): CurtainProjectionAxisLabel1Context {
		return this.getRuleContext(0, CurtainProjectionAxisLabel1Context);
	}
	public curtainProjectionAxisLabel2(): CurtainProjectionAxisLabel2Context {
		return this.getRuleContext(0, CurtainProjectionAxisLabel2Context);
	}
	public RIGHT_PARENTHESIS(): TerminalNode[];
	public RIGHT_PARENTHESIS(i: number): TerminalNode;
	public RIGHT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.RIGHT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.RIGHT_PARENTHESIS, i);
		}
	}
	public wktExpression(): WktExpressionContext {
		return this.getRuleContext(0, WktExpressionContext);
	}
	public crsName(): CrsNameContext | undefined {
		return this.tryGetRuleContext(0, CrsNameContext);
	}
	constructor(ctx: ClipCurtainExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class CorridorProjectionAxisLabel1Context extends ParserRuleContext {
	public COVERAGE_VARIABLE_NAME(): TerminalNode { return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_corridorProjectionAxisLabel1; }
}


export class CorridorProjectionAxisLabel2Context extends ParserRuleContext {
	public COVERAGE_VARIABLE_NAME(): TerminalNode { return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_corridorProjectionAxisLabel2; }
}


export class ClipCorridorExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_clipCorridorExpression; }
	public copyFrom(ctx: ClipCorridorExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ClipCorridorExpressionLabelContext extends ClipCorridorExpressionContext {
	public CLIP(): TerminalNode { return this.getToken(wcpsParser.CLIP, 0); }
	public LEFT_PARENTHESIS(): TerminalNode[];
	public LEFT_PARENTHESIS(i: number): TerminalNode;
	public LEFT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.LEFT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.LEFT_PARENTHESIS, i);
		}
	}
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	public CORRIDOR(): TerminalNode { return this.getToken(wcpsParser.CORRIDOR, 0); }
	public PROJECTION(): TerminalNode { return this.getToken(wcpsParser.PROJECTION, 0); }
	public corridorProjectionAxisLabel1(): CorridorProjectionAxisLabel1Context {
		return this.getRuleContext(0, CorridorProjectionAxisLabel1Context);
	}
	public corridorProjectionAxisLabel2(): CorridorProjectionAxisLabel2Context {
		return this.getRuleContext(0, CorridorProjectionAxisLabel2Context);
	}
	public RIGHT_PARENTHESIS(): TerminalNode[];
	public RIGHT_PARENTHESIS(i: number): TerminalNode;
	public RIGHT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.RIGHT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.RIGHT_PARENTHESIS, i);
		}
	}
	public wktLineString(): WktLineStringContext {
		return this.getRuleContext(0, WktLineStringContext);
	}
	public wktExpression(): WktExpressionContext {
		return this.getRuleContext(0, WktExpressionContext);
	}
	public DISCRETE(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.DISCRETE, 0); }
	public crsName(): CrsNameContext | undefined {
		return this.tryGetRuleContext(0, CrsNameContext);
	}
	constructor(ctx: ClipCorridorExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ClipWKTExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_clipWKTExpression; }
	public copyFrom(ctx: ClipWKTExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ClipWKTExpressionLabelContext extends ClipWKTExpressionContext {
	public CLIP(): TerminalNode { return this.getToken(wcpsParser.CLIP, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	public wktExpression(): WktExpressionContext {
		return this.getRuleContext(0, WktExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	public crsName(): CrsNameContext | undefined {
		return this.tryGetRuleContext(0, CrsNameContext);
	}
	public WITH_COORDINATES(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.WITH_COORDINATES, 0); }
	constructor(ctx: ClipWKTExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class CrsTransformExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_crsTransformExpression; }
	public copyFrom(ctx: CrsTransformExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CrsTransformExpressionLabelContext extends CrsTransformExpressionContext {
	public CRS_TRANSFORM(): TerminalNode { return this.getToken(wcpsParser.CRS_TRANSFORM, 0); }
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	public dimensionCrsList(): DimensionCrsListContext {
		return this.getRuleContext(0, DimensionCrsListContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	public LEFT_BRACE(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.LEFT_BRACE, 0); }
	public RIGHT_BRACE(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.RIGHT_BRACE, 0); }
	public interpolationType(): InterpolationTypeContext | undefined {
		return this.tryGetRuleContext(0, InterpolationTypeContext);
	}
	constructor(ctx: CrsTransformExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DimensionCrsListContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_dimensionCrsList; }
	public copyFrom(ctx: DimensionCrsListContext): void {
		super.copyFrom(ctx);
	}
}
export class DimensionCrsListLabelContext extends DimensionCrsListContext {
	public LEFT_BRACE(): TerminalNode { return this.getToken(wcpsParser.LEFT_BRACE, 0); }
	public dimensionCrsElement(): DimensionCrsElementContext[];
	public dimensionCrsElement(i: number): DimensionCrsElementContext;
	public dimensionCrsElement(i?: number): DimensionCrsElementContext | DimensionCrsElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DimensionCrsElementContext);
		} else {
			return this.getRuleContext(i, DimensionCrsElementContext);
		}
	}
	public RIGHT_BRACE(): TerminalNode { return this.getToken(wcpsParser.RIGHT_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	constructor(ctx: DimensionCrsListContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DimensionCrsElementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_dimensionCrsElement; }
	public copyFrom(ctx: DimensionCrsElementContext): void {
		super.copyFrom(ctx);
	}
}
export class DimensionCrsElementLabelContext extends DimensionCrsElementContext {
	public axisName(): AxisNameContext {
		return this.getRuleContext(0, AxisNameContext);
	}
	public COLON(): TerminalNode { return this.getToken(wcpsParser.COLON, 0); }
	public crsName(): CrsNameContext {
		return this.getRuleContext(0, CrsNameContext);
	}
	constructor(ctx: DimensionCrsElementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class InterpolationTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_interpolationType; }
	public copyFrom(ctx: InterpolationTypeContext): void {
		super.copyFrom(ctx);
	}
}
export class InterpolationTypeLabelContext extends InterpolationTypeContext {
	public COVERAGE_VARIABLE_NAME(): TerminalNode { return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0); }
	constructor(ctx: InterpolationTypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class CoverageConstructorExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_coverageConstructorExpression; }
	public copyFrom(ctx: CoverageConstructorExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CoverageConstructorExpressionLabelContext extends CoverageConstructorExpressionContext {
	public COVERAGE(): TerminalNode { return this.getToken(wcpsParser.COVERAGE, 0); }
	public COVERAGE_VARIABLE_NAME(): TerminalNode { return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0); }
	public OVER(): TerminalNode { return this.getToken(wcpsParser.OVER, 0); }
	public axisIterator(): AxisIteratorContext[];
	public axisIterator(i: number): AxisIteratorContext;
	public axisIterator(i?: number): AxisIteratorContext | AxisIteratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AxisIteratorContext);
		} else {
			return this.getRuleContext(i, AxisIteratorContext);
		}
	}
	public VALUES(): TerminalNode { return this.getToken(wcpsParser.VALUES, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	constructor(ctx: CoverageConstructorExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class AxisIteratorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_axisIterator; }
	public copyFrom(ctx: AxisIteratorContext): void {
		super.copyFrom(ctx);
	}
}
export class AxisIteratorDomainIntervalsLabelContext extends AxisIteratorContext {
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getRuleContext(0, CoverageVariableNameContext);
	}
	public axisName(): AxisNameContext {
		return this.getRuleContext(0, AxisNameContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public domainIntervals(): DomainIntervalsContext {
		return this.getRuleContext(0, DomainIntervalsContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: AxisIteratorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AxisIteratorLabelContext extends AxisIteratorContext {
	public coverageVariableName(): CoverageVariableNameContext {
		return this.getRuleContext(0, CoverageVariableNameContext);
	}
	public dimensionIntervalElement(): DimensionIntervalElementContext {
		return this.getRuleContext(0, DimensionIntervalElementContext);
	}
	constructor(ctx: AxisIteratorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class IntervalExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_intervalExpression; }
	public copyFrom(ctx: IntervalExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IntervalExpressionLabelContext extends IntervalExpressionContext {
	public scalarExpression(): ScalarExpressionContext[];
	public scalarExpression(i: number): ScalarExpressionContext;
	public scalarExpression(i?: number): ScalarExpressionContext | ScalarExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScalarExpressionContext);
		} else {
			return this.getRuleContext(i, ScalarExpressionContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(wcpsParser.COLON, 0); }
	constructor(ctx: IntervalExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class CoverageConstantExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_coverageConstantExpression; }
	public copyFrom(ctx: CoverageConstantExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class CoverageConstantExpressionLabelContext extends CoverageConstantExpressionContext {
	public COVERAGE(): TerminalNode { return this.getToken(wcpsParser.COVERAGE, 0); }
	public COVERAGE_VARIABLE_NAME(): TerminalNode { return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0); }
	public OVER(): TerminalNode { return this.getToken(wcpsParser.OVER, 0); }
	public axisIterator(): AxisIteratorContext[];
	public axisIterator(i: number): AxisIteratorContext;
	public axisIterator(i?: number): AxisIteratorContext | AxisIteratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AxisIteratorContext);
		} else {
			return this.getRuleContext(i, AxisIteratorContext);
		}
	}
	public VALUE(): TerminalNode { return this.getToken(wcpsParser.VALUE, 0); }
	public LIST(): TerminalNode { return this.getToken(wcpsParser.LIST, 0); }
	public LOWER_THAN(): TerminalNode { return this.getToken(wcpsParser.LOWER_THAN, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public GREATER_THAN(): TerminalNode { return this.getToken(wcpsParser.GREATER_THAN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.SEMICOLON);
		} else {
			return this.getToken(wcpsParser.SEMICOLON, i);
		}
	}
	constructor(ctx: CoverageConstantExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class AxisSpecContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_axisSpec; }
	public copyFrom(ctx: AxisSpecContext): void {
		super.copyFrom(ctx);
	}
}
export class AxisSpecLabelContext extends AxisSpecContext {
	public dimensionIntervalElement(): DimensionIntervalElementContext {
		return this.getRuleContext(0, DimensionIntervalElementContext);
	}
	constructor(ctx: AxisSpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class CondenseExpressionContext extends ParserRuleContext {
	public reduceExpression(): ReduceExpressionContext | undefined {
		return this.tryGetRuleContext(0, ReduceExpressionContext);
	}
	public generalCondenseExpression(): GeneralCondenseExpressionContext | undefined {
		return this.tryGetRuleContext(0, GeneralCondenseExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_condenseExpression; }
}


export class ReduceBooleanExpressionOperatorContext extends ParserRuleContext {
	public ALL(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.ALL, 0); }
	public SOME(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.SOME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_reduceBooleanExpressionOperator; }
}


export class ReduceNumericalExpressionOperatorContext extends ParserRuleContext {
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.COUNT, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.ADD, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.AVG, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.MAX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_reduceNumericalExpressionOperator; }
}


export class ReduceBooleanExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_reduceBooleanExpression; }
	public copyFrom(ctx: ReduceBooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ReduceBooleanExpressionLabelContext extends ReduceBooleanExpressionContext {
	public reduceBooleanExpressionOperator(): ReduceBooleanExpressionOperatorContext {
		return this.getRuleContext(0, ReduceBooleanExpressionOperatorContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: ReduceBooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ReduceNumericalExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_reduceNumericalExpression; }
	public copyFrom(ctx: ReduceNumericalExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ReduceNumericalExpressionLabelContext extends ReduceNumericalExpressionContext {
	public reduceNumericalExpressionOperator(): ReduceNumericalExpressionOperatorContext {
		return this.getRuleContext(0, ReduceNumericalExpressionOperatorContext);
	}
	public LEFT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.LEFT_PARENTHESIS, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public RIGHT_PARENTHESIS(): TerminalNode { return this.getToken(wcpsParser.RIGHT_PARENTHESIS, 0); }
	constructor(ctx: ReduceNumericalExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ReduceExpressionContext extends ParserRuleContext {
	public reduceBooleanExpression(): ReduceBooleanExpressionContext | undefined {
		return this.tryGetRuleContext(0, ReduceBooleanExpressionContext);
	}
	public reduceNumericalExpression(): ReduceNumericalExpressionContext | undefined {
		return this.tryGetRuleContext(0, ReduceNumericalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_reduceExpression; }
}


export class CondenseExpressionOperatorContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.PLUS, 0); }
	public MULTIPLICATION(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.MULTIPLICATION, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.MAX, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_condenseExpressionOperator; }
}


export class GeneralCondenseExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_generalCondenseExpression; }
	public copyFrom(ctx: GeneralCondenseExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class GeneralCondenseExpressionLabelContext extends GeneralCondenseExpressionContext {
	public CONDENSE(): TerminalNode { return this.getToken(wcpsParser.CONDENSE, 0); }
	public condenseExpressionOperator(): CondenseExpressionOperatorContext {
		return this.getRuleContext(0, CondenseExpressionOperatorContext);
	}
	public OVER(): TerminalNode { return this.getToken(wcpsParser.OVER, 0); }
	public axisIterator(): AxisIteratorContext[];
	public axisIterator(i: number): AxisIteratorContext;
	public axisIterator(i?: number): AxisIteratorContext | AxisIteratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AxisIteratorContext);
		} else {
			return this.getRuleContext(i, AxisIteratorContext);
		}
	}
	public USING(): TerminalNode { return this.getToken(wcpsParser.USING, 0); }
	public coverageExpression(): CoverageExpressionContext {
		return this.getRuleContext(0, CoverageExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.COMMA);
		} else {
			return this.getToken(wcpsParser.COMMA, i);
		}
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	constructor(ctx: GeneralCondenseExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class SwitchCaseExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_switchCaseExpression; }
	public copyFrom(ctx: SwitchCaseExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class SwitchCaseRangeConstructorExpressionLabelContext extends SwitchCaseExpressionContext {
	public SWITCH(): TerminalNode { return this.getToken(wcpsParser.SWITCH, 0); }
	public CASE(): TerminalNode[];
	public CASE(i: number): TerminalNode;
	public CASE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.CASE);
		} else {
			return this.getToken(wcpsParser.CASE, i);
		}
	}
	public booleanSwitchCaseCombinedExpression(): BooleanSwitchCaseCombinedExpressionContext[];
	public booleanSwitchCaseCombinedExpression(i: number): BooleanSwitchCaseCombinedExpressionContext;
	public booleanSwitchCaseCombinedExpression(i?: number): BooleanSwitchCaseCombinedExpressionContext | BooleanSwitchCaseCombinedExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanSwitchCaseCombinedExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanSwitchCaseCombinedExpressionContext);
		}
	}
	public RETURN(): TerminalNode[];
	public RETURN(i: number): TerminalNode;
	public RETURN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.RETURN);
		} else {
			return this.getToken(wcpsParser.RETURN, i);
		}
	}
	public rangeConstructorSwitchCaseExpression(): RangeConstructorSwitchCaseExpressionContext[];
	public rangeConstructorSwitchCaseExpression(i: number): RangeConstructorSwitchCaseExpressionContext;
	public rangeConstructorSwitchCaseExpression(i?: number): RangeConstructorSwitchCaseExpressionContext | RangeConstructorSwitchCaseExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RangeConstructorSwitchCaseExpressionContext);
		} else {
			return this.getRuleContext(i, RangeConstructorSwitchCaseExpressionContext);
		}
	}
	public DEFAULT(): TerminalNode { return this.getToken(wcpsParser.DEFAULT, 0); }
	public LEFT_PARENTHESIS(): TerminalNode[];
	public LEFT_PARENTHESIS(i: number): TerminalNode;
	public LEFT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.LEFT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.LEFT_PARENTHESIS, i);
		}
	}
	public RIGHT_PARENTHESIS(): TerminalNode[];
	public RIGHT_PARENTHESIS(i: number): TerminalNode;
	public RIGHT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.RIGHT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.RIGHT_PARENTHESIS, i);
		}
	}
	constructor(ctx: SwitchCaseExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SwitchCaseScalarValueExpressionLabelContext extends SwitchCaseExpressionContext {
	public SWITCH(): TerminalNode { return this.getToken(wcpsParser.SWITCH, 0); }
	public CASE(): TerminalNode[];
	public CASE(i: number): TerminalNode;
	public CASE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.CASE);
		} else {
			return this.getToken(wcpsParser.CASE, i);
		}
	}
	public booleanSwitchCaseCombinedExpression(): BooleanSwitchCaseCombinedExpressionContext[];
	public booleanSwitchCaseCombinedExpression(i: number): BooleanSwitchCaseCombinedExpressionContext;
	public booleanSwitchCaseCombinedExpression(i?: number): BooleanSwitchCaseCombinedExpressionContext | BooleanSwitchCaseCombinedExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanSwitchCaseCombinedExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanSwitchCaseCombinedExpressionContext);
		}
	}
	public RETURN(): TerminalNode[];
	public RETURN(i: number): TerminalNode;
	public RETURN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.RETURN);
		} else {
			return this.getToken(wcpsParser.RETURN, i);
		}
	}
	public scalarValueCoverageExpression(): ScalarValueCoverageExpressionContext[];
	public scalarValueCoverageExpression(i: number): ScalarValueCoverageExpressionContext;
	public scalarValueCoverageExpression(i?: number): ScalarValueCoverageExpressionContext | ScalarValueCoverageExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScalarValueCoverageExpressionContext);
		} else {
			return this.getRuleContext(i, ScalarValueCoverageExpressionContext);
		}
	}
	public DEFAULT(): TerminalNode { return this.getToken(wcpsParser.DEFAULT, 0); }
	public LEFT_PARENTHESIS(): TerminalNode[];
	public LEFT_PARENTHESIS(i: number): TerminalNode;
	public LEFT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.LEFT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.LEFT_PARENTHESIS, i);
		}
	}
	public RIGHT_PARENTHESIS(): TerminalNode[];
	public RIGHT_PARENTHESIS(i: number): TerminalNode;
	public RIGHT_PARENTHESIS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(wcpsParser.RIGHT_PARENTHESIS);
		} else {
			return this.getToken(wcpsParser.RIGHT_PARENTHESIS, i);
		}
	}
	constructor(ctx: SwitchCaseExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class CrsNameContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(wcpsParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_crsName; }
}


export class AxisNameContext extends ParserRuleContext {
	public COVERAGE_VARIABLE_NAME(): TerminalNode { return this.getToken(wcpsParser.COVERAGE_VARIABLE_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_axisName; }
}


export class NumberContext extends ParserRuleContext {
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.INTEGER, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.MINUS, 0); }
	public REAL_NUMBER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.REAL_NUMBER_CONSTANT, 0); }
	public SCIENTIFIC_NUMBER_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.SCIENTIFIC_NUMBER_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_number; }
}


export class ConstantContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.STRING_LITERAL, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.FALSE, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(wcpsParser.MINUS, 0); }
	public complexNumberConstant(): ComplexNumberConstantContext | undefined {
		return this.tryGetRuleContext(0, ComplexNumberConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return wcpsParser.RULE_constant; }
}


