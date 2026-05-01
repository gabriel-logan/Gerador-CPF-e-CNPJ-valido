package cpfandcnpj

import "unsafe"

// CPFBytes represents a generated CPF as a fixed-size byte array.
type CPFBytes [11]byte

// CNPJBytes represents a generated CNPJ as a fixed-size byte array.
type CNPJBytes [14]byte

// ToString converts generated CPF bytes into a string.
func (v CPFBytes) ToString() string {
	return string(v[:])
}

// ToUnsafeString converts generated CPF bytes into a string without copying.
// The returned string aliases the original bytes, so the underlying array
// must not be modified while the string is in use.
func (v *CPFBytes) ToUnsafeString() string {
	return unsafe.String(&v[0], len(v))
}

// ToString converts generated CNPJ bytes into a string.
func (v CNPJBytes) ToString() string {
	return string(v[:])
}

// ToUnsafeString converts generated CNPJ bytes into a string without copying.
// The returned string aliases the original bytes, so the underlying array
// must not be modified while the string is in use.
func (v *CNPJBytes) ToUnsafeString() string {
	return unsafe.String(&v[0], len(v))
}
