import cnpjGenerator from "../src/cnpjGenerator";
import { cnpjIsValid } from "multiform-validator";

describe("geraEValida", () => {
  it("should generate a valid CNPJ", () => {
    for (let i: number = 0; i < 100; i++) {
      expect(cnpjIsValid(cnpjGenerator()).isValid).toBe(true); // Assert that the generated CNPJ is valid
    }
  });

  it("Should generate a valid cnpj and return a string", () => {
    expect(typeof cnpjGenerator()).toBe("string"); // Assert that the generated CNPJ is a string
  });

  it("Should generate a valid cnpj and return a string with 14 characters", () => {
    expect(cnpjGenerator().length).toBe(14); // Assert that the generated CNPJ has 14 characters
  });

  it("Should generate a valid cnpj and return a string with only numbers", () => {
    expect(cnpjGenerator()).toMatch(/^\d+$/); // Assert that the generated CNPJ has only numbers
  });
});
