package main

import "github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj"

func main() {
	cpf := cpfandcnpj.GenerateCPF()
	cnpj := cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV1)
	println("Generated CPF:", cpf)
	println("Generated CNPJ:", cnpj)
}
