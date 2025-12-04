import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function JavaPage() {
	return (
		<main className="mx-auto flex min-h-screen flex-col bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white sm:p-6 md:p-10 lg:p-12">
			<h1 className="mb-4 text-4xl font-bold">Java - cpf-and-cnpj-generator</h1>

			<p className="mb-6 text-gray-600 dark:text-gray-300">
				This Java package provides a readable and efficient code to generate
				valid CPF (Cadastro de Pessoas Físicas) and CNPJ (Cadastro Nacional da
				Pessoa Jurídica) numbers for Brazil.
			</p>

			<div className="mb-6">
				<Link
					href="https://github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/tree/main/packages/java"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
				>
					View on GitHub →
				</Link>
			</div>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-bold">Requirements</h2>
				<ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
					<li>Java 8 or higher</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-bold">Download</h2>
				<p className="mb-3 text-gray-600 dark:text-gray-300">
					Download the JAR file from the project:
				</p>
				<Link
					href="https://github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/raw/refs/heads/main/packages/java/dist/cpf_and_cnpj-generator-0.0.1.jar"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
				>
					Download JAR
				</Link>
				<p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
					You can also copy the source code directly from GitHub and use it in
					your project.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-bold">Usage</h2>
				<p className="mb-3 text-gray-600 dark:text-gray-300">
					Here is an example of how to use the functions in this package:
				</p>
				<SyntaxHighlighter language="java" style={a11yDark}>
					{`import com.cpfandcnpj.generator.CpfGenerator;
import com.cpfandcnpj.generator.CnpjGenerator;

public class Main {
    public static void main(String[] args) {
        String cpf = CpfGenerator.generate();
        String cnpj = CnpjGenerator.generate();

        System.out.println("Generated CPF: " + cpf);
        System.out.println("Generated CNPJ: " + cnpj);
    }
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
