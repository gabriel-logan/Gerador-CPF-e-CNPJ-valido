# cpf-and-cnpj-generator

Este pacote gera **CPF** e **CNPJ** válidos em C.

O gerador de CNPJ suporta os dois padrões oficiais:

- **CNPJ v1 numérico**: padrão tradicional, com 14 dígitos.
- **CNPJ v2 alfanumérico**: novo padrão oficial, com 12 caracteres alfanuméricos + 2 dígitos verificadores.

## Como usar

```bash
gcc cpfGenerator.c -o cpfGenerator
./cpfGenerator
```

```bash
gcc cnpjGenerator.c -o cnpjGenerator
./cnpjGenerator
```

## Gerando CPF

```c
#include "src/cpfGenerator.h"

char cpf[12];

GenerateCPF(cpf);
```

## Gerando CNPJ por versão

```c
#include "src/cnpjGenerator.h"

char cnpj[15];

// Aleatório entre CNPJ v1 e v2
GenerateCNPJ(cnpj, NULL);

// CNPJ v1 explícito
GenerateCNPJV1(cnpj);
GenerateCNPJ(cnpj, CNPJV1);

// CNPJ v2 alfanumérico
GenerateCNPJV2(cnpj);
GenerateCNPJ(cnpj, CNPJV2);
```

Quando nenhuma versão é informada, `GenerateCNPJ(cnpj, NULL)` escolhe aleatoriamente entre **CNPJ v1** e **CNPJ v2**.
