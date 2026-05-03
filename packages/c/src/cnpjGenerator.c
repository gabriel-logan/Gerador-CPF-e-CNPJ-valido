#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define CNPJ_V1 "v1"
#define CNPJ_V2 "v2"

const char ALPHANUMERIC_CHARS[] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

static uint64_t randomUint64(void) {
    uint64_t value = 0;

    for (int i = 0; i < 5; i++) {
        value = (value << 15) | (uint64_t)(rand() & 0x7FFFu);
    }

    return value;
}

int charToValue(char character) {
    if (character >= '0' && character <= '9') {
        return character - '0';
    }

    if (character >= 'A' && character <= 'Z') {
        return character - '0';
    }

    return 0;
}

void generateValidCNPJV1(char cnpj[15]) {
    static const uint8_t weights1[12] = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
    static const uint8_t weights2[12] = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3};

    uint16_t sum1 = 0;
    uint16_t sum2 = 0;
    uint64_t random = randomUint64();

    for (int i = 0; i < 12; i++) {
        uint8_t digit = (uint8_t)(random % 10u);
        random /= 10u;

        cnpj[i] = (char)('0' + digit);
        sum1 += (uint16_t)(digit * weights1[i]);
        sum2 += (uint16_t)(digit * weights2[i]);
    }

    uint16_t remainder = (uint16_t)(sum1 % 11u);
    uint8_t dv1 = 0;
    if (remainder >= 2u) {
        dv1 = (uint8_t)(11u - remainder);
    }
    cnpj[12] = (char)('0' + dv1);

    sum2 += (uint16_t)(dv1 * 2u);
    remainder = (uint16_t)(sum2 % 11u);
    uint8_t dv2 = 0;
    if (remainder >= 2u) {
        dv2 = (uint8_t)(11u - remainder);
    }
    cnpj[13] = (char)('0' + dv2);
    cnpj[14] = '\0';
}

void generateValidCNPJV2(char cnpj[15]) {
    static const uint8_t weights1[12] = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
    static const uint8_t weights2[12] = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3};

    uint16_t sum1 = 0;
    uint16_t sum2 = 0;
    uint64_t random = randomUint64();

    for (int i = 0; i < 12; i++) {
        uint8_t index = (uint8_t)(random % (sizeof(ALPHANUMERIC_CHARS) - 1u));
        random /= (sizeof(ALPHANUMERIC_CHARS) - 1u);

        cnpj[i] = ALPHANUMERIC_CHARS[index];

        uint8_t value = (uint8_t)charToValue(cnpj[i]);
        sum1 += (uint16_t)(value * weights1[i]);
        sum2 += (uint16_t)(value * weights2[i]);
    }

    uint16_t remainder = (uint16_t)(sum1 % 11u);
    uint8_t dv1 = 0;
    if (remainder >= 2u) {
        dv1 = (uint8_t)(11u - remainder);
    }
    cnpj[12] = (char)('0' + dv1);

    sum2 += (uint16_t)(dv1 * 2u);
    remainder = (uint16_t)(sum2 % 11u);
    uint8_t dv2 = 0;
    if (remainder >= 2u) {
        dv2 = (uint8_t)(11u - remainder);
    }
    cnpj[13] = (char)('0' + dv2);
    cnpj[14] = '\0';
}

void generateValidCNPJVersion(char cnpj[15], const char *cnpjVersion) {
    if (cnpjVersion != NULL && strcmp(cnpjVersion, CNPJ_V2) == 0) {
        generateValidCNPJV2(cnpj);
        return;
    }

    generateValidCNPJV1(cnpj);
}

void generateValidCNPJ(char cnpj[15]) {
    if ((randomUint64() & 1u) == 0u) {
        generateValidCNPJV1(cnpj);
        return;
    }

    generateValidCNPJV2(cnpj);
}

int main(void) {
    srand((unsigned int)time(NULL));
    char cnpj[15];
    generateValidCNPJ(cnpj);
    printf("Generated CNPJ: %s\n", cnpj);
    return 0;
}
