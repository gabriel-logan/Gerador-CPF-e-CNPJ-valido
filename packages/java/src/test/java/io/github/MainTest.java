package io.github;

import io.github.multiform_validator.CnpjValidator;
import io.github.multiform_validator.CpfValidator;
import org.junit.jupiter.api.Test;

import static java.lang.System.out;
import static org.junit.jupiter.api.Assertions.*;

class MainTest {
    private static byte cnpjCharacterToValue(char character) {
        return (byte) (character - '0');
    }

    private static boolean cnpjV2IsValid(String cnpj) {
        final byte[] weightsFirst = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
        final byte[] weightsSecond = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
        short sum = 0;

        for (byte i = 0; i < 12; i++) {
            sum += (short) (cnpjCharacterToValue(cnpj.charAt(i)) * weightsFirst[i]);
        }

        byte remainder = (byte) (sum % 11);
        byte firstVerifier = remainder < 2 ? 0 : (byte) (11 - remainder);

        sum = 0;

        for (byte i = 0; i < 12; i++) {
            sum += (short) (cnpjCharacterToValue(cnpj.charAt(i)) * weightsSecond[i]);
        }

        sum += (short) (firstVerifier * 2);
        remainder = (byte) (sum % 11);
        byte secondVerifier = remainder < 2 ? 0 : (byte) (11 - remainder);

        return cnpj.charAt(12) == (char) ('0' + firstVerifier)
                && cnpj.charAt(13) == (char) ('0' + secondVerifier);
    }

    @Test
    void testGenerateCpf() {
        for (byte i = 0; i < 100; i++) {
            String cpf = Cpf.generateCpf();
            out.println(cpf);

            assertEquals(11, cpf.length()); // CPF should have 11 digits
            assertTrue(CpfValidator.cpfIsValid(cpf)); // CPF should be valid
            assertFalse(CpfValidator.cpfIsValid("00000000000")); // CPF should not be valid
        }
    }

    @Test
    void testGenerateCnpj() {
        for (byte i = 0; i < 100; i++) {
            String cnpj = Cnpj.generateCnpj();
            out.println(cnpj);

            assertEquals(14, cnpj.length()); // CNPJ should have 14 digits
            assertTrue(CnpjValidator.cnpjIsValid(cnpj)); // CNPJ should be valid
            assertFalse(CnpjValidator.cnpjIsValid("00000000000000")); // CNPJ should not be valid
        }
    }

    @Test
    void testGenerateCnpjV2() {
        for (byte i = 0; i < 100; i++) {
            String cnpj = Cnpj.generateCnpj(Cnpj.CNPJ_V2);
            out.println(cnpj);

            assertEquals(14, cnpj.length());
            assertTrue(cnpj.matches("^[0-9A-Z]{12}[0-9]{2}$"));
            assertTrue(cnpjV2IsValid(cnpj));
        }
    }
}
