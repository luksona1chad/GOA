import random

def favorite_animals():
    animals_list = []
    for _ in range(4):
        animal = input('What is your favorite animal? ')
        animals_list.append(animal)
    
    random_animal = random.choice(animals_list)
    print(f'Random favorite animal: {random_animal}')

favorite_animals()
