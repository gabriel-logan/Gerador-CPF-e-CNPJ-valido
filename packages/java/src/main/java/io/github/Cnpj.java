package io.github;

import java.util.Random;

public class Cnpj {
    private Cnpj() {
        throw new IllegalStateException("Utility class");
    }

    private static final Random RAND = new Random();

    // Function to generate a random number of 10 digits
    private static int random10Digit() {
        return RAND.nextInt(10);
    }

    private static int[] generateCNPJBase() {
        final int[] cnpjBase = new int[12];

        for (int i = 0; i < 12; i++) {
            cnpjBase[i] = random10Digit();
        }

        return cnpjBase;
    }

    private static int calculateCnpjFirstVerifier(int[] cnpjBase) {
        final int[] weight = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

        int sum = 0;

        for (int i = 0; i < 12; i++) {
            sum += cnpjBase[i] * weight[i];
        }

        final int remainder = sum % 11;

        return remainder < 2 ? 0 : 11 - remainder;
    }

    private static int calculateCnpjSecondVerifier(int[] cnpjBase, int firstVerifier) {
        final int[] weight = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

        int sum = 0;

        for (int i = 0; i < 12; i++) {
            sum += cnpjBase[i] * weight[i];
        }

        sum += firstVerifier * weight[12];

        final int remainder = sum % 11;

        return remainder < 2 ? 0 : 11 - remainder;
    }

    public static String generateCnpj() {
        final int[] cnpjBase = new int[14];

        final int[] base = generateCNPJBase();
        System.arraycopy(base, 0, cnpjBase, 0, base.length);

        final int firstVerifier = calculateCnpjFirstVerifier(cnpjBase);

        cnpjBase[12] = firstVerifier;

        final int secondVerifier = calculateCnpjSecondVerifier(cnpjBase, firstVerifier);

        cnpjBase[13] = secondVerifier;

        return Utils.numberToString(cnpjBase);
    }
}
