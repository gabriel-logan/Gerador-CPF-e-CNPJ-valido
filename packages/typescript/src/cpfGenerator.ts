function randomNum(): number {
  // generates a random number of 9 digits
  return Math.floor(Math.random() * 9);
}

// Function to calculate the verifier digits
function calculateDigit(cpfArray: number[], factor: number): number {
  // The sum is calculated by multiplying each digit by a factor and summing the results
  const sum: number = cpfArray.reduce(
    (acc, val, i) => acc + val * (factor - i),
    0,
  );
  // If the sum is less than 2, the verifier digit is 0, otherwise it is 11 minus the remainder of the sum divided by 11
  return sum % 11 < 2 ? 0 : 11 - (sum % 11);
}

function geraEValida(): string {
  // Generates an array of 9 random numbers
  const cpfArray: number[] = Array.from({ length: 9 }, randomNum);

  // Calculates the first verifier digit
  const firstVerifier: number = calculateDigit(cpfArray, 10);
  cpfArray.push(firstVerifier);

  // Calculates the second verifier digit
  const secondVerifier: number = calculateDigit(cpfArray, 11);
  cpfArray.push(secondVerifier);

  // Returns the generated CPF as a string
  return cpfArray.join("");
}

export default geraEValida;
