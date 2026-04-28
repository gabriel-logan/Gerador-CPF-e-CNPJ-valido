// Feito por: Logan

package cpfandcnpj

import (
	"math/rand"
)

// AlphanumericChars contains the allowed characters for the CNPJ v2 base.
const AlphanumericChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

func charToValue(char byte) uint8 {
	if char >= '0' && char <= '9' {
		return char - '0'
	}

	if char >= 'A' && char <= 'Z' {
		return char - '0'
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
	var sum1, sum2 uint16

	weights1 := [12]uint8{5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2}
	weights2 := [12]uint8{6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3}

	for i := 0; i < 12; i++ {
		index := uint8(random % uint64(len(AlphanumericChars)))
		random /= uint64(len(AlphanumericChars))
		cnpj[i] = AlphanumericChars[index]

		value := charToValue(cnpj[i])
		sum1 += uint16(value) * uint16(weights1[i])
		sum2 += uint16(value) * uint16(weights2[i])
	}

	remainder := sum1 % 11
	firstDV := uint8(0)
	if remainder >= 2 {
		firstDV = 11 - uint8(remainder)
	}
	cnpj[12] = firstDV + '0'

	sum2 += uint16(firstDV * 2)
	remainder = sum2 % 11
	secondDV := uint8(0)
	if remainder >= 2 {
		secondDV = 11 - uint8(remainder)
	}
	cnpj[13] = secondDV + '0'

	return cnpj
}
