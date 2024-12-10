import random
def add_random_numbers_to_list(my_list):
    random_number = random.choice(1, 50)
    my_list.append(random_number)
    print(f"მეტია შემთხვევითი რიცხვი: {random_number}")
    print(f"ახალი სია: {my_list}")
