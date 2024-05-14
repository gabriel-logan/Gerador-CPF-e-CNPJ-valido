import Image from "next/image";
import Link from "next/link";

import javaScriptIcon from "@/icons/javascript-icon.svg";
import pythonIcon from "@/icons/python-icon.svg";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-gray-100 p-2 sm:p-4 md:p-8 lg:p-10">
			<h1 className="mb-4 text-center text-3xl font-bold text-blue-600">
				Documentation
			</h1>
			<p className="mb-4 text-center text-gray-700">
				Este pacote npm fornece funções em JavaScript/Typescript/Python para
				gerar números válidos de CPF (Cadastro de Pessoas Físicas) e CNPJ
				(Cadastro Nacional da Pessoa Jurídica) para o Brasil.
			</p>

			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-10">
				<Link
					href="/js"
					className="flex cursor-pointer flex-col items-center justify-center rounded bg-white p-4 shadow hover:scale-105 active:scale-100"
				>
					<div className="flex flex-col items-center">
						<Image
							src={javaScriptIcon}
							alt="Javascript"
							width={50}
							height={50}
						/>
						<h2 className="mt-2 text-xl font-semibold text-gray-800">
							Javascript / Typescript
						</h2>
						<p className="text-gray-600">See documentation</p>
					</div>
				</Link>

				<Link
					href="/py"
					className="flex cursor-pointer flex-col items-center justify-center rounded bg-white p-4 shadow hover:scale-105 active:scale-100"
				>
					<div className="flex flex-col items-center">
						<Image src={pythonIcon} alt="Python" width={50} height={50} />
						<h2 className="mt-2 text-xl font-semibold text-gray-800">Python</h2>
						<p className="text-gray-600">See documentation</p>
					</div>
				</Link>
			</div>
		</main>
	);
}
