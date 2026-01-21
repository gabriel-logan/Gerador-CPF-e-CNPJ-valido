// Feito por: Logan

const ALPHANUMERIC_CHARS: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomChar(): string {
  const index: number = Math.floor(Math.random() * ALPHANUMERIC_CHARS.length);

  return ALPHANUMERIC_CHARS.charAt(index);
}

export function charToValue(char: string): number {
  const ascii: number | undefined = char.codePointAt(0);

  if (ascii === undefined) {
    throw new Error("Invalid character");
  }

  if (ascii >= 48 && ascii <= 57) {
    return ascii - 48;
  }

  if (ascii >= 65 && ascii <= 90) {
    return ascii - 48;
  }

  throw new Error("Character out of range");
}

function calculateDigitVerifier(cnpjChars: string[]): number {
  let weight: number = 2;
  let sum: number = 0;

  for (let i: number = cnpjChars.length - 1; i >= 0; i--) {
    sum += charToValue(cnpjChars[i]) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }

  const remainder: number = sum % 11;

  return remainder === 0 || remainder === 1 ? 0 : 11 - remainder;
}

function generateBaseCNPJ(): string[] {
  const base: string[] = [];

  for (let i: number = 0; i < 12; i++) {
    base.push(getRandomChar());
  }

  return base;
}

/**
 * Generates a valid alphanumeric CNPJ according to official technical rules (SERPRO).
 * @returns A valid alphanumeric CNPJ (14 characters)
 * @description - Made by: Logan
 */
function generateValidCNPJ(): string {
  const cnpj: string[] = generateBaseCNPJ();

  const firstDV: number = calculateDigitVerifier(cnpj);
  cnpj.push(firstDV.toString());

  const secondDV: number = calculateDigitVerifier(cnpj);
  cnpj.push(secondDV.toString());

  return cnpj.join("");
}

export default generateValidCNPJ;
