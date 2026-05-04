# cpf-and-cnpj-generator

## Description

This package provides readable and efficient code to generate valid CPF and CNPJ.

It provides a Java option with support for the **new official alphanumeric CNPJ**, a straightforward API, and a more careful implementation than what is commonly found in this category.

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

// Randomly chooses between CNPJ v1 and v2
String cnpj = Cnpj.generateCnpj();

// Explicit CNPJ v1
String cnpjV1 = Cnpj.generateCnpj(Cnpj.CNPJ_V1);
String cnpjV1Direct = Cnpj.generateCnpjV1();

// Alphanumeric CNPJ v2
String cnpjV2 = Cnpj.generateCnpj(Cnpj.CNPJ_V2);
String cnpjV2Direct = Cnpj.generateCnpjV2();
```

When no version is provided, `Cnpj.generateCnpj()` randomly chooses between **CNPJ v1** and **CNPJ v2**.
