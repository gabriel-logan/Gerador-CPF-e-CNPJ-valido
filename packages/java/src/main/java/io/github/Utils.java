package io.github;

import java.util.Random;

public class Utils {
    private Utils() {
        throw new IllegalStateException("Utility class");
    }

    private static final Random RAND = new Random();

    public static int generateRandomNumber() {
        return RAND.nextInt(9);
    }

    public static String numberToString(int[] number) {
        StringBuilder result = new StringBuilder();
        for (int num : number) {
            result.append(num);
        }
        return result.toString();
    }
}
