// Feito por: Logan

// Função para gerar um dígito aleatório entre 0 e 9
function randomDigit() {
	return Math.floor(Math.random() * 10);
}

// Função para gerar os 12 primeiros dígitos do CNPJ
function generateCNPJBase() {
	const cnpjBase: number[] = [];
	for (let i: number = 0; i < 12; i++) {
		cnpjBase.push(randomDigit());
	}
	return cnpjBase;
}

// Função para calcular o primeiro dígito verificador
function calculateFirstVerifier(cnpjBase: number[]) {
	const weight: number[] = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
	let sum: number = 0;
	for (let i: number = 0; i < 12; i++) {
		sum += cnpjBase[i] * weight[i];
	}
	const remainder: number = sum % 11;
	return remainder < 2 ? 0 : 11 - remainder;
}

// Função para calcular o segundo dígito verificador
function calculateSecondVerifier(cnpjBase: number[], firstVerifier: number) {
	const weight: number[] = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
	let sum: number = 0;
	for (let i: number = 0; i < 12; i++) {
		sum += cnpjBase[i] * weight[i];
	}
	sum += firstVerifier * weight[12];
	const remainder: number = sum % 11;
	return remainder < 2 ? 0 : 11 - remainder;
}

/**
 * Made by: Logan
 * Function to generate a valid CNPJ
 * @returns {string} - Returns a valid CNPJ
 */
function generateValidCNPJ() {
	const cnpjBase: number[] = generateCNPJBase();
	const firstVerifier: number = calculateFirstVerifier(cnpjBase);
	const secondVerifier: number = calculateSecondVerifier(
		cnpjBase.concat(firstVerifier),
		firstVerifier,
	);
	return `${cnpjBase.join("")}${String(firstVerifier)}${String(secondVerifier)}`;
}

export default generateValidCNPJ();
