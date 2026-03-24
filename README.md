# quadsystems-data-test

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![npm download][download-image]][download-url]

Provides Quad Systems NMR data files for testing purposes.

## Installation

`$ npm i quadsystems-data-test`

Provides a default `DataTestApi` instance (from `data-test-api` package).

See https://github.com/cheminfo/data-test-api

## Usage

```js
import { quadsystemsFiles } from 'quadsystems-data-test';

const files = await quadsystemsFiles.files(); // list of zip files

const name = 'sample3-hmbc-nitrogen.zip';
const file = await quadsystemsFiles.findFile(name); // get a file by name

// Get the file buffer
const buffer = await file.buffer();
// or
const buffer = await quadsystemsFiles.findData(name);

// Get file by relative path
const data = await quadsystemsFiles.getData(
  'sample3/sample3-hmbc-nitrogen.zip',
);
```

## Data Files Structure

```
data
├── sample1
│   ├── sample1-carbon.zip
│   ├── sample1-fluorine.zip
│   ├── sample1-hmbc.zip
│   ├── sample1-phosphorus.zip
│   └── sample1-proton.zip
├── sample2
│   ├── sample2-carbon.zip
│   ├── sample2-noesy-1d.zip
│   ├── sample2-proton.zip
│   └── sample2-tocsy-1d.zip
├── sample3
│   ├── sample3-carbon.zip
│   ├── sample3-cosy.zip
│   ├── sample3-hmbc-nitrogen.zip
│   ├── sample3-hmbc.zip
│   ├── sample3-hsqc.zip
│   ├── sample3-proton.zip
│   ├── sample3-roesy.zip
│   └── sample3-tocsy.zip
└── water-supression
    ├── water-supression-excitation-sculpting.zip
    └── water-supression-presat.zip
```

[npm-image]: https://img.shields.io/npm/v/quadsystems-data-test.svg
[npm-url]: https://www.npmjs.com/package/quadsystems-data-test
[ci-image]: https://github.com/cheminfo/quadsystems-data-test/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/cheminfo/quadsystems-data-test/actions?query=workflow%3A%22Node.js+CI%22
[download-image]: https://img.shields.io/npm/dm/quadsystems-data-test.svg
[download-url]: https://www.npmjs.com/package/quadsystems-data-test
