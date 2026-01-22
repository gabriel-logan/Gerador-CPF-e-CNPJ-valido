import { AlphaChars09AZ, uintArray14 } from "./constants";

function generateValidCNPJ(): string {
  for (let index: number = 0; index < 12; index++) {
    uintArray14[index] = Math.trunc(Math.random() * 36);
  }

  let sum: number = 0;
  let weight: number = 2;

  for (let index: number = 11; index >= 0; index--) {
    const value: number = uintArray14[index];

    const normalizedValue: number = value < 10 ? value : value + 7;

    sum += normalizedValue * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }

  const firstRemainder: number = sum % 11;

  uintArray14[12] = firstRemainder < 2 ? 0 : 11 - firstRemainder;

  sum = 0;
  weight = 2;

  for (let index: number = 12; index >= 0; index--) {
    const value: number = uintArray14[index];

    const normalizedValue: number = value < 10 ? value : value + 7;

    sum += normalizedValue * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }

  const secondRemainder: number = sum % 11;

  uintArray14[13] = secondRemainder < 2 ? 0 : 11 - secondRemainder;

  return (
    AlphaChars09AZ[uintArray14[0]] +
    AlphaChars09AZ[uintArray14[1]] +
    AlphaChars09AZ[uintArray14[2]] +
    AlphaChars09AZ[uintArray14[3]] +
    AlphaChars09AZ[uintArray14[4]] +
    AlphaChars09AZ[uintArray14[5]] +
    AlphaChars09AZ[uintArray14[6]] +
    AlphaChars09AZ[uintArray14[7]] +
    AlphaChars09AZ[uintArray14[8]] +
    AlphaChars09AZ[uintArray14[9]] +
    AlphaChars09AZ[uintArray14[10]] +
    AlphaChars09AZ[uintArray14[11]] +
    AlphaChars09AZ[uintArray14[12]] +
    AlphaChars09AZ[uintArray14[13]]
  );
}

export default generateValidCNPJ;
