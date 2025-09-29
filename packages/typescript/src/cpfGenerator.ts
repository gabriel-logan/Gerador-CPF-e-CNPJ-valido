/**
 * Generates a valid CPF (Brazilian identification number).
 * @returns Returns a valid CPF
 * @description - Made by: Logan
 */
function geraEValida(): string {
  const cpfArray: number[] = new Array<number>(11);

  // Generates an array of 9 random numbers
  for (let i: number = 0; i < 9; i++) {
    cpfArray[i] = (Math.random() * 10) | 0;
  }

  // Calculates the first verifier digit
  let sum: number = 0;
  for (let i: number = 0; i < 9; i++) {
    sum += cpfArray[i] * (10 - i);
  }
  cpfArray[9] = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  // Calculates the second verifier digit
  sum = 0;
  for (let i: number = 0; i < 10; i++) {
    sum += cpfArray[i] * (11 - i);
  }
  cpfArray[10] = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  // Returns the generated CPF as a string
  return cpfArray.join("");
}

export default geraEValida;
