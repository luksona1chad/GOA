import random

def choose_favorite_sport():
    sport1 = input("შეიყვანეთ თქვენი პირველი საყვარელი სპორტი: ")
    sport2 = input("შეიყვანეთ თქვენი მეორე საყვარელი სპორტი: ")
    sport3 = input("შეიყვანეთ თქვენი მესამე საყვარელი სპორტი: ")
    
    sports = [sport1, sport2, sport3]
    favorite_sport = random.choice(sports)
    print(f"თქვენი საყვარელი სპორტი არის: {favorite_sport}")
