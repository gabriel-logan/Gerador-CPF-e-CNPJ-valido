package io.github;

import static java.lang.System.*;

public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            out.println("CPF: " + Cpf.generateCpf());
            out.println("CNPJ: " + Cnpj.generateCnpj());
            out.println();
        }
    }
}
