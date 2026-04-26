package cpfandcnpj_test

import (
	"testing"

	"github.com/gabriel-logan/Gerador-CPF-e-CNPJ-valido/packages/go/cpfandcnpj"
)

var (
	benchmarkBytes  cpfandcnpj.Bytes
	benchmarkString string
)

func BenchmarkGenerateCPF(b *testing.B) {
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		benchmarkBytes = cpfandcnpj.GenerateCPF()
	}
}

func BenchmarkGenerateCNPJDefault(b *testing.B) {
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		benchmarkBytes = cpfandcnpj.GenerateCNPJ("")
	}
}

func BenchmarkGenerateCNPJV1ByVersion(b *testing.B) {
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		benchmarkBytes = cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV1)
	}
}

func BenchmarkGenerateCNPJV2ByVersion(b *testing.B) {
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		benchmarkBytes = cpfandcnpj.GenerateCNPJ(cpfandcnpj.CNPJV2)
	}
}

func BenchmarkGenerateCNPJV1(b *testing.B) {
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		benchmarkBytes = cpfandcnpj.GenerateCNPJV1()
	}
}

func BenchmarkGenerateCNPJV2(b *testing.B) {
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		benchmarkBytes = cpfandcnpj.GenerateCNPJV2()
	}
}

func BenchmarkBytesToString(b *testing.B) {
	value := cpfandcnpj.Bytes("12345678901")

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		benchmarkString = value.ToString()
	}
}

func BenchmarkToString(b *testing.B) {
	value := []byte("12345678901")

	b.ReportAllocs()
	b.ResetTimer()

	for i := 0; i < b.N; i++ {
		benchmarkString = cpfandcnpj.ToString(value)
	}
}
