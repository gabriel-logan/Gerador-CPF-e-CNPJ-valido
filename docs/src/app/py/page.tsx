import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Home() {
	return (
		<main className="mx-auto flex min-h-screen flex-col bg-gray-900 p-2 text-white sm:p-4 md:p-8 lg:p-10">
			<h1 className="mb-4 text-4xl font-bold">cpf-and-cnpj-generator</h1>

			<p className="mb-4">
				This Python package provides functions to generate valid CPF (Cadastro
				de Pessoas Físicas) and CNPJ (Cadastro Nacional da Pessoa Jurídica)
				numbers for Brazil.
			</p>

			<div className="mb-4">
				<Link
					href="https://github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/tree/main/packages/python"
					className="mr-2 text-blue-500 hover:text-blue-700"
				>
					See github
				</Link>
				<Link
					href="https://pypi.org/project/cpf-and-cnpj-generator/"
					className="text-blue-500 hover:text-blue-700"
				>
					See Pypi page
				</Link>
			</div>

			<div className="mb-4">
				<h2 className="mb-2 text-2xl font-bold">Instalation</h2>
				<SyntaxHighlighter language="bash" style={a11yDark}>
					pip install cpf-and-cnpj-generator
				</SyntaxHighlighter>
			</div>

			<div className="mb-4">
				<h2 className="mb-2 text-2xl font-bold">Usage</h2>
				<p className="mb-2">
					Here is an example of how to use the functions in this package:
				</p>
				<SyntaxHighlighter language="python" style={a11yDark}>
					from cpf_and_cnpj_generator import generate_cnpj, generate_cpf
				</SyntaxHighlighter>
				<SyntaxHighlighter language="python" style={a11yDark}>
					{`# Generate a valid CNPJ
cnpj = generate_cnpj()
print(cnpj)

# Generate a valid CPF
cpf = generate_cpf()
print(cpf)`}
				</SyntaxHighlighter>
			</div>

			<div className="flex justify-center">
				<Link href="/" className="text-blue-500 hover:text-blue-700">
					Voltar
				</Link>
			</div>
		</main>
	);
}
