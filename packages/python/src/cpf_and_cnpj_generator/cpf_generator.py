import random

def random_num():
    # generates a random number between 0 and 9
    return random.randint(0, 9)

def calculate_digit(cpf_list, length, factor):
    _sum = 0

    for i in range(length):
        _sum += cpf_list[i] * (factor - i)
    
    remainder = _sum % 11

    return 0 if remainder < 2 else 11 - remainder

def generate_cpf():
    # Generates a list of 9 random numbers
    cpf_list = [random_num() for _ in range(9)] + [0, 0]

    cpf_list[9] = calculate_digit(cpf_list, 9, 10)

    cpf_list[10] = calculate_digit(cpf_list, 10, 11)

    return ''.join(map(str, cpf_list))
