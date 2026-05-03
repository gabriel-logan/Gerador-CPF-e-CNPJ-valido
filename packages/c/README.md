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

## Gerando CNPJ por versão

```c
char cnpj[15];

// Aleatório entre CNPJ v1 e v2
generateValidCNPJ(cnpj);

// CNPJ v1 explícito
generateValidCNPJV1(cnpj);
generateValidCNPJVersion(cnpj, CNPJ_V1);

// CNPJ v2 alfanumérico
generateValidCNPJV2(cnpj);
generateValidCNPJVersion(cnpj, CNPJ_V2);
```

Quando nenhuma versão é informada, `generateValidCNPJ` escolhe aleatoriamente entre **CNPJ v1** e **CNPJ v2**.
