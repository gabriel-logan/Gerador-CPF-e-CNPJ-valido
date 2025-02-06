package io.github;

import java.util.concurrent.ThreadLocalRandom;

public class Utils {
    private Utils() {
        throw new IllegalStateException("Utility class");
    }

    public static byte generateRandomNumber() {
        return (byte) ThreadLocalRandom.current().nextInt(10);
    }

    public static String numberToString(byte[] number) {
        StringBuilder result = new StringBuilder(number.length);

        for (byte num : number) {
            result.append(num);
        }
        
        return result.toString();
    }
}
