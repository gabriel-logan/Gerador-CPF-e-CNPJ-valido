package cpfandcnpj_test

import (
	"testing"

	"github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj"
)

func TestCPFBytesToString(t *testing.T) {
	value := cpfandcnpj.CPFBytes{'1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1'}

	if got := value.ToString(); got != "12345678901" {
		t.Fatalf("ToString() = %q, want %q", got, "12345678901")
	}

	if got := value.ToUnsafeString(); got != "12345678901" {
		t.Fatalf("ToUnsafeString() = %q, want %q", got, "12345678901")
	}
}

func TestCNPJBytesToString(t *testing.T) {
	value := cpfandcnpj.CNPJBytes{'1', '2', '3', '4', '5', '6', '7', '8', '0', '0', '0', '1', '9', '5'}

	if got := value.ToString(); got != "12345678000195" {
		t.Fatalf("ToString() = %q, want %q", got, "12345678000195")
	}

	if got := value.ToUnsafeString(); got != "12345678000195" {
		t.Fatalf("ToUnsafeString() = %q, want %q", got, "12345678000195")
	}
}
