def points(games):
    sum = 0
    for game in games:
#              1     
        if game[0] > game[2]:
            sum += 3
        elif  game[0] < game[2]:
            sum += 0
        else:
            sum += 1
    return sum