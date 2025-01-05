shopping_list = ["ბანანი", "ვაშლი", "კივი", "შაურმა"]
num_items = int(input("რამდენი ნივთის დამატება გსურთ? "))
for _ in range(num_items):
    item = input("რა ნივთი გსურთ დაამატოთ? ")
    shopping_list.append(item)
print(shopping_list)
