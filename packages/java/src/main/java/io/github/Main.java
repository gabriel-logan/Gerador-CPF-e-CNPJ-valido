package io.github;

import static java.lang.System.*;

public class Main {
    private Main() {
        printTimeTest();
        throw new IllegalStateException("Utility class");
    }

    private static void printTimeTest() {
        for (int i = 0; i < 10; i++) {
            long startTimeMs = currentTimeMillis();
            long startTimeNs = nanoTime();
            long endTimeMs = currentTimeMillis();
            long endTimeNs = nanoTime();
            long durationMs = endTimeMs - startTimeMs;
            long durationNs = endTimeNs - startTimeNs;

            out.println("CPF: " + Cpf.generateCpf() + " (Time: " + durationMs + " ms, " + durationNs + " ns)");

            startTimeMs = currentTimeMillis();
            startTimeNs = nanoTime();
            endTimeMs = currentTimeMillis();
            endTimeNs = nanoTime();
            durationMs = endTimeMs - startTimeMs;
            durationNs = endTimeNs - startTimeNs;

            out.println("CNPJ: " + Cnpj.generateCnpj() + " (Time: " + durationMs + " ms, " + durationNs + " ns)");

            out.println();
        }
    }
}