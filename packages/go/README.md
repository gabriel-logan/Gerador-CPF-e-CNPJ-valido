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

	fmt.Println("Generated CPF:", cpf.ToString())
	fmt.Println("Generated CNPJ:", cnpj.ToString())
}
```

> ℹ️ Por padrão, `GenerateCNPJ` gera um **CNPJ numérico (v1)**.
> As funções de geração retornam `CPFBytes` e `CNPJBytes` (arrays fixos). Use `.ToString()` somente quando precisar de `string`.
> Se precisar evitar alocação na conversão, guarde o valor em uma variável e use `.ToUnsafeString()`.

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

### `GenerateCPF() CPFBytes`

Gera um CPF numérico válido (11 dígitos).

---

### `GenerateCNPJ(version CNPJVersion) CNPJBytes`

Gera um CNPJ válido de acordo com a versão selecionada.

**Parâmetros:**

* `CNPJV1` → CNPJ numérico (default)
* `CNPJV2` → CNPJ alfanumérico
* `""` → Assume automaticamente `CNPJV1`

---

### `CPFBytes.ToString() string`

Converte a saída do CPF para `string` quando isso for necessário.

---

### `(*CPFBytes).ToUnsafeString() string`

Converte para `string` sem cópia nem alocação.
O retorno compartilha a memória do array original, então o valor não deve ser alterado enquanto essa `string` estiver em uso.

---

### `CNPJBytes.ToString() string`

Converte a saída do CNPJ para `string` quando isso for necessário.

---

### `(*CNPJBytes).ToUnsafeString() string`

Converte para `string` sem cópia nem alocação.
O retorno compartilha a memória do array original, então o valor não deve ser alterado enquanto essa `string` estiver em uso.

---

## 🧠 Tipos disponíveis

```go
type CPFBytes [11]byte

type CNPJBytes [14]byte

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
	cpf := cpfandcnpj.GenerateCPF()
	cnpjv1 := cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV1)
	cnpjv2 := cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV2)

	fmt.Println("CPF:", cpf.ToString())
	fmt.Println("CNPJ v1:", cnpjv1.ToString())
	fmt.Println("CNPJ v2:", cnpjv2.ToString())
	fmt.Println("CPF sem alloc:", cpf.ToUnsafeString())
}
```

---

## ⚡ Benchmarks

```bash
go test ./cpfandcnpj -bench=. -benchmem
```
