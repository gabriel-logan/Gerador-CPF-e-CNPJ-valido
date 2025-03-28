# Gerador de CPF e CNPJ

[![npm version](https://badge.fury.io/js/cpf_and_cnpj-generator.svg?refresh=5)](https://badge.fury.io/js/cpf_and_cnpj-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/cpf_and_cnpj-generator.svg?style=flat-square)](https://npm-stat.com/charts.html?package=cpf_and_cnpj-generator)

Este pacote npm fornece funções em JavaScript para gerar números válidos de CPF (Cadastro de Pessoas Físicas) e CNPJ (Cadastro Nacional da Pessoa Jurídica) para o Brasil.

## DOC

https://gabriel-logan.github.io/Gerador-CPF-e-CNPJ-valido

## CDN

### DEFAULT

jsdelivr:

```bash
https://cdn.jsdelivr.net/npm/cpf_and_cnpj-generator@1.3.2/dist/index.min.js
```

```html
<script src="https://cdn.jsdelivr.net/npm/cpf_and_cnpj-generator@1.3.2/dist/index.min.js"></script>
```

unpkg:

```bash
https://unpkg.com/cpf_and_cnpj-generator@1.3.2/dist/index.js
```

```html
<script src="https://unpkg.com/cpf_and_cnpj-generator@1.3.2/dist/index.js"></script>
```

### ESM

jsdelivr:

```bash
https://cdn.jsdelivr.net/npm/cpf_and_cnpj-generator@1.3.2/+esm
```

```html
<script type="module">
  import {
    generateCpf,
    generateCnpj,
  } from "https://cdn.jsdelivr.net/npm/cpf_and_cnpj-generator@1.3.2/+esm";
</script>
```

## Instalação

Você pode instalar este pacote usando npm:

```bash
npm install cpf_and_cnpj-generator
```

```bash
yarn add cpf_and_cnpj-generator
```

```bash
pnpm add cpf_and_cnpj-generator
```

## Como Usar

Após instalar o pacote, você pode utilizá-lo em seu projeto JavaScript/TypeScript:

### ES Modules

```javascript
import gerador from "cpf_and_cnpj-generator";

console.log(gerador.generateCnpj());
console.log(gerador.generateCpf());
```

```javascript
import { generateCnpj, generateCpf } from "cpf_and_cnpj-generator";

console.log(generateCnpj());
console.log(generateCpf());
```

### CommonJS

```javascript
const gerador = require("cpf_and_cnpj-generator");

console.log("CPF Gerado:", gerador.generateCnpj());
console.log("CNPJ Gerado:", gerador.generateCpf());
```

```javascript
const { generateCpf, generateCnpj } = require("cpf_and_cnpj-generator");

console.log("CPF Gerado:", generateCnpj());
console.log("CNPJ Gerado:", generateCpf());
```

If you want to help me, you can buy me a coffee (:

<p align="center">
	<a href="https://www.buymeacoffee.com/gabriellogan" target="_blank">
		<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 35px !important;width: 180px !important;" >
	</a>
</p>

Lembre-se de que a forma de importar ou requerer um pacote depende do ambiente JavaScript em que você está rodando (por exemplo, Node.js com ou sem suporte a módulos ES). Escolha o método que melhor se adapta ao seu ambiente.
