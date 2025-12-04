import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "CPF and CNPJ Generator / Gerador de CPF e CNPJ",
	description:
		"Biblioteca para gerar números válidos de CPF e CNPJ para o Brasil. Disponível em JavaScript, TypeScript, Python, Go, Java e C.",
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
		"typescript",
		"python",
		"go",
		"java",
		"c",
		"brasil",
		"cpfGenerator",
		"cnpjGenerator",
		"cpf generator",
		"cnpj generator",
		"gerador de cpf",
		"gerador de cnpj",
		"gerador de cpf e cnpj",
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
