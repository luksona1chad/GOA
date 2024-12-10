import random

def choose_random_animal(animal_list):
  random_index = random.choice(0, len(animal_list) - 1)
  chosen_animal = animal_list[random_index]
  print("თქვენი საყვარელი ცხოველი არის:", chosen_animal)

