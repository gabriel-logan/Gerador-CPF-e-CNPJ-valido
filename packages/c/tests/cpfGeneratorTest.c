#include <assert.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define main cpfGeneratorDemoMain
#include "../src/cpfGenerator.c"
#undef main

static int calculateDigit(const int values[], int length, int factor) {
    int sum = 0;

    for (int i = 0; i < length; i++) {
        sum += values[i] * (factor - i);
    }

    int remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
}

static int cpfIsValid(const char cpf[]) {
    int values[11];

    for (int i = 0; i < 9; i++) {
        if (!isdigit((unsigned char)cpf[i])) {
            return 0;
        }

        values[i] = cpf[i] - '0';
    }

    values[9] = calculateDigit(values, 9, 10);
    values[10] = calculateDigit(values, 10, 11);

    return cpf[9] == values[9] + '0' && cpf[10] == values[10] + '0';
}

int main(void) {
    srand(1);

    char cpf[12];

    for (int i = 0; i < 10000; i++) {
        generateValidCPF(cpf);

        assert(strlen(cpf) == 11);
        assert(cpfIsValid(cpf));
    }

    puts("CPF C tests passed");
    return 0;
}
