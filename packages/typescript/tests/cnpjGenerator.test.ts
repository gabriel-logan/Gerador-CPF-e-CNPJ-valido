import cnpjGenerator from "../src/cnpjGenerator";
import { cnpjIsValid } from "multiform-validator";

describe("geraEValida", () => {
	it("should generate a valid CNPJ", () => {
		expect(cnpjIsValid(cnpjGenerator()).isValid).toBe(true); // Assert that the generated CNPJ is valid
	});

	it("Should generate a valid cnpj and return a string", () => {
		expect(typeof cnpjGenerator()).toBe("string"); // Assert that the generated CNPJ is a string
	});
});
