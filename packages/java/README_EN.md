# cpf-and-cnpj-generator

## Description

This package provides readable and efficient code to generate valid CPF and CNPJ.

The CNPJ generator supports both official standards:

- **Numeric CNPJ v1**: traditional standard, with 14 digits.
- **Alphanumeric CNPJ v2**: new official standard, with 12 alphanumeric characters + 2 check digits.

## Prerequisites

- Java 8 or higher

## Download

- Download the project JAR file [cpf_and_cnpj-generator-1.0.0.jar](https://github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/raw/refs/heads/main/packages/java/dist/cpf_and_cnpj-generator-1.0.0.jar)

You can also simply copy the project source code and use it in your project.

## Usage

```java
String cpf = Cpf.generateCpf();

// Default: numeric CNPJ v1
String cnpj = Cnpj.generateCnpj();

// Explicit CNPJ v1
String cnpjV1 = Cnpj.generateCnpj(Cnpj.CNPJ_V1);
String cnpjV1Direct = Cnpj.generateCnpjV1();

// Alphanumeric CNPJ v2
String cnpjV2 = Cnpj.generateCnpj(Cnpj.CNPJ_V2);
String cnpjV2Direct = Cnpj.generateCnpjV2();
```

When no version is provided, `Cnpj.generateCnpj()` uses **CNPJ v1** by default.
