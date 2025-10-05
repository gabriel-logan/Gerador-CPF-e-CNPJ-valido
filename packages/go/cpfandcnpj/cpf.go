package cpfandcnpj

import (
	"math/rand"
	"strconv"
)

func GenerateCPF() string {
	digits := [11]int{}

	sum1 := 0
	sum2 := 0

	for i := 0; i < 9; i++ {
		digits[i] = rand.Intn(10)

		weight1 := 10 - i

		sum1 += digits[i] * weight1
		sum2 += digits[i] * (weight1 + 1)
	}

	r1 := sum1 % 11
	dv1 := 0
	if r1 < 2 {
		dv1 = 0
	} else {
		dv1 = 11 - r1
	}
	digits[9] = dv1

	sum2 += dv1 * 2

	r2 := sum2 % 11
	dv2 := 0
	if r2 < 2 {
		dv2 = 0
	} else {
		dv2 = 11 - r2
	}
	digits[10] = dv2

	out := ""

	for i := 0; i < 11; i++ {
		out += strconv.Itoa(digits[i])
	}

	return out
}
