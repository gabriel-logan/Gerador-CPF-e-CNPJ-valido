# cpf-and-cnpj-generator

[![PyPI version](https://badge.fury.io/py/cpf-and-cnpj-generator.svg)](https://badge.fury.io/py/cpf-and-cnpj-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PyPI downloads](https://img.shields.io/pypi/dm/cpf-and-cnpj-generator.svg?style=flat-square)](https://pypistats.org/packages/cpf-and-cnpj-generator)

Feel free to find bugs and report them to me. Your feedback is highly appreciated. Hugs from Gabriel Logan!

## Documentation

https://gabriel-logan.github.io/Gerador-CPF-e-CNPJ-valido/py

### Installation

```bash
pip install cpf-and-cnpj-generator
```

# Available Functions

- **generate_cnpj**: CNPJ generation by version.
- **generate_cnpj_v1**: Numeric CNPJ generation (v1).
- **generate_cnpj_v2**: Alphanumeric CNPJ generation (v2).
- **generate_cpf**: CPF generation.

## Usage

Here is an example of how to use the functions in this package:

```python
from cpf_and_cnpj_generator import CNPJ_V1, CNPJ_V2, generate_cnpj, generate_cpf
```

```python
# Generate a valid CNPJ v1 (numeric, default)
cnpj = generate_cnpj()
print(cnpj)

# Generate CNPJ v1 explicitly
cnpj_v1 = generate_cnpj(CNPJ_V1)
print(cnpj_v1)

# Generate a valid CNPJ v2 (alphanumeric)
cnpj_v2 = generate_cnpj(CNPJ_V2)
print(cnpj_v2)

# Generate a valid CPF
cpf = generate_cpf()
print(cpf)
```

## CNPJ — Supported Versions

The generator supports both official CNPJ standards:

- **`v1`**: traditional numeric CNPJ, with 14 digits.
- **`v2`**: alphanumeric CNPJ, with 12 alphanumeric characters + 2 check digits.

When no version is provided, `generate_cnpj()` uses **`v1`** by default.

Feel free to explore the various functions and experiment with different inputs to understand their behavior. If you encounter any issues or have suggestions, don't hesitate to reach out to me. Your feedback is valuable and helps improve the package. Happy coding!

# By - Gabriel Logan
