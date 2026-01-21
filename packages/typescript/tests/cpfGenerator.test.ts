import cpfGenerator from "../src/cpfGenerator";
import { cpfIsValid } from "multiform-validator";
import { describe, it, expect } from "vitest";

describe("geraEValida", () => {
  it("should generate a valid CPF", () => {
    for (let i: number = 0; i < 100; i++) {
      expect(cpfIsValid(cpfGenerator()).isValid).toBe(true); // Assert that the generated CPF is valid
    }
  });

  it("Should generate a valid cpf and return a string", () => {
    expect(typeof cpfGenerator()).toBe("string"); // Assert that the generated CPF is a string
  });

  it("Should generate a valid cpf and return a string with 11 characters", () => {
    expect(cpfGenerator().length).toBe(11); // Assert that the generated CPF has 11 characters
  });

  it("Should generate a valid cpf and return a string with only numbers", () => {
    expect(cpfGenerator()).toMatch(/^\d+$/); // Assert that the generated CPF has only numbers
  });
});
