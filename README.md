# WCPS Query Editor

Author: **Luka Beria**

Instructor: **Peter Baumann**

This project is intended as a Bachelor's Project/Thesis for **Jacobs University Bremen**.

## Requiremenets
In order to build or test the project your system needs to have a modern version of Java. (>= JRE 1.6)

In addition, this project was developed on a Linux (Ubuntu 20.04) machine and compatibility with a different OS is not guaranteed.

## Getting Started

1. run `npm i` to install all the dependencies.
2. run `npm run parser` to generate Typescript parser and lexer
3. run `npm run build` to build the project or `npm run start` to start a dev server
4. Copy `src/main/html/index.html` to `dist/` if you want to view an example html page with a working editor

To integrate the editor import the built `dist/main.js` script. 
To use it in any html page either:
 - just create a `<div class="wcps-editor"></div>` and it will be auto-populated with an editor.
 - or call `WCPSEditor.create(container: HTMLDivElement, initialText?: string, url?: string) => IStandaloneCodeEditor` and the element provided as the container will be populated with an editor. the returned `monaco.editor.IStandaloneCodeEditor` object can be used to modify the editor instance as needed.
