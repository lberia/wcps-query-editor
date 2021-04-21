const COLOR = {
  Base03: "#002b36",
  Base02: "#073642",
  Base01: "#586e75",
  Base00: "#657b83",
  Base0: "#839496",
  Base1: "#93a1a1",
  Base2: "#eee8d5",
  Base3: "#fdf6e3",
  Yellow: "#b58900",
  Orange: "#cb4b16",
  Red: "#dc322f",
  Magenta: "#d33682",
  Violet: "#6c71c4",
  Blue: "#268bd2",
  Cyan: "#2aa198",
  Green: "#859900",
};

const rules = (
  tokens: string[],
  foreground?: string,
  fontStyle?: string,
  background?: string
): monaco.editor.ITokenThemeRule[] =>
  tokens.map((token) => ({ token, foreground, fontStyle, background }));

const defaultThemeRules: monaco.editor.ITokenThemeRule[] = [
  ...rules(["FOR", "IN", "LET"], COLOR.Orange, "bold"),
  ...rules(
    [
      "ABSOLUTE_VALUE",
      "ADD",
      "ALL",
      "AND",
      "ARCSIN",
      "ARCCOS",
      "ARCTAN",
      "AVG",
      "BIT",
      "CASE",
      "CLIP",
      "CONDENSE",
      "COS",
      "COSH",
      "COUNT",
      "CURTAIN",
      "CORRIDOR",
      "COVERAGE",
      "DECODE",
      "DEFAULT",
      "DISCRETE",
      "DESCRIBE_COVERAGE",
      "ENCODE",
      "EXP",
      "EXTEND",
      "FALSE",
      "IMAGINARY_PART",
      "IDENTIFIER",
      "CRSSET",
      "IMAGECRSDOMAIN",
      "IMAGECRS",
      "IS",
      "DOMAIN",
      "LET",
      "LN",
      "LIST",
      "LOG",
      "MAX",
      "MIN",
      "NAN_NUMBER_CONSTANT",
      "NULL",
      "OR",
      "OVER",
      "OVERLAY",
      "POWER",
      "REAL_PART",
      "ROUND",
      "RETURN",
      "SCALE",
      "SCALE_FACTOR",
      "SCALE_AXES",
      "SCALE_SIZE",
      "SCALE_EXTENT",
      "SIN",
      "SINH",
      "SLICE",
      "SOME",
      "SQUARE_ROOT",
      "STRUCT",
      "SWITCH",
      "TAN",
      "TANH",
      "TRIM",
      "TRUE",
      "USING",
      "VALUE",
      "VALUES",
      "WHERE",
      "XOR",
      "CRS_TRANSFORM",
      "POLYGON",
      "LINESTRING",
      "MULTIPOLYGON",
      "PROJECTION",
      "WITH_COORDINATES",
      "NOT",
    ],
    COLOR.Yellow
  ),
  ...rules([
    "COLON",
    "COMMA",
    "COVERAGE_VARIABLE_NAME_PREFIX",
    "DIVISION",
    "DOT",
    "EQUAL",
    "GREATER_THAN",
    "GREATER_OR_EQUAL_THAN",
    "LOWER_BOUND",
    "LOWER_THAN",
    "LOWER_OR_EQUAL_THAN",
    "MINUS",
    "MULTIPLICATION",
    "NOT_EQUAL",
    "QUOTE",
    "ESCAPED_QUOTE",
    "PLUS",
    "SEMICOLON",
    "UPPER_BOUND",
    "COVERAGE_VARIABLE_NAME",
    "EXTRA_PARAMS",
  ]),
  ...rules(
    [
      "LEFT_BRACE",
      "LEFT_BRACKET",
      "RIGHT_BRACE",
      "RIGHT_BRACKET",
      "LEFT_PARENTHESIS",
      "RIGHT_PARENTHESIS",
    ],
    COLOR.Blue
  ),
  ...rules(["STRING_LITERAL"], COLOR.Cyan),
  ...rules(
    [
      "INTEGER",
      "REAL_NUMBER_CONSTANT",
      "SCIENTIFIC_NUMBER_CONSTANT",
      "POSITIONAL_PARAMETER",
    ],
    COLOR.Green
  ),
  ...rules(["ERROR"], COLOR.Red),
];

export const defaultTheme: monaco.editor.IStandaloneThemeData = {
  base: "vs",
  inherit: false,
  colors: {
    "editor.background": COLOR.Base3,
    "editor.foreground": COLOR.Base00,
    "editor.selectionBackground": COLOR.Base2,
    "editorGutter.background": COLOR.Base2,
  },
  rules: defaultThemeRules,
};
