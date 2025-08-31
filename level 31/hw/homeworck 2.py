my_list = ["apple",  "banana","water melon"]
new_item = input("რა ელემენტი გსურთ დაამატოთ? ")
index = int(input("სად გსურთ დაამატოთ (ინდექსი): "))
my_list.insert(index, new_item)
print(my_list)
