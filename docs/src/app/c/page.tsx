import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CPage() {
	return (
		<main className="mx-auto flex min-h-screen flex-col bg-gray-900 p-4 text-white sm:p-6 md:p-10 lg:p-12">
			<h1 className="mb-4 text-4xl font-bold">C - cpf-and-cnpj-generator</h1>

			<p className="mb-6 text-gray-300">
				This C implementation provides functions to generate valid CPF (Cadastro
				de Pessoas Físicas) and CNPJ (Cadastro Nacional da Pessoa Jurídica)
				numbers for Brazil.
			</p>

			<div className="mb-6">
				<Link
					href="https://github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/tree/main/packages/c"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-400 hover:text-blue-300 hover:underline"
				>
					View on GitHub →
				</Link>
			</div>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-bold">Compilation & Usage</h2>
				<p className="mb-3 text-gray-300">Compile and run the CPF generator:</p>
				<SyntaxHighlighter language="bash" style={a11yDark}>
					{`gcc cpfGenerator.c -o cpfGenerator
./cpfGenerator`}
				</SyntaxHighlighter>

				<p className="mb-3 mt-4 text-gray-300">
					Compile and run the CNPJ generator:
				</p>
				<SyntaxHighlighter language="bash" style={a11yDark}>
					{`gcc cnpjGenerator.c -o cnpjGenerator
./cnpjGenerator`}
				</SyntaxHighlighter>
			</section>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-bold">Source Files</h2>
				<p className="mb-3 text-gray-300">
					The source files are available in the GitHub repository:
				</p>
				<ul className="list-disc pl-6 text-gray-300">
					<li>
						<code className="rounded bg-gray-700 px-1">cpfGenerator.c</code> -
						CPF generation source code
					</li>
					<li>
						<code className="rounded bg-gray-700 px-1">cnpjGenerator.c</code> -
						CNPJ generation source code
					</li>
				</ul>
			</section>

			<div className="mt-auto flex justify-center pt-8">
				<Link
					href="/"
					className="text-blue-400 hover:text-blue-300 hover:underline"
				>
					← Back to Home
				</Link>
			</div>
		</main>
	);
}
