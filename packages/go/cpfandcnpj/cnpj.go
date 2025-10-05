package cpfandcnpj

import "math/rand"

func calculateFirstVerifier(cnpjBase [14]uint8) uint8 {
	weights := [12]uint8{5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2}

	sum := uint16(0)
	for i := 0; i < 12; i++ {
		sum += uint16(cnpjBase[i]) * uint16(weights[i])
	}

	remainder := sum % 11

	if remainder < 2 {
		return 0
	}

	return 11 - uint8(remainder)
}

func calculateSecondVerifier(cnpjBase [14]uint8, firstVerifier uint8) uint8 {
	weights := [13]uint8{6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2}

	sum := uint16(0)

	for i := 0; i < 12; i++ {
		sum += uint16(cnpjBase[i]) * uint16(weights[i])
	}

	sum += uint16(firstVerifier) * uint16(weights[12])

	remainder := sum % 11

	if remainder < 2 {
		return 0
	}

	return 11 - uint8(remainder)
}

// GenerateCNPJ generates a valid CNPJ number.
// The CNPJ is a 14-digit number used to identify legal entities in Brazil.
// This function creates a random CNPJ number and calculates its two verifier digits.
// It returns a string representing a valid CNPJ number in the format "XXXXXXXXXXXXXX".
func GenerateCNPJ() string {
	cnpjBase := [14]uint8{}

	for i := 0; i < 12; i++ {
		cnpjBase[i] = uint8(rand.Intn(10))
	}

	cnpjBase[12] = calculateFirstVerifier(cnpjBase)
	cnpjBase[13] = calculateSecondVerifier(cnpjBase, cnpjBase[12])

	out := [14]byte{}

	for i := 0; i < 14; i++ {
		out[i] = byte(cnpjBase[i] + '0')
	}

	return string(out[:])
}
