package io.github;

import java.util.Random;

public class Utils {
    private Utils() {
        throw new IllegalStateException("Utility class");
    }

    private static final Random RAND = new Random();

    public static byte generateRandomNumber() {
        return (byte) RAND.nextInt(10);
    }

    public static String numberToString(byte[] number) {
        StringBuilder result = new StringBuilder();

        for (byte num : number) {
            result.append(num);
        }
        
        return result.toString();
    }
}
