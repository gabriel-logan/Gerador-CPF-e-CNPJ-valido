/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.buymeacoffee.com",
			},
		],
		unoptimized: true,
	},
	output: "export",
	distDir: "page",
	basePath:
		process.env.NODE_ENV === "production"
			? "/Gerador-CPF-e-CNPJ-valido"
			: undefined,
};

export default nextConfig;
