import random

def random_num():
    # generates a random number between 0 and 9
    return random.randint(0, 9)

def calculate_digit(cpf_list, factor):
    # The sum is calculated by multiplying each digit by a factor and summing the results
    total_sum = sum([val * (factor - idx) for idx, val in enumerate(cpf_list)])
    # If the sum is less than 2, the verifier digit is 0, otherwise it is 11 minus the remainder of the sum divided by 11
    return 0 if total_sum % 11 < 2 else 11 - (total_sum % 11)

def generate_cpf():
    # Generates a list of 9 random numbers
    cpf_list = [random_num() for _ in range(9)]

    # Calculates the first verifier digit
    first_verifier = calculate_digit(cpf_list, 10)
    cpf_list.append(first_verifier)

    # Calculates the second verifier digit
    second_verifier = calculate_digit(cpf_list, 11)
    cpf_list.append(second_verifier)

    # Returns the generated CPF as a string
    return ''.join(map(str, cpf_list))

print(generate_cpf())