import random

# Função para gerar um dígito aleatório entre 0 e 9
def random_digit():
    return random.randint(0, 9)

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

def generate_cnpj():
    # Cria array de 14 elementos
    cnpj_base = [random_digit() for _ in range(12)] + [0, 0]

    cnpj_base[12] = calculate_first_verifier(cnpj_base)

    cnpj_base[13] = calculate_second_verifier(cnpj_base, cnpj_base[12])

    return ''.join(map(str, cnpj_base))
