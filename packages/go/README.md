## Gerador de CPF e CNPJ Válido

## Installation

```bash
go get github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go
```

## Usage

```go
package main

import (
	"fmt"

	"github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj"
)

func main() {
	cpf := cpfandcnpj.GenerateCPF()
	cnpj := cpfandcnpj.GenerateCNPJ()

	fmt.Println("Generated CPF:", cpf)
	fmt.Println("Generated CNPJ:", cnpj)
}
```
