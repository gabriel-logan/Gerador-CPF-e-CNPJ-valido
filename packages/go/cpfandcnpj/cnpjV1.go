package cpfandcnpj

import "math/rand"

// GenerateCNPJV1 generates a valid numeric CNPJ (version 1).
//
// The generated CNPJ consists of 14 numeric digits and follows the legacy
// standard widely used and accepted in Brazil.
//
// Returns:
//
//   - A valid numeric CNPJ Bytes value with 14 digits.
//
// Example:
//
//	GenerateCNPJV1() // e.g., "12.345.678/0001-95"
func GenerateCNPJV1() Bytes {
	out := make(Bytes, 14)
	var sum1, sum2 uint16
	random := rand.Uint64()

	weights1 := [12]uint8{5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2}
	weights2 := [12]uint8{6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3}

	for i := 0; i < 12; i++ {
		d := uint8(random % 10)
		random /= 10
		out[i] = d + '0'
		sum1 += uint16(d * weights1[i])
		sum2 += uint16(d * weights2[i])
	}

	remainder := sum1 % 11
	dv1 := uint8(0)
	if remainder >= 2 {
		dv1 = 11 - uint8(remainder)
	}
	out[12] = dv1 + '0'

	sum2 += uint16(dv1 * 2)
	remainder = sum2 % 11
	dv2 := uint8(0)
	if remainder >= 2 {
		dv2 = 11 - uint8(remainder)
	}
	out[13] = dv2 + '0'

	return out
}
