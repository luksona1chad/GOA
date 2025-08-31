import random

def generate_random_animals():
    animals = ['dog', 'cat', 'rabbit', 'elephant', 'tiger']
    random_animal = random.choice(animals)
    print(f'Random animal: {random_animal}')

generate_random_animals()
