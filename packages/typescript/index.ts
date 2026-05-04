import type { CnpjVersion } from "./src/cnpjGeneratorBase";
import generateCnpj, { CNPJ_VERSIONS } from "./src/cnpjGeneratorBase";
import generateCnpjV1 from "./src/cnpjGenerator1";
import generateCnpjV2 from "./src/cnpjGenerator2";
import generateCpf from "./src/cpfGeneratorBase";

export { generateCnpj, generateCnpjV1, generateCnpjV2, generateCpf, CNPJ_VERSIONS };
export default { generateCnpj, generateCnpjV1, generateCnpjV2, generateCpf, CNPJ_VERSIONS };
export type { CnpjVersion };
