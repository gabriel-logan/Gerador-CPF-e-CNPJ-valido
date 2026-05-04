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

    private static boolean cnpjV1IsValid(String cnpj) {
        return cnpj.matches("^\\d{14}$") && cnpjV2IsValid(cnpj);
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
        boolean foundV1 = false;
        boolean foundV2 = false;

        for (int i = 0; i < 256; i++) {
            String cnpj = Cnpj.generateCnpj();

            assertEquals(14, cnpj.length()); // CNPJ should have 14 digits

            if (cnpj.matches("^\\d{14}$")) {
                assertTrue(cnpjV1IsValid(cnpj));
                assertTrue(CnpjValidator.cnpjIsValid(cnpj)); // CNPJ should be valid
                foundV1 = true;
            } else {
                assertTrue(cnpj.matches("^[0-9A-Z]{12}[0-9]{2}$"));
                assertTrue(cnpjV2IsValid(cnpj));
                foundV2 = true;
            }
        }

        assertTrue(foundV1);
        assertTrue(foundV2);
        assertFalse(CnpjValidator.cnpjIsValid("00000000000000")); // CNPJ should not be valid
    }

    @Test
    void testGenerateCnpjV1() {
        for (int i = 0; i < 10000; i++) {
            String cnpjByConstant = Cnpj.generateCnpj(Cnpj.CNPJ_V1);
            String cnpjDirect = Cnpj.generateCnpjV1();

            assertEquals(14, cnpjByConstant.length());
            assertEquals(14, cnpjDirect.length());
            assertTrue(cnpjV1IsValid(cnpjByConstant));
            assertTrue(cnpjV1IsValid(cnpjDirect));
            assertTrue(CnpjValidator.cnpjIsValid(cnpjByConstant));
            assertTrue(CnpjValidator.cnpjIsValid(cnpjDirect));
        }
    }

    @Test
    void testGenerateCnpjV2() {
        for (int i = 0; i < 10000; i++) {
            String cnpj = Cnpj.generateCnpj(Cnpj.CNPJ_V2);

            assertEquals(14, cnpj.length());
            assertTrue(cnpj.matches("^[0-9A-Z]{12}[0-9]{2}$"));
            assertTrue(cnpjV2IsValid(cnpj));
        }
    }

    @Test
    void testGenerateCnpjV2Directly() {
        for (int i = 0; i < 10000; i++) {
            String cnpj = Cnpj.generateCnpjV2();

            assertEquals(14, cnpj.length());
            assertTrue(cnpj.matches("^[0-9A-Z]{12}[0-9]{2}$"));
            assertTrue(cnpjV2IsValid(cnpj));
        }
    }
}
