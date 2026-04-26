package cpfandcnpj

// Bytes represents a generated CPF/CNPJ as bytes.
// Use ToString when a string is required by another API.
type Bytes []byte

// ToString converts generated CPF/CNPJ bytes into a string.
func (value Bytes) ToString() string {
	return value.toString()
}

func (value Bytes) toString() string {
	return string(value)
}

// ToString converts generated CPF/CNPJ bytes into a string.
func ToString(value []byte) string {
	return string(value)
}
