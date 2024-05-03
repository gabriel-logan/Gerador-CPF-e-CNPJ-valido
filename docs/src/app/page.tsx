"use client";

import { generateCnpj, generateCpf } from "cpf_and_cnpj-generator";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Home() {
  const [cpf, setCpf] = useState(generateCpf());
  const [cnpj, setCnpj] = useState(generateCnpj());

  return (
    <main className="mx-auto flex flex-col p-2 sm:p-4 md:p-8 lg:p-10 ">
      <h1 className="mb-4 text-3xl font-bold">Documentation</h1>
      <p className="mb-4">
        Este pacote npm fornece funções em JavaScript/Typescript para gerar
        números válidos de CPF (Cadastro de Pessoas Físicas) e CNPJ (Cadastro
        Nacional da Pessoa Jurídica) para o Brasil.
      </p>
      <SyntaxHighlighter language="bash" style={a11yDark}>
        npm install cpf_and_cnpj-generator
      </SyntaxHighlighter>
      <p className="mb-4">ou</p>
      <SyntaxHighlighter language="bash" style={a11yDark}>
        yarn add cpf_and_cnpj-generator
      </SyntaxHighlighter>
      <div className="mb-4">
        <Link
          href="https://www.npmjs.com/package/cpf_and_cnpj-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 text-blue-500 underline"
        >
          Go to npm page
        </Link>
        <Link
          href="https://github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Go to github page
        </Link>
      </div>

      <h2 className="mb-4 text-2xl font-bold">Como Usar</h2>
      <div id="div_geradores" className="mb-4">
        <div className="mt-2 flex gap-2">
          <button
            id="gera-cpf"
            className="rounded bg-blue-950 px-4 py-2 text-white"
            onClick={() => setCpf(generateCpf())}
          >
            Gerar CPF
          </button>
          <p className="mt-2">
            CPF: <span id="response-cpf">{cpf}</span>
          </p>
          {/**<span className="cursor-pointer hover:text-blue-950">COPY</span> */}
        </div>
        <div className="mt-2 flex gap-2">
          <button
            id="gera-cnpj"
            className="rounded bg-blue-950 px-4 py-2 text-white"
            onClick={() => setCnpj(generateCnpj())}
          >
            Gerar CNPJ
          </button>
          <p className="mt-2">
            CNPJ: <span id="response-cnpj">{cnpj}</span>
          </p>
          {/**<span className="cursor-pointer hover:text-blue-950">COPY</span> */}
        </div>
      </div>
      <p className="mb-4">
        Após instalar o pacote, você pode utilizá-lo em seu projeto JavaScript:
      </p>

      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`import gerador from 'cpf_and_cnpj-generator';

console.log(gerador.generateCnpj());
console.log(gerador.generateCpf()); 

// Ou import diretamente os métodos

import { generateCnpj, generateCpf } from 'cpf_and_cnpj-generator';

console.log('CPF Gerado:', generateCnpj());
console.log('CNPJGerado:', generateCpf());

// Usando require 

const gerador = require('cpf_and_cnpj-generator');
// ou
const { generateCnpj, generateCpf } = require('cpf_and_cnpj-generator');

console.log('CPF Gerado:', gerador.generateCnpj());
console.log('CNPJGerado:', gerador.generateCpf());`}
      </SyntaxHighlighter>

      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {`// Pode testar o cdn usando 
<script src="https://unpkg.com/cpf_and_cnpj-generator@1.1.2/dist/bundle.js"></script>
// ou clicando nos botões na propria pagina`}
      </SyntaxHighlighter>

      <p className="mb-4">
        Você também pode testar o cdn nesta página, digitando generateCnpj() ou
        generateCpf() no console log do navegador
      </p>

      <p className="mb-4">If you want to help me, you can buy me a coffee (:</p>

      <div className="mb-4 h-16 w-52">
        <Link href="https://www.buymeacoffee.com/gabriellogan" target="_blank">
          <Image
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            width={0}
            height={0}
            className="h-auto w-auto"
            priority
          />
        </Link>
      </div>

      <p>
        Lembre-se de que o código de importação ou require depende do ambiente
        JavaScript em que você está executando o pacote (por exemplo, Node.js
        com suporte a módulos ES ou sem suporte). Portanto, escolha a opção de
        importação ou require adequada ao seu ambiente.
      </p>

      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="gabriellogan"
        data-description="Support me on Buy me a coffee!"
        data-message=""
        data-color="#5F7FFF"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
        defer
      />

      <Script src="https://unpkg.com/cpf_and_cnpj-generator@1.1.2/dist/bundle.js" />
    </main>
  );
}
