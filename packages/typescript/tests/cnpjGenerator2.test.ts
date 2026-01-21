import cnpjGenerator2 from "../src/cnpjGenerator2";
import { cnpjIsValid } from "multiform-validator";
import { describe, it, expect } from "vitest";

describe("geraEValida", () => {
  it("should generate a valid CNPJ", () => {
    for (let i: number = 0; i < 100; i++) {
      expect(cnpjIsValid(cnpjGenerator2(), null, "v2").isValid).toBe(true);
    }
  });

  it("Should generate a valid cnpj and return a string", () => {
    expect(typeof cnpjGenerator2()).toBe("string");
  });

  it("Should generate a cnpj with 14 characters", () => {
    expect(cnpjGenerator2().length).toBe(14);
  });

  it("Should generate different cnpjs on multiple calls", () => {
    const cnpj1: string = cnpjGenerator2();
    const cnpj2: string = cnpjGenerator2();

    expect(cnpj1).not.toBe(cnpj2);
  });
});
