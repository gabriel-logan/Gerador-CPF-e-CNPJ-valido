// Feito por: Logan

import randomDigit from "./randomDigit";

// Função para calcular o primeiro dígito verificador
function calculateFirstVerifier(cnpjBase: number[]): number {
  const weight: number[] = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] as const;

  let sum: number = 0;

  for (let i: number = 0; i < 12; i++) {
    sum += cnpjBase[i] * weight[i];
  }

  const remainder: number = sum % 11;

  return remainder < 2 ? 0 : 11 - remainder;
}

// Função para calcular o segundo dígito verificador
function calculateSecondVerifier(
  cnpjBase: number[],
  firstVerifier: number,
): number {
  const weight: number[] = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] as const;

  let sum: number = 0;

  for (let i: number = 0; i < 12; i++) {
    sum += cnpjBase[i] * weight[i];
  }

  sum += firstVerifier * weight[12];

  const remainder: number = sum % 11;

  return remainder < 2 ? 0 : 11 - remainder;
}

function generateValidCNPJ(): string {
  const cnpjBase: number[] = new Array<number>(14);

  for (let i: number = 0; i < 12; i++) {
    cnpjBase[i] = randomDigit();
  }

  cnpjBase[12] = calculateFirstVerifier(cnpjBase);

  cnpjBase[13] = calculateSecondVerifier(cnpjBase, cnpjBase[12]);

  return cnpjBase.join("");
}

export default generateValidCNPJ;
