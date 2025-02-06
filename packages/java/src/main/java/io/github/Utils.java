package io.github;

public class Utils {
    private Utils() {
        throw new IllegalStateException("Utility class");
    }

    public static String numberToString(int[] number) {
        StringBuilder result = new StringBuilder();
        for (int num : number) {
            result.append(num);
        }
        return result.toString();
    }
}
