package io.github;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Main {
    private Main() {
        throw new IllegalStateException("Utility class");
    }

    private static final Random RAND = new Random();

    // Function to generate a random number of 9 digits
    public static int random9Num() {
        return RAND.nextInt(9);
    }

    // Function to calculate the verifier digits
    public static int calculateCpfDigit(int[] cpfArray, int factor) {
        int sum = 0;
        for (int i = 0; i < cpfArray.length; i++) {
            sum += cpfArray[i] * (factor - i);
        }
        return sum % 11 < 2 ? 0 : 11 - (sum % 11);
    }

    public static String generateCpf() {
        // Generates an array of 9 random numbers
        int[] cpfArray = new int[9];
        for (int i = 0; i < cpfArray.length; i++) {
            cpfArray[i] = random9Num();
        }

        // Calculates the first verifier digit
        int firstVerifier = calculateCpfDigit(cpfArray, 10);
        int[] cpfArrayWithFirstVerifier = new int[10];
        System.arraycopy(cpfArray, 0, cpfArrayWithFirstVerifier, 0, cpfArray.length);
        cpfArrayWithFirstVerifier[9] = firstVerifier;

        // Calculates the second verifier digit
        int secondVerifier = calculateCpfDigit(cpfArrayWithFirstVerifier, 11);
        int[] cpfArrayWithBothVerifiers = new int[11];
        System.arraycopy(cpfArrayWithFirstVerifier, 0, cpfArrayWithBothVerifiers, 0, cpfArrayWithFirstVerifier.length);
        cpfArrayWithBothVerifiers[10] = secondVerifier;

        // Returns the generated CPF as a string
        StringBuilder cpf = new StringBuilder();
        for (int num : cpfArrayWithBothVerifiers) {
            cpf.append(num);
        }

        return cpf.toString();
    }

    // ###########################################################################
    // ###########################################################################

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
