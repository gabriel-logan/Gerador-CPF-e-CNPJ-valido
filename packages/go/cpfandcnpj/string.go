package cpfandcnpj

// CPFBytes represents a generated CPF as a fixed-size byte array.
type CPFBytes [11]byte

// CNPJBytes represents a generated CNPJ as a fixed-size byte array.
type CNPJBytes [14]byte

// ToString converts generated CPF bytes into a string.
func (v CPFBytes) ToString() string {
	return string(v[:])
}

// ToString converts generated CNPJ bytes into a string.
func (v CNPJBytes) ToString() string {
	return string(v[:])
}
