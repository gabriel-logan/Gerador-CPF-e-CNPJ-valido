package io.github;

public class Cpf {
    private Cpf() {
        throw new IllegalStateException("Utility class");
    }

    // Function to calculate the verifier digits
    public static byte calculateCpfDigit(byte[] cpfArray, byte factor) {
        short sum = 0;

        for (byte i = 0; i < 10; i++) {
            sum += (short) (cpfArray[i] * (factor - i));
        }

        return sum % 11 < 2 ? 0 : (byte) (11 - (sum % 11));
    }

    public static String generateCpf() {
        // Generates an array of 9 random numbers
        final byte[] cpfArray = new byte[11];

        for (byte i = 0; i < 9; i++) {
            cpfArray[i] = Utils.generateRandomNumber();
        }

        // Calculates the first verifier digit
        cpfArray[9] = calculateCpfDigit(cpfArray, (byte) 10);

        // Calculates the second verifier digit
        cpfArray[10] = calculateCpfDigit(cpfArray, (byte) 11);

        // Returns the generated CPF as a string
        return Utils.numberToString(cpfArray);
    }
}
