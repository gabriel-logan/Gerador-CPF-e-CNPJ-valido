import type { CnpjVersion } from "./src/cnpjGeneratorBase";
import generateCnpj, { CNPJ_VERSIONS } from "./src/cnpjGeneratorBase";
import generateCpf from "./src/cpfGeneratorBase";

export { generateCnpj, generateCpf, CNPJ_VERSIONS };
export default { generateCnpj, generateCpf, CNPJ_VERSIONS };
export type { CnpjVersion };
