#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// Function to generate a random number between 0 and 9
int randomNum() {
    // generates a random number of 9 digits
    return rand() % 10;
}

// Function to calculate the verifier digits
int calculateDigit(int cpfArray[], int factor) {
    // The sum is calculated by multiplying each digit by a factor and summing the results
    int sum = 0;
    for (int i = 0; i < factor - 1; i++) {
        sum += cpfArray[i] * (factor - i);
    }
    // If the sum is less than 2, the verifier digit is 0, otherwise it is 11 minus the remainder of the sum divided by 11
    return sum % 11 < 2 ? 0 : 11 - (sum % 11);
}

// Function to generate and validate a CPF
void genAndValidate(char *cpf) {
    int cpfArray[11];

    // Generates an array of 9 random numbers
    for (int i = 0; i < 9; i++) {
        cpfArray[i] = randomNum();
    }

    // Calculates the first verifier digit
    cpfArray[9] = calculateDigit(cpfArray, 10);

    // Calculates the second verifier digit
    cpfArray[10] = calculateDigit(cpfArray, 11);

    // Converts the generated CPF numbers into a string
    for (int i = 0; i < 11; i++) {
        cpf[i] = '0' + cpfArray[i];
    }
    cpf[11] = '\0'; // Null-terminate the string
}

int main() {
    // Seed the random number generator
    srand(time(NULL));

    char cpf[12];
    genAndValidate(cpf);
    printf("Generated CPF: %s\n", cpf);

    return 0;
}