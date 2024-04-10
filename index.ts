/**
 * This module exports two functions for generating valid CNPJ and CPF numbers.
 */
import cnpjGenerator from "./src/cnpjGenerator";
import cpfGenerator from "./src/cpfGenerator";

export = {
	/**
	 * @returns {string} - Returns a valid CNPJ
	 * @description - Made by: Logan
	 */
	cnpjGerador: cnpjGenerator,

	/**
	 * @returns Returns a valid CPF
	 * @description - Made by: Logan
	 */
	cpfGerador: cpfGenerator,
};
