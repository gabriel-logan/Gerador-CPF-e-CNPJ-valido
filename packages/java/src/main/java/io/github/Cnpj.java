package io.github;

public class Cnpj {
    private Cnpj() {
        throw new IllegalStateException("Utility class");
    }

    private static byte calculateCnpjFirstVerifier(byte[] cnpjBase) {
        final byte[] weight = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

        short sum = 0;

        for (byte i = 0; i < 12; i++) {
            sum += (short) (cnpjBase[i] * weight[i]);
        }

        final byte remainder = (byte) (sum % 11);

        return remainder < 2 ? 0 : (byte) (11 - remainder);
    }

    private static byte calculateCnpjSecondVerifier(byte[] cnpjBase, byte firstVerifier) {
        final byte[] weight = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

        short sum = 0;

        for (byte i = 0; i < 12; i++) {
            sum += (short) (cnpjBase[i] * weight[i]);
        }

        sum += (byte) (firstVerifier * weight[12]);

        final byte remainder = (byte) (sum % 11);

        return remainder < 2 ? 0 : (byte) (11 - remainder);
    }

    public static String generateCnpj() {
        final byte[] cnpjArray = new byte[14];

        for (byte i = 0; i < 12; i++) {
            cnpjArray[i] = Utils.generateRandomNumber();
        }

        // The first verifier digit is calculated based on the first 12 digits
        cnpjArray[12] = calculateCnpjFirstVerifier(cnpjArray);

        // The second verifier digit is calculated based on the first 13 digits
        cnpjArray[13] = calculateCnpjSecondVerifier(cnpjArray, cnpjArray[12]);

        return Utils.numberToString(cnpjArray);
    }
}
