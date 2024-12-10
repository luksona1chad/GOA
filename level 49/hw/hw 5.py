import random

def choose_random_sport():
  sports = []
  for i in range(3):
    sport = input("შეიყვანეთ თქვენი საყვარელი სპორტი: ")
    sports.append(sport)

  random_sport = random.choice(sports)
  print("შემთხვევით შერჩეული სპორტია:", random_sport)

choose_random_sport()