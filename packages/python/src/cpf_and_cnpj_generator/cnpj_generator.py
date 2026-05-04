import random

CNPJ_V1 = "v1"
CNPJ_V2 = "v2"
ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

# Função para gerar um dígito aleatório entre 0 e 9
def random_digit():
    return random.randint(0, 9)

def random_alphanumeric_char():
    return random.choice(ALPHANUMERIC_CHARS)

def char_to_value(char):
    if char.isdigit() or ("A" <= char <= "Z"):
        return ord(char) - ord("0")

    return 0

# Função para calcular o primeiro dígito verificador
def calculate_first_verifier(cnpj_base):
    weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    
    _sum = 0

    for i in range(12):
        _sum += cnpj_base[i] * weight[i]
    
    remainder = _sum % 11

    return 0 if remainder < 2 else 11 - remainder

# Função para calcular o segundo dígito verificador
def calculate_second_verifier(cnpj_base, first_verifier):
    weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    
    _sum = 0

    for i in range(12):
        _sum += cnpj_base[i] * weight[i]
    
    _sum += first_verifier * weight[12]

    remainder = _sum % 11

    return 0 if remainder < 2 else 11 - remainder

def generate_cnpj_v1():
    # Cria array de 14 elementos
    cnpj_base = [random_digit() for _ in range(12)] + [0, 0]

    cnpj_base[12] = calculate_first_verifier(cnpj_base)

    cnpj_base[13] = calculate_second_verifier(cnpj_base, cnpj_base[12])

    return ''.join(map(str, cnpj_base))

def generate_cnpj_v2():
    cnpj_base = [random_alphanumeric_char() for _ in range(12)] + ["0", "0"]
    cnpj_values = [char_to_value(char) for char in cnpj_base]

    cnpj_values[12] = calculate_first_verifier(cnpj_values)
    cnpj_values[13] = calculate_second_verifier(cnpj_values, cnpj_values[12])

    cnpj_base[12] = str(cnpj_values[12])
    cnpj_base[13] = str(cnpj_values[13])

    return ''.join(cnpj_base)

def generate_cnpj(cnpj_version=None):
    if cnpj_version is None:
        cnpj_version = CNPJ_V1 if random.getrandbits(1) == 0 else CNPJ_V2

    if cnpj_version == CNPJ_V2:
        return generate_cnpj_v2()

    return generate_cnpj_v1()
