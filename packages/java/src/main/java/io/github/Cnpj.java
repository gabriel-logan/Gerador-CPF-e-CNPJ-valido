package io.github;

import java.util.ArrayList;
import java.util.List;
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

    private static List<Integer> generateCNPJBase() {
        List<Integer> cnpjBase = new ArrayList<>();

        for (int i = 0; i < 12; i++) {
            cnpjBase.add(random10Digit());
        }

        return cnpjBase;
    }

    private static int calculateCnpjFirstVerifier(List<Integer> cnpjBase) {
        int[] weight = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

        int sum = 0;

        for (int i = 0; i < 12; i++) {
            sum += cnpjBase.get(i) * weight[i];
        }

        int remainder = sum % 11;

        return remainder < 2 ? 0 : 11 - remainder;
    }

    private static int calculateCnpjSecondVerifier(List<Integer> cnpjBase, int firstVerifier) {
        int[] weight = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

        int sum = 0;

        for (int i = 0; i < 12; i++) {
            sum += cnpjBase.get(i) * weight[i];
        }

        sum += firstVerifier * weight[12];

        int remainder = sum % 11;

        return remainder < 2 ? 0 : 11 - remainder;
    }

    public static String generateCnpj() {
        List<Integer> cnpjBase = generateCNPJBase();

        int firstVerifier = calculateCnpjFirstVerifier(cnpjBase);

        cnpjBase.add(firstVerifier);

        int secondVerifier = calculateCnpjSecondVerifier(cnpjBase, firstVerifier);

        cnpjBase.add(secondVerifier);

        StringBuilder cnpj = new StringBuilder();
        for (int num : cnpjBase) {
            cnpj.append(num);
        }

        return cnpj.toString();
    }
}
