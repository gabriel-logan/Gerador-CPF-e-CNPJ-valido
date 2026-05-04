# cpf-and-cnpj-generator

[![Versão PyPI](https://badge.fury.io/py/cpf-and-cnpj-generator.svg)](https://badge.fury.io/py/cpf-and-cnpj-generator)
[![Licença: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads PyPI](https://img.shields.io/pypi/dm/cpf-and-cnpj-generator.svg?style=flat-square)](https://pypistats.org/packages/cpf-and-cnpj-generator)

Sinta-se à vontade para encontrar bugs e relatá-los para mim. Seu feedback é muito apreciado. Abraços do Gabriel Logan!

Este pacote oferece geração de CPF/CNPJ com suporte ao **novo CNPJ alfanumérico** e uma implementação mais cuidadosa do que a média das bibliotecas utilitárias desse nicho.

## Documentação

https://gabriel-logan.github.io/Gerador-CPF-e-CNPJ-valido/py

### Instalação

```bash
pip install cpf-and-cnpj-generator
```

# Funções Disponíveis

- **generate_cnpj**: Geração de CNPJ por versão.
- **generate_cnpj_v1**: Geração de CNPJ numérico (v1).
- **generate_cnpj_v2**: Geração de CNPJ alfanumérico (v2).
- **generate_cpf**: Geração de CPF.

## Uso

Aqui está um exemplo de como usar as funções neste pacote:

```python
from cpf_and_cnpj_generator import CNPJ_V1, CNPJ_V2, generate_cnpj, generate_cpf
```

```python
# Gerar um CNPJ v1 válido (numérico, padrão)
cnpj = generate_cnpj()
print(cnpj)

# Gerar um CNPJ v1 explicitamente
cnpj_v1 = generate_cnpj(CNPJ_V1)
print(cnpj_v1)

# Gerar um CNPJ v2 válido (alfanumérico)
cnpj_v2 = generate_cnpj(CNPJ_V2)
print(cnpj_v2)

# Gerar um CPF válido
cpf = generate_cpf()
print(cpf)
```

## CNPJ — Versões suportadas

O gerador suporta os dois padrões oficiais de CNPJ:

- **`v1`**: CNPJ numérico tradicional, com 14 dígitos.
- **`v2`**: CNPJ alfanumérico, com 12 caracteres alfanuméricos + 2 dígitos verificadores.

Quando nenhuma versão é informada, `generate_cnpj()` usa **`v1`** por padrão.

Sinta-se à vontade para explorar as várias funções e experimentar diferentes entradas para entender seu comportamento. Se você encontrar algum problema ou tiver sugestões, não hesite em entrar em contato comigo. Seu feedback é valioso e ajuda a melhorar o pacote. Boa codificação!

# Por - Gabriel Logan
