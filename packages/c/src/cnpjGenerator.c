#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Function to generate a random number between 0 and 9
int randomDigit() {
    return rand() % 10;
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

int main() {
    srand(time(NULL));
    char cnpj[15];
    generateValidCNPJ(cnpj);
    printf("CNPJ válido gerado: %s\n", cnpj);
    return 0;
}
