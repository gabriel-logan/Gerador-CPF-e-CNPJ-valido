import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import CodeDoc from "@/components/CodeDoc";

export default function JavaScriptPage() {
	return (
		<main className="mx-auto flex min-h-screen flex-col bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white sm:p-6 md:p-10 lg:p-12">
			<h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
				JavaScript / TypeScript - cpf_and_cnpj-generator
			</h1>
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Este pacote npm fornece funções em JavaScript/TypeScript para gerar
				números válidos de CPF (Cadastro de Pessoas Físicas) e CNPJ (Cadastro
				Nacional da Pessoa Jurídica) para o Brasil.
			</p>
			<CodeDoc />
			<p className="mb-4 text-gray-600 dark:text-gray-300">
				Você também pode testar o cdn nesta página, digitando generateCnpj() ou
				generateCpf() no console log do navegador.
			</p>
			<p className="mb-4 text-gray-600 dark:text-gray-300">
				If you want to help me, you can buy me a coffee (:
			</p>
			<div className="mb-6 h-16 w-52">
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
			<p className="mb-6 text-gray-600 dark:text-gray-300">
				Lembre-se de que o código de importação ou require depende do ambiente
				JavaScript em que você está executando o pacote (por exemplo, Node.js
				com suporte a módulos ES ou sem suporte). Portanto, escolha a opção de
				importação ou require adequada ao seu ambiente.
			</p>
			<div className="mt-auto flex justify-center pt-8">
				<Link
					href="/"
					className="text-blue-500 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
				>
					← Back to Home
				</Link>
			</div>
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
			<Script src="https://unpkg.com/cpf_and_cnpj-generator@1.3.1/dist/index.js" />
		</main>
	);
}
