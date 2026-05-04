import cnpjGeneratorBase from "../src/cnpjGeneratorBase";
import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("geraEValida", () => {
  it("Should generate a valid cnpj and return a string", () => {
    expect(typeof cnpjGeneratorBase()).toBe("string");
  });

  it("Should generate a cnpj with 14 characters", () => {
    expect(cnpjGeneratorBase().length).toBe(14);
  });

  it("should generate version 1 (numeric) CNPJ when chosen by the default path", () => {
    vi.spyOn(Math, "random").mockReturnValueOnce(0.25).mockReturnValue(0.1);

    const cnpj: string = cnpjGeneratorBase();
    expect(cnpj).toMatch(/^\d{14}$/); // Check if it matches numeric CNPJ format
  });

  it("should generate version 2 (alphanumeric) CNPJ when chosen by the default path", () => {
    vi.spyOn(Math, "random").mockReturnValueOnce(0.75).mockReturnValue(0.1);

    const cnpj: string = cnpjGeneratorBase();
    expect(cnpj).toMatch(/^[0-9A-Z]{12}\d{2}$/);
  });

  it("should generate version 2 (alphanumeric) CNPJ when specified", () => {
    const cnpj: string = cnpjGeneratorBase("v2");
    expect(cnpj).toMatch(/^[0-9A-Z]{12}\d{2}$/); // Check if it matches alphanumeric CNPJ format
  });
});
