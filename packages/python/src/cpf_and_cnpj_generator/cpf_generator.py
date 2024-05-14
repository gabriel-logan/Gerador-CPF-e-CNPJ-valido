import random

def generate_cpf():
    cpf_stored = []
    for _ in range(11):
        random_number = str(random.randint(0, 9))
        cpf_stored.append(random_number)
    
    cpf_stored_string = "".join(cpf_stored)
    numero_base = 10
    numero_base2 = 11
    soma_total = 0
    soma_total2 = 0
    primeiro_verificador = 0
    segundo_verificador = 0
    
    for repetidor in range(11):
        for contador in cpf_stored_string[repetidor]:
            multiplicador = int(contador) * numero_base
            numero_base -= 1
            soma_total += multiplicador
        
        for contador2 in cpf_stored_string[repetidor]:
            multiplicador2 = int(contador2) * numero_base2
            numero_base2 -= 1
            soma_total2 += multiplicador2
        
        valor_de_verificacao = soma_total - int(cpf_stored_string[9])
        valor_de_verificacao2 = soma_total2 - int(cpf_stored_string[10])

        primeiro_verificador = 11 - (valor_de_verificacao % 11)
        segundo_verificador = 11 - (valor_de_verificacao2 % 11)

    if primeiro_verificador > 9:
        primeiro_verificador = 0

    if segundo_verificador > 9:
        segundo_verificador = 0

    if (
        primeiro_verificador == int(cpf_stored_string[9])
        and segundo_verificador == int(cpf_stored_string[10])
        and not all(digit == cpf_stored_string[0] for digit in cpf_stored_string)
    ):
        return cpf_stored_string
    
    return generate_cpf()