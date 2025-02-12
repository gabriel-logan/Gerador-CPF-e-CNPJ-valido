# CPF and CNPJ Generator

[![npm version](https://badge.fury.io/js/cpf_and_cnpj-generator.svg?refresh=5)](https://badge.fury.io/js/cpf_and_cnpj-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/cpf_and_cnpj-generator.svg?style=flat-square)](https://npm-stat.com/charts.html?package=cpf_and_cnpj-generator)

This npm package provides JavaScript functions to generate valid Brazilian CPF (Cadastro de Pessoas Físicas) and CNPJ (Cadastro Nacional da Pessoa Jurídica) numbers.

## DOC

https://gabriel-logan.github.io/Gerador-CPF-e-CNPJ-valido

## CDN

unpkg:

```bash
https://unpkg.com/cpf_and_cnpj-generator@1.2.4/dist/bundle.js
```

```html
<script src="https://unpkg.com/cpf_and_cnpj-generator@1.2.4/dist/bundle.js"></script>
```

jsdelivr:

```bash
https://cdn.jsdelivr.net/npm/cpf_and_cnpj-generator@1.2.4/+esm
```

```html
<script type="module">
  import {
    generateCpf,
    generateCnpj,
  } from "https://cdn.jsdelivr.net/npm/cpf_and_cnpj-generator@1.2.4/+esm";
</script>
```

### Installation

You can install this package using npm:

```bash
npm install cpf_and_cnpj-generator
```

```bash
yarn add cpf_and_cnpj-generator
```

```bash
pnpm add cpf_and_cnpj-generator
```

## How to Use

After installing the package, you can use it in your JavaScript/TypeScript project:

### ES Modules

```javascript
import generator from "cpf_and_cnpj-generator";

console.log(generator.generateCnpj());
console.log(generator.generateCpf());
```

```javascript
import { generateCnpj, generateCpf } from "cpf_and_cnpj-generator";

console.log(generateCnpj());
console.log(generateCpf());
```

### CommonJS

```javascript
const generator = require("cpf_and_cnpj-generator");

console.log("CPF generated:", generator.generateCnpj());
console.log("CNPJ generated:", generator.generateCpf());
```

```javascript
const { generateCpf, generateCnpj } = require("cpf_and_cnpj-generator");

console.log("CPF generated:", generateCnpj());
console.log("CNPJ generated:", generateCpf());
```

Keep in mind that the code to import or require depends on the JavaScript environment you're running the package in (for example, Node.js with or without ES module support). Therefore, choose the import or require option that suits your environment.
