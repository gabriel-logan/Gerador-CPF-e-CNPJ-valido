# cpf-and-cnpj-generator

## Descrição

Esse pacote fornece um código legível e eficiente para gerar CPF e CNPJ válidos.

O gerador de CNPJ suporta os dois padrões oficiais:

- **CNPJ v1 numérico**: padrão tradicional, com 14 dígitos.
- **CNPJ v2 alfanumérico**: novo padrão oficial, com 12 caracteres alfanuméricos + 2 dígitos verificadores.

## Pré-requisitos

- Java 8 ou superior

## Download

- Baixe o arquivo JAR do projeto [cpf_and_cnpj-generator-1.0.0.jar](https://github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/raw/refs/heads/main/packages/java/dist/cpf_and_cnpj-generator-1.0.0.jar)

Você também pode simplesmente copiar o código fonte do projeto e utiliza-lo em seu projeto.

## Uso

```java
String cpf = Cpf.generateCpf();

// Padrão: CNPJ v1 numérico
String cnpj = Cnpj.generateCnpj();

// CNPJ v1 explícito
String cnpjV1 = Cnpj.generateCnpj(Cnpj.CNPJ_V1);
String cnpjV1Direct = Cnpj.generateCnpjV1();

// CNPJ v2 alfanumérico
String cnpjV2 = Cnpj.generateCnpj(Cnpj.CNPJ_V2);
String cnpjV2Direct = Cnpj.generateCnpjV2();
```

Quando nenhuma versão é informada, `Cnpj.generateCnpj()` usa **CNPJ v1** por padrão.
