def check_score(score):
    if 90 <= score <= 100:
        return "შესანიშნავი!"
    elif 75 <= score <= 89:
        return "კარგი!"
    elif 50 <= score <= 74:
        return "საშუალო!"
    elif 30 <= score <= 49:
        return "სუსტია!"
    else:
        return "ჩავარდნა!"
print(check_score(90))