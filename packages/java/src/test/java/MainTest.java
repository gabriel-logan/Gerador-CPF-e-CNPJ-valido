import org.junit.jupiter.api.Test;

import static io.github.Main.generateCnpj;
import static io.github.Main.generateCpf;
import static java.lang.System.out;
import static org.junit.jupiter.api.Assertions.*;

class MainTest {

    @Test
    void testGenerateCpf() {
        String cpf = generateCpf();
        out.println(cpf);
        assertEquals(11, cpf.length()); // CPF should have 11 digits
        // Add more assertions here to validate the generated CPF
    }

    @Test
    void testGenerateCnpj() {
        String cnpj = generateCnpj();
        out.println(cnpj);
        assertEquals(14, cnpj.length()); // CNPJ should have 14 digits
        // Add more assertions here to validate the generated CNPJ
    }
}