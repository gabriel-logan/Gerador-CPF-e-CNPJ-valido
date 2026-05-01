package cpfandcnpj_test

import (
	"testing"

	"github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj"
)

var (
	benchmarkCPF    cpfandcnpj.CPFBytes
	benchmarkCNPJ   cpfandcnpj.CNPJBytes
	benchmarkString string
)

func BenchmarkGenerateCPF(b *testing.B) {
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		benchmarkCPF = cpfandcnpj.GenerateCPF()
	}
}

func BenchmarkGenerateCNPJDefault(b *testing.B) {
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		benchmarkCNPJ = cpfandcnpj.GenerateCNPJ("")
	}
}

func BenchmarkGenerateCNPJV1ByVersion(b *testing.B) {
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		benchmarkCNPJ = cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV1)
	}
}

func BenchmarkGenerateCNPJV2ByVersion(b *testing.B) {
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		benchmarkCNPJ = cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV2)
	}
}

func BenchmarkGenerateCNPJV1(b *testing.B) {
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		benchmarkCNPJ = cpfandcnpj.GenerateCNPJV1()
	}
}

func BenchmarkGenerateCNPJV2(b *testing.B) {
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		benchmarkCNPJ = cpfandcnpj.GenerateCNPJV2()
	}
}

func BenchmarkCPFBytesToString(b *testing.B) {
	value := cpfandcnpj.CPFBytes{'1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1'}

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		benchmarkString = value.ToString()
	}
}

func BenchmarkCNPJBytesToString(b *testing.B) {
	value := cpfandcnpj.CNPJBytes{'1', '2', '3', '4', '5', '6', '7', '8', '0', '0', '0', '1', '9', '5'}

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		benchmarkString = value.ToString()
	}
}
