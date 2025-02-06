package io.github;

public class Cpf {
    private Cpf() {
        throw new IllegalStateException("Utility class");
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
        final int[] cpfArray = new int[9];

        for (int i = 0; i < cpfArray.length; i++) {
            cpfArray[i] = Utils.generateRandomNumber();
        }

        // Calculates the first verifier digit
        final int firstVerifier = calculateCpfDigit(cpfArray, 10);
        final int[] cpfArrayWithFirstVerifier = new int[10];
        System.arraycopy(cpfArray, 0, cpfArrayWithFirstVerifier, 0, cpfArray.length);
        cpfArrayWithFirstVerifier[9] = firstVerifier;

        // Calculates the second verifier digit
        final int secondVerifier = calculateCpfDigit(cpfArrayWithFirstVerifier, 11);
        final int[] cpfArrayWithBothVerifiers = new int[11];
        System.arraycopy(cpfArrayWithFirstVerifier, 0, cpfArrayWithBothVerifiers, 0, cpfArrayWithFirstVerifier.length);
        cpfArrayWithBothVerifiers[10] = secondVerifier;

        // Returns the generated CPF as a string
        return Utils.numberToString(cpfArrayWithBothVerifiers);
    }
}
