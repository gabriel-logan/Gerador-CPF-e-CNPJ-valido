package io.github;

import org.junit.jupiter.api.Test;

import static java.lang.System.out;
import static org.junit.jupiter.api.Assertions.*;

class UtilsTest {
    @Test
    void testNumberToString() {
        int[] number = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0};
        String result = Utils.numberToString(number);
        out.println(result);
        assertEquals("1234567890", result);
    }
}
