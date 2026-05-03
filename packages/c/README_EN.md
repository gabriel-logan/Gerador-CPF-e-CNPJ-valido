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

## Generating CPF

```c
char cpf[12];

GenerateCPF(cpf);
```

## Generating CNPJ by Version

```c
char cnpj[15];

// Randomly chooses between CNPJ v1 and v2
GenerateCNPJ(cnpj, NULL);

// Explicit CNPJ v1
GenerateCNPJV1(cnpj);
GenerateCNPJ(cnpj, CNPJV1);

// Alphanumeric CNPJ v2
GenerateCNPJV2(cnpj);
GenerateCNPJ(cnpj, CNPJV2);
```

When no version is provided, `GenerateCNPJ(cnpj, NULL)` randomly chooses between **CNPJ v1** and **CNPJ v2**.
