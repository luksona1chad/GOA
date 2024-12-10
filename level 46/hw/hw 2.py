import random

def random_movies():
    movies = ['Inception', 'The Dark Knight', 'Titanic', 'Avatar', 'Interstellar', 'The Matrix']
    random_selection = random.sample(movies, 4)
    print(f'Randomly selected movies: {random_selection}')

random_movies()
