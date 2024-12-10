import random

def add_random_numbers(my_list):
  for i in range(len(my_list)):
    my_list[i] += random.randint(1, 50)
  return my_list
