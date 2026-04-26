package cpfandcnpj_test

import (
	"testing"

	mv "github.com/Multiform-Validator/go"
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

	for i := 0; i < 10000; i++ {
		cnpjv1 := cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV1)

		err := mv.IsCNPJ(cnpjv1)

		if err != nil {
			t.Errorf("Generated CNPJv1 is not valid: %s", err)
		}

		cnpjv2 := cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV2)

		err = mv.IsCNPJ(cnpjv2)

		if err != nil {
			t.Errorf("Generated CNPJv2 is not valid: %s", err)
		}
	}
}
