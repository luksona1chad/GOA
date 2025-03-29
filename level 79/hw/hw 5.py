def check_drink(drink):
    if drink == "ყავა":
        return "გაიღვიძე და იმუშავე!"
    elif drink == "ჩაი":
        return "დაისვენე და მოდუნდი!"
    elif drink == "წყალი":
        return "დაიწყე ჯანმრთელი ცხოვრება!"
    elif drink == "ლიმონათი":
        return "გაგრილდი"
    else:
        return "შეარჩიე სხვა სასმელი!"
print(check_drink("ლიმონათი"))