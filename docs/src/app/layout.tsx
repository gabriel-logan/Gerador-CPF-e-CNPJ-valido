import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "CPF and CNPJ Generator / Gerador de CPF e CNPJ",
	description:
		"Este pacote npm fornece funções em JavaScript para gerar números válidos de CPF (Cadastro de Pessoas Físicas) e CNPJ (Cadastro Nacional da Pessoa Jurídica) para o Brasil.",
	authors: {
		name: "Gabriel Logan",
		url: "https://github.com/gabriel-logan",
	},
	category: "Library",
	creator: "Gabriel Logan",
	keywords: [
		"cpf",
		"cnpj",
		"generator",
		"gerador",
		"javascript",
		"brasil",
		"cpfGenerator",
		"cnpjGenerator",
		"cpf generator",
		"cnpj generator",
		"gerador de cpf",
		"gerador de cnpj",
		"gerador de cpf e cnpj",
		"gerador de cpf e cnpj em javascript",
		"gerador de cpf e cnpj em js",
		"generateCpf",
		"generateCnpj",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
