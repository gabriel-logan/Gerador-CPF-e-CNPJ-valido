package main

import "github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/src/cpf"

func main() {
	cpf := cpf.GenerateCPF()
	println("Generated CPF:", cpf)
}
