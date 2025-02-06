package io.github;

public class Cnpj {
    private Cnpj() {
        throw new IllegalStateException("Utility class");
    }

    private static byte[] generateCNPJBase() {
        final byte[] cnpjBase = new byte[12];

        for (byte i = 0; i < 12; i++) {
            cnpjBase[i] = Utils.generateRandomNumber();
        }

        return cnpjBase;
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
        final byte[] cnpjBase = new byte[14];

        final byte[] base = generateCNPJBase();
        System.arraycopy(base, 0, cnpjBase, 0, base.length);

        final byte firstVerifier = calculateCnpjFirstVerifier(cnpjBase);

        cnpjBase[12] = firstVerifier;

        final byte secondVerifier = calculateCnpjSecondVerifier(cnpjBase, firstVerifier);

        cnpjBase[13] = secondVerifier;

        return Utils.numberToString(cnpjBase);
    }
}
