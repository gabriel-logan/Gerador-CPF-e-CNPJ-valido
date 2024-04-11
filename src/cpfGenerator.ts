function geraEValida(): string {
	// Função que executa todo código.
	const cpfStored: string[] = [];
	for (let generator: number = 0; generator < 11; generator++) {
		// Gera um número aleatório de 9 dígitos.
		const randomNumber0to9: string = (Math.random() * 9).toFixed(0);
		cpfStored.push(randomNumber0to9);
	}
	const cpfStoredString: string = cpfStored.join(""); // cpfStoredString armazena o valor da lista cpfStored em forma de string
	let numberoBase: number = 10;
	let numberoBase2: number = 11;
	let somaTotal: number = 0;
	let somaTotal2: number = 0;

	let primeiroVerificador: number = 0;
	let segundoVerificador: number = 0;

	for (let repetidor: number = 0; repetidor < 11; repetidor++) {
		// Executa os códigos 11 vezes em sequência.
		for (const contador of cpfStoredString[repetidor]) {
			// Faz a soma numérica de todos os números gerados por multiplicador.
			const multiplicador: number = parseInt(contador) * numberoBase;
			numberoBase--;
			somaTotal += multiplicador;
		}
		for (const contador2 of cpfStoredString[repetidor]) {
			// Faz a soma numérica de todos os números gerados por multiplicador2.
			const multiplicador2: number = parseInt(contador2) * numberoBase2;
			numberoBase2--;
			somaTotal2 += multiplicador2;
		}
		const valorDeVerificacao: number = somaTotal - parseInt(cpfStoredString[9]); // Coleta a soma apenas até o 9° número da sequência
		const valorDeVerificacao2: number =
			somaTotal2 - parseInt(cpfStoredString[10]); // Coleta a soma apenas até o 10° número da sequência

		primeiroVerificador = 11 - (valorDeVerificacao % 11); // Calcula o Primeiro digito verificador
		segundoVerificador = 11 - (valorDeVerificacao2 % 11); // Calcula o Segundo Digito verificador
	}

	// Condições se o número verificador for maior que 9, então o valor dele tem que ser 0
	if (primeiroVerificador > 9) {
		primeiroVerificador = 0;
	}

	if (segundoVerificador > 9) {
		segundoVerificador = 0;
	}

	// Valida o Numero gerado, se = true, CPF GERADO.
	if (
		primeiroVerificador === Number(cpfStoredString[9]) &&
		segundoVerificador === Number(cpfStoredString[10]) &&
		!cpfStoredString.split("").every((digit, _, arr) => digit === arr[0]) // Verifica se todos os dígitos são iguais
	) {
		//console.log(`CPF VALIDO GERADO: ${cpfStoredString}`);
		return cpfStoredString;
	} // Se a condição for falsa, a função será executada automaticamente sozinha, até que um valor seja verdadeiro.
	return geraEValida();
}

export default geraEValida;
