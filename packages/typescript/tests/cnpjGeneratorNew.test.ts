import cnpjGenerator from "../src/cnpjGeneratorNew";
import { describe, it, expect } from "vitest";

describe("geraEValida", () => {
  it("Should generate a valid cnpj and return a string", () => {
    expect(typeof cnpjGenerator()).toBe("string");
  });

  it("Should generate a cnpj with 14 characters", () => {
    expect(cnpjGenerator().length).toBe(14);
  });

  it("Should generate different cnpjs on multiple calls", () => {
    const cnpj1: string = cnpjGenerator();
    const cnpj2: string = cnpjGenerator();
    expect(cnpj1).not.toBe(cnpj2);
  });
});
