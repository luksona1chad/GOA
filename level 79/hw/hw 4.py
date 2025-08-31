def temp_checke(temp):
    if temp >= 30: 
        return "ცხელა!"
    elif (20 <= temp) and (temp >= 30):
        return "თბილი!"
    elif (10 <= temp) and (temp >= 19):
        return "ცოტა ცივა!"
    elif (9 <= temp):
        return "ძალიან ჩიცა!"
print(temp_checke(30))
print(temp_checke(20))
print(temp_checke(19))
print(temp_checke(2))
