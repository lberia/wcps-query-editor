#!/bin/bash
# OVERVIEW:
# Runs the tools that are need to generate the parser from the wcps.g4 grammar
#
# USAGE:
#  cd $PETASCOPE_SOURCES/wcps/parser && ./buildParser.sh
#

URL_TO_ANTLR="http://www.antlr.org/download/antlr-4.9.1-complete.jar"
PATH_TO_ANTLR_TOOL="/tmp/antlr-4.9.1-complete.jar"
if [ ! -f "$PATH_TO_ANTLR_TOOL" ]; then
    echo "downloading antlr-4.9.1 to $PATH_TO_ANTLR_TOOL"
    wget "$URL_TO_ANTLR" -O "$PATH_TO_ANTLR_TOOL"
fi

cd src/main/antlr
export antlr4="java -jar $PATH_TO_ANTLR_TOOL"
export CLASSPATH=".:$PATH_TO_ANTLR_TOOL:$CLASSPATH"

npm run parser

echo "done."
