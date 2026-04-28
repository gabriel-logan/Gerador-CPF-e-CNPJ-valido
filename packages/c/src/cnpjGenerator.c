#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define CNPJ_V1 "v1"
#define CNPJ_V2 "v2"

const char ALPHANUMERIC_CHARS[] = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Function to generate a random number between 0 and 9
int randomDigit() {
    return rand() % 10;
}

char randomAlphanumericChar() {
    return ALPHANUMERIC_CHARS[rand() % 36];
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

// Function to calculate the first verifier digit
int calculateFirstVerifier(int cnpjBase[]) {
    int weight[12] = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

    int sum = 0;

    for (int i = 0; i < 12; i++) {
        sum += cnpjBase[i] * weight[i];
    }

    int remainder = sum % 11;

    return remainder < 2 ? 0 : 11 - remainder;
}

// Function to calculate the second verifier digit
int calculateSecondVerifier(int cnpjBase[], int firstVerifier) {
    int weight[13] = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
    
    int sum = 0;

    for (int i = 0; i < 12; i++) {
        sum += cnpjBase[i] * weight[i];
    }

    sum += firstVerifier * weight[12];

    int remainder = sum % 11;

    return remainder < 2 ? 0 : 11 - remainder;
}

void generateValidCNPJV1(char* cnpj) {
    int cnpjBase[14];

    for (int i = 0; i < 12; i++) {
        cnpjBase[i] = randomDigit();
    }

    cnpjBase[12] = calculateFirstVerifier(cnpjBase);

    cnpjBase[13] = calculateSecondVerifier(cnpjBase, cnpjBase[12]);

    for (int i = 0; i < 14; i++) {
        cnpj[i] = cnpjBase[i] + '0';
    }

    cnpj[14] = '\0';
}

void generateValidCNPJV2(char* cnpj) {
    int cnpjBase[14];

    for (int i = 0; i < 12; i++) {
        cnpj[i] = randomAlphanumericChar();
        cnpjBase[i] = charToValue(cnpj[i]);
    }

    cnpjBase[12] = calculateFirstVerifier(cnpjBase);
    cnpjBase[13] = calculateSecondVerifier(cnpjBase, cnpjBase[12]);

    cnpj[12] = cnpjBase[12] + '0';
    cnpj[13] = cnpjBase[13] + '0';
    cnpj[14] = '\0';
}

void generateValidCNPJVersion(char* cnpj, const char* cnpjVersion) {
    if (cnpjVersion != NULL && strcmp(cnpjVersion, CNPJ_V2) == 0) {
        generateValidCNPJV2(cnpj);
        return;
    }

    generateValidCNPJV1(cnpj);
}

void generateValidCNPJ(char* cnpj) {
    generateValidCNPJVersion(cnpj, CNPJ_V1);
}

int main() {
    srand(time(NULL));
    char cnpj[15];
    generateValidCNPJVersion(cnpj, CNPJ_V2);
    printf("CNPJ válido gerado: %s\n", cnpj);
    return 0;
}
