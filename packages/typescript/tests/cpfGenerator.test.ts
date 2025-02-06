import cpfGenerator from "../src/cpfGenerator";
import { cpfIsValid } from "multiform-validator";

describe("geraEValida", () => {
  it("should generate a valid CPF", () => {
    expect(cpfIsValid(cpfGenerator()).isValid).toBe(true); // Assert that the generated CPF is valid
  });

  it("Should generate a valid cpf and return a string", () => {
    expect(typeof cpfGenerator()).toBe("string"); // Assert that the generated CPF is a string
  });
});
