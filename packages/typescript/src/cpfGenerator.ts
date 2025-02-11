import randomDigit from "./randomDigit";

// Function to calculate the verifier digits
function calculateDigit(
  cpfArray: number[],
  length: number,
  factor: number,
): number {
  let sum: number = 0;

  for (let i: number = 0; i < length; i++) {
    sum += cpfArray[i] * (factor - i);
  }

  // If the sum is less than 2, the verifier digit is 0, otherwise it is 11 minus the remainder of the sum divided by 11
  return sum % 11 < 2 ? 0 : 11 - (sum % 11);
}

function geraEValida(): string {
  const cpfArray: number[] = new Array<number>(11);

  // Generates an array of 9 random numbers
  for (let i: number = 0; i < 9; i++) {
    cpfArray[i] = randomDigit();
  }

  // Calculates the first verifier digit
  cpfArray[9] = calculateDigit(cpfArray, 9, 10);

  // Calculates the second verifier digit
  cpfArray[10] = calculateDigit(cpfArray, 10, 11);

  // Returns the generated CPF as a string
  return cpfArray.join("");
}

export default geraEValida;
