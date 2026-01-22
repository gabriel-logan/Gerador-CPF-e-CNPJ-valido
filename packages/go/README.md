# Gerador de CPF e CNPJ Válido (Go)

Gerador de **CPF** e **CNPJ** válidos em Go, seguindo as regras oficiais da  
Receita Federal / SERPRO.

O projeto suporta **dois padrões oficiais de CNPJ**:
- **CNPJ Numérico (v1)** — padrão atual / legado
- **CNPJ Alfanumérico (v2)** — novo padrão oficial

---

## 📦 Instalação

```bash
go get github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go
```

---

## 🚀 Uso básico

```go
package main

import (
	"fmt"

	"github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj"
)

func main() {
	cpf := cpfandcnpj.GenerateCPF()

	cnpj := cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV1)
	// OU cnpj := cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV2)
	// OU cnpj := cpfandcnpj.GenerateCNPJV1()
	// OU cnpj := cpfandcnpj.GenerateCNPJV2()

	fmt.Println("Generated CPF:", cpf)
	fmt.Println("Generated CNPJ:", cnpj)
}
```

> ℹ️ Por padrão, `GenerateCNPJ` gera um **CNPJ numérico (v1)**.

---

## 🧾 Gerando CNPJ por versão

### 🔹 CNPJ v1 — Numérico (padrão)

* 14 dígitos numéricos
* Ainda amplamente utilizado
* Padrão legado / atual

```go
cnpj := cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV1)
```

Exemplo:

```
12345678000195
```

---

### 🔹 CNPJ v2 — Alfanumérico (novo padrão)

* 12 caracteres alfanuméricos + 2 dígitos verificadores
* Introduzido pela Receita Federal / SERPRO
* Usa cálculo ASCII + Módulo 11

```go
cnpj := cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV2)
```

Exemplo:

```
12ABC34501DE35
```

---

## 📚 API

### `GenerateCPF() string`

Gera um CPF numérico válido (11 dígitos).

---

### `GenerateCNPJ(version CNPJVersion) string`

Gera um CNPJ válido de acordo com a versão selecionada.

**Parâmetros:**

* `CNPJV1` → CNPJ numérico (default)
* `CNPJV2` → CNPJ alfanumérico
* `""` → Assume automaticamente `CNPJV1`

---

## 🧠 Tipos disponíveis

```go
type CNPJVersion string

const (
	CNPJV1 CNPJVersion = "v1"
	CNPJV2 CNPJVersion = "v2"
)
```

---

## 🛠️ Exemplo completo

```go
package main

import (
	"fmt"

	"github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj"
)

func main() {
	fmt.Println("CPF:", cpfandcnpj.GenerateCPF())
	fmt.Println("CNPJ v1:", cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV1))
	fmt.Println("CNPJ v2:", cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV2))
}
```
