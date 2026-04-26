package cpfandcnpj_test

import (
	"testing"

	mv "github.com/Multiform-Validator/go"
	"github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj"
)

func TestGenerateCPF(t *testing.T) {
	cpf := cpfandcnpj.GenerateCPF()

	if len(cpf) != 11 {
		t.Errorf("Expected CPF length of 11, got %d", len(cpf))
	}

	for i := 0; i < 11; i++ {
		if cpf[i] < '0' || cpf[i] > '9' {
			t.Errorf("Expected all characters to be digits, found '%c' at position %d", cpf[i], i)
		}
	}

	for i := 0; i < 10000; i++ {
		cpf := cpfandcnpj.GenerateCPF()

		err := mv.IsCPF(cpf)

		if err != nil {
			t.Errorf("Generated CPF is not valid: %s", err)
		}
	}
}
