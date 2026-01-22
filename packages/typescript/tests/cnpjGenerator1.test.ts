import cnpjGenerator1 from "../src/cnpjGenerator1";
import { cnpjIsValid } from "multiform-validator";
import { describe, it, expect } from "vitest";

describe("geraEValida", () => {
  it("should generate a valid CNPJ", () => {
    for (let i: number = 0; i < 10000; i++) {
      expect(cnpjIsValid(cnpjGenerator1()).isValid).toBe(true); // Assert that the generated CNPJ is valid
    }
  });

  it("Should generate a valid cnpj and return a string", () => {
    expect(typeof cnpjGenerator1()).toBe("string"); // Assert that the generated CNPJ is a string
  });

  it("Should generate a valid cnpj and return a string with 14 characters", () => {
    expect(cnpjGenerator1().length).toBe(14); // Assert that the generated CNPJ has 14 characters
  });

  it("Should generate a valid cnpj and return a string with only numbers", () => {
    expect(cnpjGenerator1()).toMatch(/^\d+$/); // Assert that the generated CNPJ has only numbers
  });
});
