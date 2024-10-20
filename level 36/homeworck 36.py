menu = [
    "1. ხაჭაპური",
    "2. ხორცი",
    "3. შაურმა",
    "4. ხინკალი",
    "5. ლობიანი"
]
choose = []
print("აირჩიეთ შენი საჭმელი")
for item in menu:
    print(item)
while True:
    selection = (input("შეიყვანეთ თქვენი არჩევანი ან 'exit' "))
    if selection.lower() == 'exit':
        break
    if selection in ['1', '2', '3', '4', '5']:
        food_item = menu[int(selection) - 1]
        choose.append(food_item)
        print(f"დამატებულია: {food_item}")
    else:
        print("არასწორია")
print("თქვენი არჩევანი:")
for food in choose:
    print(food)
