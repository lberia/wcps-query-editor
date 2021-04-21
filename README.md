# wcps-query-editor

This project is intended as a Bachelor's Project/Thesis for Jacobs University Bremen.

## Requiremenets
In order to build or test the project your system needs to have a modern version of Java. (>= JRE 1.6)
In addition, this project was developed on a linux (Ubuntu 20.04) machine and compatibility with a different OS is not guaranteed.

## Getting Started

1. run `npm i` to install all the dependencies.
2. run `npm run parser` to generate Typescript parser and lexer
3. run `npm run build` to build the project or `npm run start` to start a dev server
4. Copy `src/main/html/index.html` to `dist/` if you want to view an example html page with a working editor

To integrate the editor in any html page import the generated `dist/main.js` script and create a `<div id="container"></div>`.
