import cnpjGenerator from "../src/cnpjGeneratorNew";
import { describe, it, expect } from "vitest";

describe("geraEValida", () => {
  it("Should generate a valid cnpj and return a string", () => {
    expect(typeof cnpjGenerator()).toBe("string");
  });
});
