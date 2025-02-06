package io.github;

public class Cpf {
    private Cpf() {
        throw new IllegalStateException("Utility class");
    }

    // Function to calculate the verifier digits
    public static byte calculateCpfDigit(byte[] cpfArray, byte factor) {
        short sum = 0;

        for (byte i = 0; i < cpfArray.length; i++) {
            sum += (short) (cpfArray[i] * (factor - i));
        }

        return sum % 11 < 2 ? 0 : (byte) (11 - (sum % 11));
    }

    public static String generateCpf() {
        // Generates an array of 9 random numbers
        final byte[] cpfArray = new byte[9];

        for (byte i = 0; i < cpfArray.length; i++) {
            cpfArray[i] = Utils.generateRandomNumber();
        }

        // Calculates the first verifier digit
        final byte firstVerifier = calculateCpfDigit(cpfArray, (byte) 10);

        final byte[] cpfArrayWithFirstVerifier = new byte[10];
        System.arraycopy(cpfArray, 0, cpfArrayWithFirstVerifier, 0, cpfArray.length);

        cpfArrayWithFirstVerifier[9] = firstVerifier;

        // Calculates the second verifier digit
        final byte secondVerifier = calculateCpfDigit(cpfArrayWithFirstVerifier, (byte) 11);

        final byte[] cpfArrayWithBothVerifiers = new byte[11];
        System.arraycopy(cpfArrayWithFirstVerifier, 0, cpfArrayWithBothVerifiers, 0, cpfArrayWithFirstVerifier.length);

        cpfArrayWithBothVerifiers[10] = secondVerifier;

        // Returns the generated CPF as a string
        return Utils.numberToString(cpfArrayWithBothVerifiers);
    }
}
