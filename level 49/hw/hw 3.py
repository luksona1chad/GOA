import random

def add_random_symbols(string):
  symbols = ["#", "*", "%"]
  new_string = ""
  for char in string:
    new_string += char + str(random.randint(1, 10)) + random.choice(symbols)
  return new_string

