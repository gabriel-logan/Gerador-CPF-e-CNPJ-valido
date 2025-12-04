import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function GoPage() {
	return (
		<main className="mx-auto flex min-h-screen flex-col bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white sm:p-6 md:p-10 lg:p-12">
			<h1 className="mb-4 text-4xl font-bold">Go - cpf-and-cnpj-generator</h1>

			<p className="mb-6 text-gray-600 dark:text-gray-300">
				This Go package provides functions to generate valid CPF (Cadastro de
				Pessoas Físicas) and CNPJ (Cadastro Nacional da Pessoa Jurídica) numbers
				for Brazil.
			</p>

			<div className="mb-6 flex flex-wrap gap-4">
				<Link
					href="https://github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/tree/main/packages/go"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
				>
					View on GitHub →
				</Link>
				<Link
					href="https://pkg.go.dev/github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
				>
					View on pkg.go.dev →
				</Link>
			</div>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-bold">Installation</h2>
				<SyntaxHighlighter language="bash" style={a11yDark}>
					go get github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go
				</SyntaxHighlighter>
			</section>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-bold">Usage</h2>
				<p className="mb-3 text-gray-600 dark:text-gray-300">
					Here is an example of how to use the functions in this package:
				</p>
				<SyntaxHighlighter language="go" style={a11yDark}>
					{`package main

import (
	"fmt"

	"github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj"
)

func main() {
	cpf := cpfandcnpj.GenerateCPF()
	cnpj := cpfandcnpj.GenerateCNPJ()

	fmt.Println("Generated CPF:", cpf)
	fmt.Println("Generated CNPJ:", cnpj)
}`}
				</SyntaxHighlighter>
			</section>

			<div className="mt-auto flex justify-center pt-8">
				<Link
					href="/"
					className="text-blue-500 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
				>
					← Back to Home
				</Link>
			</div>
		</main>
	);
}
