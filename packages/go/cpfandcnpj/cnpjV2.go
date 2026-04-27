// Feito por: Logan

package cpfandcnpj

import (
	"math/rand"
)

// AlphanumericChars contains the allowed characters for the CNPJ v2 base.
const AlphanumericChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

func charToValue(char byte) int {
	if char >= '0' && char <= '9' {
		return int(char - '0')
	}

	if char >= 'A' && char <= 'Z' {
		return int(char - '0')
	}

	return 0
}

// GenerateCNPJV2 generates a valid alphanumeric CNPJ (version 2).
//
// The generated CNPJ consists of 12 alphanumeric characters followed by
// 2 numeric check digits, following the new official standard introduced
// by Receita Federal / SERPRO.
//
// Returns:
//
//   - A valid alphanumeric CNPJ Bytes value with 14 characters.
//
// Example:
//
//	GenerateCNPJV2() // e.g., "12.ABC.345/01DE-35"
func GenerateCNPJV2() Bytes {
	cnpj := make(Bytes, 14)
	random := rand.Uint64()
	sum1 := 0
	sum2 := 0

	weights1 := [12]int{5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2}
	weights2 := [12]int{6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3}

	for i := 0; i < 12; i++ {
		index := random % uint64(len(AlphanumericChars))
		random /= uint64(len(AlphanumericChars))
		cnpj[i] = AlphanumericChars[index]

		value := charToValue(cnpj[i])
		sum1 += value * weights1[i]
		sum2 += value * weights2[i]
	}

	remainder := sum1 % 11
	firstDV := 0
	if remainder > 1 {
		firstDV = 11 - remainder
	}
	cnpj[12] = byte('0' + firstDV)

	sum2 += firstDV * 2
	remainder = sum2 % 11
	secondDV := 0
	if remainder > 1 {
		secondDV = 11 - remainder
	}
	cnpj[13] = byte('0' + secondDV)

	return cnpj
}
