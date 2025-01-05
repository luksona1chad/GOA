car = {
    # key : value
    "brand": "ford",
    "year" : 1965,
}
print(car["brand"])
print(car.get["brand"])

car["color"] = "red"
car.setdefault("type", "mercedes")

print(car)