#include <assert.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define main cnpjGeneratorDemoMain
#include "../src/cnpjGenerator.c"
#undef main

static int testCharToValue(char character) {
    return character - '0';
}

static int testCalculateDigit(const int values[], const int weights[], int length) {
    int sum = 0;

    for (int i = 0; i < length; i++) {
        sum += values[i] * weights[i];
    }

    int remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
}

static int cnpjV1IsValid(const char cnpj[]) {
    int values[13];
    const int weightsFirst[12] = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
    const int weightsSecond[13] = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

    for (int i = 0; i < 12; i++) {
        if (!isdigit((unsigned char)cnpj[i])) {
            return 0;
        }

        values[i] = cnpj[i] - '0';
    }

    values[12] = testCalculateDigit(values, weightsFirst, 12);
    int secondDigit = testCalculateDigit(values, weightsSecond, 13);

    return cnpj[12] == values[12] + '0' && cnpj[13] == secondDigit + '0';
}

static int cnpjV2IsValid(const char cnpj[]) {
    int values[13];
    const int weightsFirst[12] = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
    const int weightsSecond[13] = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

    for (int i = 0; i < 12; i++) {
        if (!isdigit((unsigned char)cnpj[i]) && (cnpj[i] < 'A' || cnpj[i] > 'Z')) {
            return 0;
        }

        values[i] = testCharToValue(cnpj[i]);
    }

    values[12] = testCalculateDigit(values, weightsFirst, 12);
    int secondDigit = testCalculateDigit(values, weightsSecond, 13);

    return cnpj[12] == values[12] + '0' && cnpj[13] == secondDigit + '0';
}

static void testGenerateCNPJWithoutVersionCoversBothFormats(void) {
    char cnpj[15];
    int foundV1 = 0;
    int foundV2 = 0;

    for (unsigned int seed = 1; seed <= 256; seed++) {
        srand(seed);
        GenerateCNPJ(cnpj, NULL);

        assert(strlen(cnpj) == 14);

        int hasLetter = 0;
        for (int i = 0; i < 12; i++) {
            if (cnpj[i] >= 'A' && cnpj[i] <= 'Z') {
                hasLetter = 1;
                break;
            }
        }

        if (hasLetter) {
            assert(cnpjV2IsValid(cnpj));
            foundV2 = 1;
        } else {
            assert(cnpjV1IsValid(cnpj));
            foundV1 = 1;
        }

        if (foundV1 && foundV2) {
            break;
        }
    }

    assert(foundV1);
    assert(foundV2);
}

static void testGenerateCNPJV1(void) {
    char cnpj[15];

    for (int i = 0; i < 10000; i++) {
        GenerateCNPJV1(cnpj);

        assert(strlen(cnpj) == 14);
        assert(cnpjV1IsValid(cnpj));
    }
}

static void testGenerateCNPJWithInvalidVersionFallsBackToV1(void) {
    char cnpj[15];

    for (int i = 0; i < 10000; i++) {
        GenerateCNPJ(cnpj, "invalid");

        assert(strlen(cnpj) == 14);
        assert(cnpjV1IsValid(cnpj));
    }
}

static void testGenerateCNPJV2(void) {
    char cnpj[15];

    for (int i = 0; i < 10000; i++) {
        GenerateCNPJV2(cnpj);

        assert(strlen(cnpj) == 14);
        assert(cnpjV2IsValid(cnpj));
    }
}

static void testGenerateCNPJV2ByVersion(void) {
    char cnpj[15];

    for (int i = 0; i < 10000; i++) {
        GenerateCNPJ(cnpj, CNPJV2);

        assert(strlen(cnpj) == 14);
        assert(cnpjV2IsValid(cnpj));
    }
}

int main(void) {
    srand(1);

    testGenerateCNPJWithoutVersionCoversBothFormats();
    testGenerateCNPJV1();
    testGenerateCNPJWithInvalidVersionFallsBackToV1();
    testGenerateCNPJV2();
    testGenerateCNPJV2ByVersion();

    puts("CNPJ C tests passed");
    return 0;
}
