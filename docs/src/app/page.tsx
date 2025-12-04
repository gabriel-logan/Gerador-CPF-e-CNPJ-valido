import Image from "next/image";
import Link from "next/link";

import cIcon from "@/icons/c-icon.svg";
import goIcon from "@/icons/go-icon.svg";
import javaIcon from "@/icons/java-icon.svg";
import javaScriptIcon from "@/icons/javascript-icon.svg";
import pythonIcon from "@/icons/python-icon.svg";

interface LanguageCardProps {
	href: string;
	icon: string;
	alt: string;
	title: string;
	description: string;
	badge?: string;
}

function LanguageCard({
	href,
	icon,
	alt,
	title,
	description,
	badge,
}: LanguageCardProps) {
	return (
		<Link
			href={href}
			className="group flex cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:scale-105 hover:border-blue-300 hover:shadow-md active:scale-100"
		>
			<div className="flex flex-col items-center">
				<div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 p-2 transition-colors group-hover:bg-blue-50">
					<Image src={icon} alt={alt} width={50} height={50} />
				</div>
				<h2 className="mt-2 text-xl font-semibold text-gray-800 group-hover:text-blue-600">
					{title}
				</h2>
				<p className="text-sm text-gray-500">{description}</p>
				{badge && (
					<span className="mt-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
						{badge}
					</span>
				)}
			</div>
		</Link>
	);
}

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-gray-100 p-4 sm:p-6 md:p-10 lg:p-12">
			{/* Header Section */}
			<header className="mb-10 text-center">
				<h1 className="mb-3 text-4xl font-bold text-blue-600 md:text-5xl">
					CPF & CNPJ Generator
				</h1>
				<p className="mx-auto max-w-2xl text-lg text-gray-600">
					Biblioteca para gerar números válidos de CPF (Cadastro de Pessoas
					Físicas) e CNPJ (Cadastro Nacional da Pessoa Jurídica) para o Brasil.
				</p>
			</header>

			{/* Languages Section */}
			<section className="mb-10">
				<h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">
					Linguagens Disponíveis
				</h2>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
					<LanguageCard
						href="/js"
						icon={javaScriptIcon}
						alt="JavaScript"
						title="JavaScript / TypeScript"
						description="npm package"
						badge="Stable"
					/>

					<LanguageCard
						href="/py"
						icon={pythonIcon}
						alt="Python"
						title="Python"
						description="PyPI package"
						badge="Stable"
					/>

					<LanguageCard
						href="/go"
						icon={goIcon}
						alt="Go"
						title="Go"
						description="Go module"
						badge="Stable"
					/>

					<LanguageCard
						href="/java"
						icon={javaIcon}
						alt="Java"
						title="Java"
						description="JAR package"
						badge="Stable"
					/>

					<LanguageCard
						href="/c"
						icon={cIcon}
						alt="C"
						title="C"
						description="Source code"
						badge="Stable"
					/>
				</div>
			</section>

			{/* Footer */}
			<footer className="mt-auto pt-8 text-center text-sm text-gray-500">
				<p>
					Open source project by{" "}
					<Link
						href="https://github.com/gabriel-logan"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 hover:underline"
					>
						Gabriel Logan
					</Link>
				</p>
				<p className="mt-2">
					<Link
						href="https://github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 hover:underline"
					>
						View on GitHub
					</Link>
				</p>
			</footer>
		</main>
	);
}
