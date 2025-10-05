package cpfandcnpj

import "math/rand"

func calculateFirstVerifier(cnpjBase [14]int) int {
	weights := []int{5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2}

	sum := 0
	for i := 0; i < 12; i++ {
		sum += cnpjBase[i] * weights[i]
	}

	remainder := sum % 11

	if remainder < 2 {
		return 0
	}

	return 11 - remainder
}

func calculateSecondVerifier(cnpjBase [14]int, firstVerifier int) int {
	weights := []int{6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2}

	sum := 0

	for i := 0; i < 12; i++ {
		sum += cnpjBase[i] * weights[i]
	}

	sum += firstVerifier * weights[12]

	remainder := sum % 11

	if remainder < 2 {
		return 0
	}

	return 11 - remainder
}

func GenerateCNPJ() string {
	cnpjBase := [14]int{}

	for i := 0; i < 12; i++ {
		cnpjBase[i] = rand.Intn(10)
	}

	cnpjBase[12] = calculateFirstVerifier(cnpjBase)
	cnpjBase[13] = calculateSecondVerifier(cnpjBase, cnpjBase[12])

	out := [14]byte{}

	for i := 0; i < 14; i++ {
		out[i] = byte(cnpjBase[i] + '0')
	}

	return string(out[:])
}
