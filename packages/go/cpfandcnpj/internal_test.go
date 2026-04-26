package cpfandcnpj

import "testing"

func TestGenerateCNPJWithInvalidVersionFallsBackToV1(t *testing.T) {
	cnpj := GenerateCNPJ(CNPJVersion("invalid"))

	if len(cnpj) != 14 {
		t.Errorf("Expected CNPJ length of 14, got %d", len(cnpj))
	}

	for i := 0; i < 14; i++ {
		if cnpj[i] < '0' || cnpj[i] > '9' {
			t.Errorf("Expected fallback CNPJ to contain only digits, found '%c' at position %d", cnpj[i], i)
		}
	}
}

func TestCharToValueWithInvalidChar(t *testing.T) {
	value := charToValue('a')

	if value != 0 {
		t.Errorf("Expected invalid char value to be 0, got %d", value)
	}
}

func TestPackageToString(t *testing.T) {
	value := ToString([]byte("12345678901"))

	if value != "12345678901" {
		t.Errorf("Expected string conversion to match, got %s", value)
	}
}
