import cnpjGenerator2, { charToValue } from "../src/cnpjGenerator2";
import { cnpjIsValid } from "multiform-validator";
import { describe, it, expect } from "vitest";

describe("geraEValida", () => {
  it("should generate a valid CNPJ", () => {
    for (let i: number = 0; i < 10000; i++) {
      expect(cnpjIsValid(cnpjGenerator2()).isValid).toBe(true);
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

describe("charToValue", () => {
  it("should convert digit characters correctly", () => {
    expect(charToValue("0")).toBe(0);
    expect(charToValue("9")).toBe(9);
  });

  it("should convert uppercase letters correctly", () => {
    expect(charToValue("A")).toBe(17);
    expect(charToValue("Z")).toBe(42);
  });

  it("should throw for invalid characters", () => {
    expect(() => charToValue("!")).toThrow("Character out of range");
    expect(() => charToValue("a")).toThrow("Character out of range");
  });

  it("should throw for empty string", () => {
    expect(() => charToValue("")).toThrow("Invalid character");
  });
});
