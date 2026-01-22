package cpfandcnpj_test

import (
	"testing"

	"github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj"
)

func TestGenerateCNPJ(t *testing.T) {
	cnpj := cpfandcnpj.GenerateCNPJ("")

	if len(cnpj) != 14 {
		t.Errorf("Expected CNPJ length of 14, got %d", len(cnpj))
	}

	for i := 0; i < 14; i++ {
		if cnpj[i] < '0' || cnpj[i] > '9' {
			t.Errorf("Expected all characters to be digits, found '%c' at position %d", cnpj[i], i)
		}
	}
}
