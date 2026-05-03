package cpfandcnpj_test

import (
	"math/rand"
	"testing"

	mv "github.com/Multiform-Validator/go"
	"github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj"
)

func TestGenerateCNPJ(t *testing.T) {
	t.Run("without version generates valid cnpjs in both formats", func(t *testing.T) {
		t.Cleanup(func() {
			rand.Seed(1)
		})

		foundV1 := false
		foundV2 := false

		for seed := int64(1); seed <= 256; seed++ {
			rand.Seed(seed)
			cnpj := cpfandcnpj.GenerateCNPJ()

			if err := mv.IsCNPJ(cnpj.ToString()); err != nil {
				t.Fatalf("Generated CNPJ without version is not valid for seed %d: %s", seed, err)
			}

			hasLetter := false
			for i := 0; i < 12; i++ {
				if cnpj[i] >= 'A' && cnpj[i] <= 'Z' {
					hasLetter = true
					break
				}
			}

			if hasLetter {
				foundV2 = true
			} else {
				foundV1 = true
			}

			if foundV1 && foundV2 {
				break
			}
		}

		if !foundV1 || !foundV2 {
			t.Fatalf("Expected GenerateCNPJ() to produce both v1 and v2 formats, got v1=%t v2=%t", foundV1, foundV2)
		}
	})

	for i := 0; i < 10000; i++ {
		cnpjv1 := cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV1)

		err := mv.IsCNPJ(cnpjv1.ToString())

		if err != nil {
			t.Errorf("Generated CNPJv1 is not valid: %s", err)
		}

		cnpjv2 := cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV2)

		err = mv.IsCNPJ(cnpjv2.ToString())

		if err != nil {
			t.Errorf("Generated CNPJv2 is not valid: %s", err)
		}
	}
}
