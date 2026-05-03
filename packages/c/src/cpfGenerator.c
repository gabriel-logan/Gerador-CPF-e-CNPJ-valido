#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

static uint64_t randomUint64(void) {
    uint64_t value = 0;

    for (int i = 0; i < 5; i++) {
        value = (value << 15) | (uint64_t)(rand() & 0x7FFFu);
    }

    return value;
}

void generateValidCPF(char cpf[12]) {
    uint16_t sum1 = 0;
    uint16_t sum2 = 0;
    uint64_t random = randomUint64();

    for (int i = 0; i < 9; i++) {
        uint8_t digit = (uint8_t)(random % 10u);
        uint8_t weight = (uint8_t)(10 - i);
        random /= 10u;

        cpf[i] = (char)('0' + digit);
        sum1 += (uint16_t)(digit * weight);
        sum2 += (uint16_t)(digit * (weight + 1u));
    }

    uint8_t remainder1 = (uint8_t)(sum1 % 11u);
    uint8_t dv1 = 0;
    if (remainder1 >= 2u) {
        dv1 = (uint8_t)(11u - remainder1);
    }
    cpf[9] = (char)('0' + dv1);

    sum2 += (uint16_t)(dv1 * 2u);

    uint8_t remainder2 = (uint8_t)(sum2 % 11u);
    uint8_t dv2 = 0;
    if (remainder2 >= 2u) {
        dv2 = (uint8_t)(11u - remainder2);
    }
    cpf[10] = (char)('0' + dv2);
    cpf[11] = '\0';
}

int main(void) {
    srand((unsigned int)time(NULL));

    char cpf[12];
    generateValidCPF(cpf);
    printf("Generated CPF: %s\n", cpf);

    return 0;
}
