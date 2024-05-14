import random

# Função para gerar um dígito aleatório entre 0 e 9
def random_digit():
    return random.randint(0, 9)

# Função para gerar os 12 primeiros dígitos do CNPJ
def generate_cnpj_base():
    cnpj_base = [random_digit() for _ in range(12)]
    return cnpj_base

# Função para calcular o primeiro dígito verificador
def calculate_first_verifier(cnpj_base):
    weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    total_sum = sum(cnpj_base[i] * weight[i] for i in range(12))
    remainder = total_sum % 11
    return 0 if remainder < 2 else 11 - remainder

# Função para calcular o segundo dígito verificador
def calculate_second_verifier(cnpj_base, first_verifier):
    weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
    total_sum = sum(cnpj_base[i] * weight[i] for i in range(12))
    total_sum += first_verifier * weight[12]
    remainder = total_sum % 11
    return 0 if remainder < 2 else 11 - remainder

def generate_cnpj():
    cnpj_base = generate_cnpj_base()
    first_verifier = calculate_first_verifier(cnpj_base)
    second_verifier = calculate_second_verifier(cnpj_base + [first_verifier], first_verifier)
    return ''.join(map(str, cnpj_base)) + str(first_verifier) + str(second_verifier)