import unittest

from cpf_and_cnpj_generator import CNPJ_V1, CNPJ_V2, generate_cnpj, generate_cnpj_v1, generate_cnpj_v2


WEIGHTS_FIRST = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
WEIGHTS_SECOND = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3]


def char_to_value(character):
    return ord(character) - ord("0")


def calculate_digit(values, weights):
    remainder = sum(value * weight for value, weight in zip(values, weights)) % 11
    return 0 if remainder < 2 else 11 - remainder


def cnpj_v1_is_valid(cnpj):
    values = [int(character) for character in cnpj[:12]]
    first_digit = calculate_digit(values, WEIGHTS_FIRST)
    second_digit = calculate_digit(values + [first_digit], WEIGHTS_SECOND + [2])

    return cnpj[12:] == f"{first_digit}{second_digit}"


def cnpj_v2_is_valid(cnpj):
    values = [char_to_value(character) for character in cnpj[:12]]
    first_digit = calculate_digit(values, WEIGHTS_FIRST)
    second_digit = calculate_digit(values + [first_digit], WEIGHTS_SECOND + [2])

    return cnpj[12:] == f"{first_digit}{second_digit}"


class CnpjGeneratorTest(unittest.TestCase):
    def test_generates_valid_cnpj_v1_by_default(self):
        for _ in range(10000):
            cnpj = generate_cnpj()

            self.assertRegex(cnpj, r"^\d{14}$")
            self.assertTrue(cnpj_v1_is_valid(cnpj))

    def test_generates_valid_cnpj_v1_by_version(self):
        for _ in range(10000):
            cnpj = generate_cnpj(CNPJ_V1)

            self.assertRegex(cnpj, r"^\d{14}$")
            self.assertTrue(cnpj_v1_is_valid(cnpj))

    def test_generates_valid_cnpj_v1_directly(self):
        cnpj = generate_cnpj_v1()

        self.assertRegex(cnpj, r"^\d{14}$")
        self.assertTrue(cnpj_v1_is_valid(cnpj))

    def test_generates_valid_cnpj_v2_by_version(self):
        for _ in range(10000):
            cnpj = generate_cnpj(CNPJ_V2)

            self.assertRegex(cnpj, r"^[0-9A-Z]{12}\d{2}$")
            self.assertTrue(cnpj_v2_is_valid(cnpj))

    def test_generates_valid_cnpj_v2_directly(self):
        cnpj = generate_cnpj_v2()

        self.assertRegex(cnpj, r"^[0-9A-Z]{12}\d{2}$")
        self.assertTrue(cnpj_v2_is_valid(cnpj))


if __name__ == "__main__":
    unittest.main()
