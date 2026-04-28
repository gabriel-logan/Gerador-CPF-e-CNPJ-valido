package io.github;

public class Cnpj {
    public static final String CNPJ_V1 = "v1";
    public static final String CNPJ_V2 = "v2";
    private static final String ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

    private static char generateRandomAlphanumericCharacter() {
        return ALPHANUMERIC_CHARS.charAt(Utils.generateRandomNumber(ALPHANUMERIC_CHARS.length()));
    }

    private static byte charToValue(char character) {
        if ((character >= '0' && character <= '9') || (character >= 'A' && character <= 'Z')) {
            return (byte) (character - '0');
        }

        return 0;
    }

    public static String generateCnpjV1() {
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

    public static String generateCnpjV2() {
        final byte[] cnpjValues = new byte[14];
        final StringBuilder cnpj = new StringBuilder(14);

        for (byte i = 0; i < 12; i++) {
            final char character = generateRandomAlphanumericCharacter();

            cnpj.append(character);
            cnpjValues[i] = charToValue(character);
        }

        cnpjValues[12] = calculateCnpjFirstVerifier(cnpjValues);
        cnpjValues[13] = calculateCnpjSecondVerifier(cnpjValues, cnpjValues[12]);

        cnpj.append(cnpjValues[12]);
        cnpj.append(cnpjValues[13]);

        return cnpj.toString();
    }

    public static String generateCnpj(String cnpjVersion) {
        if (CNPJ_V2.equals(cnpjVersion)) {
            return generateCnpjV2();
        }

        return generateCnpjV1();
    }

    public static String generateCnpj() {
        return generateCnpj(CNPJ_V1);
    }
}
