// Feito por: Logan

package cpfandcnpj

import (
	"math/rand"
)

const AlphanumericChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

func getRandomChar() byte {
	index := rand.Intn(len(AlphanumericChars))

	return AlphanumericChars[index]
}

func charToValue(char byte) int {
	ascii := int(char)

	if ascii >= 48 && ascii <= 57 {
		return ascii - 48
	}

	if ascii >= 65 && ascii <= 90 {
		return ascii - 48
	}

	return 0
}

func calculateDigitVerifier(cnpjChars []byte) int {
	weight := 2
	sum := 0

	for i := len(cnpjChars) - 1; i >= 0; i-- {
		value := charToValue(cnpjChars[i])

		sum += value * weight

		if weight == 9 {
			weight = 2
		} else {
			weight = weight + 1
		}
	}

	remainder := sum % 11

	if remainder == 0 || remainder == 1 {
		return 0
	}

	return 11 - remainder
}

func generateBaseCNPJ() []byte {
	base := make([]byte, 0, 12)

	for i := 0; i < 12; i++ {
		base = append(base, getRandomChar())
	}

	return base
}

// GenerateCNPJV2 generates a valid alphanumeric CNPJ (version 2).
//
// The generated CNPJ consists of 12 alphanumeric characters followed by
// 2 numeric check digits, following the new official standard introduced
// by Receita Federal / SERPRO.
//
// Returns:
//
//   - A valid alphanumeric CNPJ byte slice with 14 characters.
//
// Example:
//
//	GenerateCNPJV2() // e.g., "12.ABC.345/01DE-35"
func GenerateCNPJV2() Bytes {
	cnpj := generateBaseCNPJ()

	firstDV := calculateDigitVerifier(cnpj)
	cnpj = append(cnpj, byte('0'+firstDV))

	secondDV := calculateDigitVerifier(cnpj)
	cnpj = append(cnpj, byte('0'+secondDV))

	return Bytes(cnpj)
}
