/**
 * Generates a valid CPF (Brazilian identification number).
 * @returns Returns a valid CPF
 * @description - Made by: Logan
 */
export default function geraEValida(): string {
  // Store 11 digits (9 random + 2 check digits)
  const digits: Uint8Array<ArrayBuffer> = new Uint8Array(11);

  // Accumulators for the two checksum calculations
  let sum1: number = 0; // for the first check digit
  let sum2: number = 0; // for the second check digit

  // Generate the first 9 digits and accumulate sums
  for (let i: number = 0; i < 9; i++) {
    const d: number = Math.trunc(Math.random() * 10); // fast integer 0–9
    digits[i] = d;

    const weight1: number = 10 - i;
    sum1 += d * weight1;
    sum2 += d * (weight1 + 1); // second checksum uses one higher weight
  }

  // Calculate the first check digit
  const r1: number = sum1 % 11;
  const dv1: number = r1 < 2 ? 0 : 11 - r1;
  digits[9] = dv1;

  // Add the contribution of the first check digit to the second sum
  sum2 += dv1 * 2; // weight for the 10th digit is 2

  // Calculate the second check digit
  const r2: number = sum2 % 11;
  digits[10] = r2 < 2 ? 0 : 11 - r2;

  // Build the final CPF string
  let out: string = "";
  for (let i: number = 0; i < 11; i++) {
    out += String(digits[i]);
  }

  return out;
}
