package io.github;

import io.github.multiform_validator.CnpjValidator;
import io.github.multiform_validator.CpfValidator;
import org.junit.jupiter.api.Test;

import static java.lang.System.out;
import static org.junit.jupiter.api.Assertions.*;

class MainTest {
    @Test
    void testGenerateCpf() {
        String cpf = Cpf.generateCpf();
        out.println(cpf);
        assertEquals(11, cpf.length()); // CPF should have 11 digits
        assertTrue(CpfValidator.cpfIsValid(cpf)); // CPF should be valid
        assertFalse(CpfValidator.cpfIsValid("00000000000")); // CPF should not be valid
    }

    @Test
    void testGenerateCnpj() {
        String cnpj = Cnpj.generateCnpj();
        out.println(cnpj);
        assertEquals(14, cnpj.length()); // CNPJ should have 14 digits
        assertTrue(CnpjValidator.cnpjIsValid(cnpj)); // CNPJ should be valid
        assertFalse(CnpjValidator.cnpjIsValid("00000000000000")); // CNPJ should not be valid
    }
}