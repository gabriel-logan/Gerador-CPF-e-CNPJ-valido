package cpfandcnpj

import (
	"math/rand"
)

/**
 * GenerateCPF generates a valid CPF number.
 * The CPF is an 11-digit number used to identify individuals in Brazil.
 * This function creates a random CPF number and calculates its two verifier digits.
 *
 * @return A string representing a valid CPF number in the format "XXX.XXX.XXX-XX".
 */
func GenerateCPF() string {
	var digits [11]uint8
	var sum1, sum2 uint16 // <- to avoid uint8 overflow

	for i := 0; i < 9; i++ {
		d := uint8(rand.Intn(10))
		digits[i] = d

		weights := uint8(10 - i)
		sum1 += uint16(d * weights)
		sum2 += uint16(d * (weights + 1))
	}

	// Calculate first check digit
	r1 := uint8(sum1 % 11)
	dv1 := uint8(0)
	if r1 >= 2 {
		dv1 = 11 - r1
	}
	digits[9] = dv1

	sum2 += uint16(dv1 * 2)

	// Calculate second check digit
	r2 := uint8(sum2 % 11)
	dv2 := uint8(0)
	if r2 >= 2 {
		dv2 = 11 - r2
	}
	digits[10] = dv2

	out := [11]byte{}

	for i := 0; i < len(out); i++ {
		out[i] = digits[i] + '0'
	}

	return string(out[:])
}
