# CPF and CNPJ Generator

[![npm version](https://badge.fury.io/js/cpf_and_cnpj-generator.svg?refresh=5)](https://badge.fury.io/js/cpf_and_cnpj-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/cpf_and_cnpj-generator.svg?style=flat-square)](https://npm-stat.com/charts.html?package=cpf_and_cnpj-generator)

This package provides JavaScript/TypeScript utilities to generate **valid Brazilian CPF and CNPJ numbers**, including support for the **new official alphanumeric CNPJ standard defined by Receita Federal (SERPRO)**.

---

## 📘 Documentation

https://gabriel-logan.github.io/Gerador-CPF-e-CNPJ-valido

---

## 🌐 CDN

Currently, the package offers **official support only via ESM**, using **jsDelivr**.

```bash
https://cdn.jsdelivr.net/npm/cpf_and_cnpj-generator@1.5.4/+esm
```

### Usage via CDN (ESM)

```html
<script type="module">
  import generator from "https://cdn.jsdelivr.net/npm/cpf_and_cnpj-generator@1.5.4/+esm";
  import {
    generateCpf,
    generateCnpj,
  } from "https://cdn.jsdelivr.net/npm/cpf_and_cnpj-generator@1.5.4/+esm";

  generator.generateCpf();
  generator.generateCnpj();

  generateCpf();
  generateCnpj();
</script>
```

---

## 📦 Installation

```bash
npm install cpf_and_cnpj-generator
```

```bash
yarn add cpf_and_cnpj-generator
```

```bash
pnpm add cpf_and_cnpj-generator
```

---

## 🚀 Usage

### ES Modules

```js
import { generateCpf, generateCnpj } from "cpf_and_cnpj-generator";

generateCpf();
generateCnpj();
```

### CommonJS

```js
const { generateCpf, generateCnpj } = require("cpf_and_cnpj-generator");

generateCpf();
generateCnpj();
```

---

## 🏢 CNPJ Generator — Supported Versions

> Available from version **`>= 1.5.0`**
> This version includes support for the **new official alphanumeric CNPJ standard**.

### 🔹 `"v1"` — Numeric CNPJ (legacy standard)

- Format: **14 numeric digits**
- Example: `12.345.678/0001-95`
- Default generator version

### 🔹 `"v2"` — Alphanumeric CNPJ (new official standard)

- Format: **12 alphanumeric characters + 2 numeric check digits**
- Example: `12.ABC.345/01DE-35`
- Official standard by Receita Federal / SERPRO
- Uses:
  - ASCII-based conversion
  - Modulo 11
  - Weights from 2 to 9

---

### 📌 CNPJ version usage

```js
import { generateCnpj, CNPJ_VERSIONS } from "cpf_and_cnpj-generator";

generateCnpj(); // default v1
generateCnpj("v1"); // numeric
generateCnpj("v2"); // alphanumeric

generateCnpj(CNPJ_VERSIONS.V1);
generateCnpj(CNPJ_VERSIONS.V2);
```

---

## ☕ Support the project

If this package helped you, consider buying me a coffee 🙂

<p align="center">
  <a href="https://www.buymeacoffee.com/gabriellogan" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
         style="height:35px;width:180px">
  </a>
</p>
