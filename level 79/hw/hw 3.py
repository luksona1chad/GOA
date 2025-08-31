def parking_fee(hours):
    if hours <= 1:
        return "უფასო"
    elif 1 < hours <= 3:
        return "5 ლარი"
    elif 3 < hours <= 6:
        return "10 ლარი"
    else:
        return "20 ლარი"
print(parking_fee(1))
