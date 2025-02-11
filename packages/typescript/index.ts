import cnpjGenerator from "./src/cnpjGenerator";
import cpfGenerator from "./src/cpfGenerator";

export {
  /**
   * Generates a valid CNPJ (Brazilian company identification number).
   * @returns Returns a valid CNPJ
   * @description - Made by: Logan
   */
  cnpjGenerator as generateCnpj,

  /**
   * Generates a valid CPF (Brazilian identification number).
   * @returns Returns a valid CPF
   * @description - Made by: Logan
   */
  cpfGenerator as generateCpf,
};
