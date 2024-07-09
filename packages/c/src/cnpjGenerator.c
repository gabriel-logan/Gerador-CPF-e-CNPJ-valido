#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Function to generate a random number between 0 and 9
int randomDigit() {
    return rand() % 10;
}

// Function to generate the first 12 digits of the CNPJ
void generateCNPJBase(int cnpjBase[]) {
    for (int i = 0; i < 12; i++) {
        cnpjBase[i] = randomDigit();
    }
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

void generateValidCNPJ(char* cnpj) {
    int cnpjBase[12];
    generateCNPJBase(cnpjBase);

    int firstVerifier = calculateFirstVerifier(cnpjBase);

    int cnpjBaseWithVerifier[13];
    for (int i = 0; i < 12; i++) {
        cnpjBaseWithVerifier[i] = cnpjBase[i];
    }
    cnpjBaseWithVerifier[12] = firstVerifier;

    int secondVerifier = calculateSecondVerifier(cnpjBaseWithVerifier, firstVerifier);

    sprintf(cnpj, "%d%d%d%d%d%d%d%d%d%d%d%d%d%d",
            cnpjBase[0], cnpjBase[1], cnpjBase[2], cnpjBase[3], cnpjBase[4], cnpjBase[5],
            cnpjBase[6], cnpjBase[7], cnpjBase[8], cnpjBase[9], cnpjBase[10], cnpjBase[11],
            firstVerifier, secondVerifier);
}

int main() {
    srand(time(NULL));
    char cnpj[15];
    generateValidCNPJ(cnpj);
    printf("CNPJ válido gerado: %s\n", cnpj);
    return 0;
}
