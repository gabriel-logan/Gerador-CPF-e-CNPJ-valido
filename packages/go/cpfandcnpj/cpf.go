package cpfandcnpj

import (
	"math/rand"
)

// GenerateCPF generates a valid CPF number.
// The CPF is an 11-digit number used to identify individuals in Brazil.
// It returns bytes representing a valid CPF number.
func GenerateCPF() Bytes {
	var sum1, sum2 uint16 // <- to avoid uint8 overflow
	out := make(Bytes, 11)
	random := rand.Uint64()

	for i := 0; i < 9; i++ {
		d := uint8(random % 10)
		random /= 10
		out[i] = d + '0'

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
	out[9] = dv1 + '0'

	sum2 += uint16(dv1 * 2)

	// Calculate second check digit
	r2 := uint8(sum2 % 11)
	dv2 := uint8(0)
	if r2 >= 2 {
		dv2 = 11 - r2
	}
	out[10] = dv2 + '0'

	return out
}
