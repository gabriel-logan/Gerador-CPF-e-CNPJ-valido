#include <assert.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define main cnpjGeneratorDemoMain
#include "../src/cnpjGenerator.c"
#undef main

int testCharToValue(char character) {
    return character - '0';
}

int testCalculateDigit(const int values[], const int weights[], int length) {
    int sum = 0;

    for (int i = 0; i < length; i++) {
        sum += values[i] * weights[i];
    }

    int remainder = sum % 11;

    return remainder < 2 ? 0 : 11 - remainder;
}

int cnpjV1IsValid(const char cnpj[]) {
    int values[13];
    int weightsFirst[12] = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
    int weightsSecond[13] = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

    for (int i = 0; i < 12; i++) {
        if (!isdigit((unsigned char) cnpj[i])) {
            return 0;
        }

        values[i] = cnpj[i] - '0';
    }

    values[12] = testCalculateDigit(values, weightsFirst, 12);
    int secondDigit = testCalculateDigit(values, weightsSecond, 13);

    return cnpj[12] == values[12] + '0' && cnpj[13] == secondDigit + '0';
}

int cnpjV2IsValid(const char cnpj[]) {
    int values[13];
    int weightsFirst[12] = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
    int weightsSecond[13] = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

    for (int i = 0; i < 12; i++) {
        if (!isdigit((unsigned char) cnpj[i]) && (cnpj[i] < 'A' || cnpj[i] > 'Z')) {
            return 0;
        }

        values[i] = testCharToValue(cnpj[i]);
    }

    values[12] = testCalculateDigit(values, weightsFirst, 12);
    int secondDigit = testCalculateDigit(values, weightsSecond, 13);

    return cnpj[12] == values[12] + '0' && cnpj[13] == secondDigit + '0';
}

void testGenerateCNPJV1() {
    char cnpj[15];

    for (int i = 0; i < 10000; i++) {
        generateValidCNPJV1(cnpj);

        assert(strlen(cnpj) == 14);
        assert(cnpjV1IsValid(cnpj));
    }
}

void testGenerateCNPJV1ByDefault() {
    char cnpj[15];

    for (int i = 0; i < 10000; i++) {
        generateValidCNPJ(cnpj);

        assert(strlen(cnpj) == 14);
        assert(cnpjV1IsValid(cnpj));
    }
}

void testGenerateCNPJV2() {
    char cnpj[15];

    for (int i = 0; i < 10000; i++) {
        generateValidCNPJV2(cnpj);

        assert(strlen(cnpj) == 14);
        assert(cnpjV2IsValid(cnpj));
    }
}

void testGenerateCNPJV2ByVersion() {
    char cnpj[15];

    for (int i = 0; i < 10000; i++) {
        generateValidCNPJVersion(cnpj, CNPJ_V2);

        assert(strlen(cnpj) == 14);
        assert(cnpjV2IsValid(cnpj));
    }
}

int main() {
    srand(1);

    testGenerateCNPJV1();
    testGenerateCNPJV1ByDefault();
    testGenerateCNPJV2();
    testGenerateCNPJV2ByVersion();

    puts("CNPJ C tests passed");

    return 0;
}
