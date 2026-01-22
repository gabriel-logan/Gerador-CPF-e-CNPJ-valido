const ALPHANUMERIC_CHARS: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generateValidCNPJ(): string {
  const numericValues: Uint8Array = new Uint8Array(14);

  for (let index: number = 0; index < 12; index++) {
    numericValues[index] = Math.trunc(Math.random() * 36);
  }

  let sum: number = 0;
  let weight: number = 2;

  for (let index: number = 11; index >= 0; index--) {
    const value: number = numericValues[index];

    const normalizedValue: number = value < 10 ? value : value + 7;

    sum += normalizedValue * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }

  const firstRemainder: number = sum % 11;

  numericValues[12] = firstRemainder < 2 ? 0 : 11 - firstRemainder;

  sum = 0;
  weight = 2;

  for (let index: number = 12; index >= 0; index--) {
    const value: number = numericValues[index];

    const normalizedValue: number = value < 10 ? value : value + 7;

    sum += normalizedValue * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }

  const secondRemainder: number = sum % 11;

  numericValues[13] = secondRemainder < 2 ? 0 : 11 - secondRemainder;

  return (
    ALPHANUMERIC_CHARS[numericValues[0]] +
    ALPHANUMERIC_CHARS[numericValues[1]] +
    ALPHANUMERIC_CHARS[numericValues[2]] +
    ALPHANUMERIC_CHARS[numericValues[3]] +
    ALPHANUMERIC_CHARS[numericValues[4]] +
    ALPHANUMERIC_CHARS[numericValues[5]] +
    ALPHANUMERIC_CHARS[numericValues[6]] +
    ALPHANUMERIC_CHARS[numericValues[7]] +
    ALPHANUMERIC_CHARS[numericValues[8]] +
    ALPHANUMERIC_CHARS[numericValues[9]] +
    ALPHANUMERIC_CHARS[numericValues[10]] +
    ALPHANUMERIC_CHARS[numericValues[11]] +
    ALPHANUMERIC_CHARS[numericValues[12]] +
    ALPHANUMERIC_CHARS[numericValues[13]]
  );
}

export default generateValidCNPJ;
