import random

def add_love():
    love_string = ""
    for _ in range(5):  
        love_string += "<3" + random.choice([" ", "", " "])
    print(f'Love string: {love_string}')

add_love()
