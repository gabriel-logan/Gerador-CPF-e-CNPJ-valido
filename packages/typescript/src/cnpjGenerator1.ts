import randomDigit from "./randomDigit";
import { uintArray12, ZeroCharCode } from "./constants";

function generateValidCNPJ(): string {
  for (let index: number = 0; index < 12; index++) {
    uintArray12[index] = randomDigit();
  }

  const firstSum: number =
    uintArray12[0] * 5 +
    uintArray12[1] * 4 +
    uintArray12[2] * 3 +
    uintArray12[3] * 2 +
    uintArray12[4] * 9 +
    uintArray12[5] * 8 +
    uintArray12[6] * 7 +
    uintArray12[7] * 6 +
    uintArray12[8] * 5 +
    uintArray12[9] * 4 +
    uintArray12[10] * 3 +
    uintArray12[11] * 2;

  const firstRemainder: number = firstSum % 11;
  const firstVerifier: number = firstRemainder < 2 ? 0 : 11 - firstRemainder;

  const secondSum: number =
    uintArray12[0] * 6 +
    uintArray12[1] * 5 +
    uintArray12[2] * 4 +
    uintArray12[3] * 3 +
    uintArray12[4] * 2 +
    uintArray12[5] * 9 +
    uintArray12[6] * 8 +
    uintArray12[7] * 7 +
    uintArray12[8] * 6 +
    uintArray12[9] * 5 +
    uintArray12[10] * 4 +
    uintArray12[11] * 3 +
    firstVerifier * 2;

  const secondRemainder: number = secondSum % 11;
  const secondVerifier: number = secondRemainder < 2 ? 0 : 11 - secondRemainder;

  return String.fromCodePoint(
    uintArray12[0] + ZeroCharCode,
    uintArray12[1] + ZeroCharCode,
    uintArray12[2] + ZeroCharCode,
    uintArray12[3] + ZeroCharCode,
    uintArray12[4] + ZeroCharCode,
    uintArray12[5] + ZeroCharCode,
    uintArray12[6] + ZeroCharCode,
    uintArray12[7] + ZeroCharCode,
    uintArray12[8] + ZeroCharCode,
    uintArray12[9] + ZeroCharCode,
    uintArray12[10] + ZeroCharCode,
    uintArray12[11] + ZeroCharCode,
    firstVerifier + ZeroCharCode,
    secondVerifier + ZeroCharCode,
  );
}

export default generateValidCNPJ;
