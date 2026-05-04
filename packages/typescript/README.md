# Gerador de CPF e CNPJ

[![npm version](https://badge.fury.io/js/cpf_and_cnpj-generator.svg?refresh=5)](https://badge.fury.io/js/cpf_and_cnpj-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/cpf_and_cnpj-generator.svg?style=flat-square)](https://npm-stat.com/charts.html?package=cpf_and_cnpj-generator)

Este pacote fornece funções em JavaScript/TypeScript para gerar **CPFs** e **CNPJs válidos**, incluindo suporte à **nova norma de CNPJ alfanumérico definida pela Receita Federal (SERPRO)**.

O objetivo é oferecer uma API simples, com suporte ao padrão novo e uma implementação mais cuidadosa do que a normalmente encontrada em bibliotecas desse tipo.

---

## 📘 Documentação

https://gabriel-logan.github.io/Gerador-CPF-e-CNPJ-valido

---

## 🌐 CDN

Atualmente, o pacote oferece **suporte oficial apenas via ESM**, utilizando **jsDelivr**.

```bash
https://cdn.jsdelivr.net/npm/cpf_and_cnpj-generator@1.5.6/+esm
```

### Uso via CDN (ESM)

```html
<script type="module">
  import generator from "https://cdn.jsdelivr.net/npm/cpf_and_cnpj-generator@1.5.6/+esm";
  import {
    generateCpf,
    generateCnpj,
  } from "https://cdn.jsdelivr.net/npm/cpf_and_cnpj-generator@1.5.6/+esm";

  generator.generateCpf();
  generator.generateCnpj();

  generateCpf();
  generateCnpj();
</script>
```

---

## 📦 Instalação

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

## 🚀 Como Usar

### ES Modules

```js
import generator from "cpf_and_cnpj-generator";

generator.generateCpf();
generator.generateCnpj();
```

```js
import { generateCpf, generateCnpj } from "cpf_and_cnpj-generator";

generateCpf();
generateCnpj();
```

### CommonJS

```js
const generator = require("cpf_and_cnpj-generator");

generator.generateCpf();
generator.generateCnpj();
```

```js
const { generateCpf, generateCnpj } = require("cpf_and_cnpj-generator");

generateCpf();
generateCnpj();
```

---

## 🏢 Geração de CNPJ — Versões Suportadas

> Disponível a partir da versão **`>= 1.5.0`**
> Esta versão inclui suporte à **nova norma oficial de CNPJ alfanumérico**.

O gerador de CNPJ suporta **duas normas oficiais**:

### 🔹 `"v1"` — CNPJ Numérico (norma tradicional)

- Formato: **14 dígitos numéricos**
- Exemplo: `12.345.678/0001-95`
- Norma amplamente utilizada
- **Versão padrão do gerador**

### 🔹 `"v2"` — CNPJ Alfanumérico (nova norma oficial)

- Formato: **12 caracteres alfanuméricos + 2 dígitos verificadores**
- Exemplo: `12.ABC.345/01DE-35`
- Norma oficial da Receita Federal / SERPRO
- Utiliza:
  - Conversão ASCII (`ASCII - 48`)
  - Módulo 11
  - Pesos de 2 a 9

---

### 📌 Uso das versões de CNPJ

```js
import { generateCnpj, CNPJ_VERSIONS } from "cpf_and_cnpj-generator";

// Aleatório entre v1 e v2
generateCnpj();

// Explícito
generateCnpj("v1");

// Nova norma alfanumérica
generateCnpj("v2");

// Usando constantes
generateCnpj(CNPJ_VERSIONS.V1);
generateCnpj(CNPJ_VERSIONS.V2);
```

> Sem argumento, `generateCnpj()` escolhe aleatoriamente entre `"v1"` e `"v2"`.

---

## ☕ Apoie o projeto

Se este pacote te ajudou, considere pagar um café ☺️

<p align="center">
  <a href="https://www.buymeacoffee.com/gabriellogan" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
         style="height:35px;width:180px">
  </a>
</p>
