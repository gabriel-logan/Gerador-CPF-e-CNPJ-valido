# cpf-and-cnpj-generator

This package generates valid **CPF** and **CNPJ** values in C.

The CNPJ generator supports both official standards:

- **Numeric CNPJ v1**: traditional standard, with 14 digits.
- **Alphanumeric CNPJ v2**: new official standard, with 12 alphanumeric characters + 2 check digits.

## How to use

```bash
gcc cpfGenerator.c -o cpfGenerator
./cpfGenerator
```

```bash
gcc cnpjGenerator.c -o cnpjGenerator
./cnpjGenerator
```

## Generating CNPJ by Version

```c
char cnpj[15];

// Default: numeric CNPJ v1
generateValidCNPJ(cnpj);

// Explicit CNPJ v1
generateValidCNPJV1(cnpj);
generateValidCNPJVersion(cnpj, CNPJ_V1);

// Alphanumeric CNPJ v2
generateValidCNPJV2(cnpj);
generateValidCNPJVersion(cnpj, CNPJ_V2);
```

When no version is provided, `generateValidCNPJ` uses **CNPJ v1** by default.
