#1)
number = int(input("შეიყვანეთ რიცხვი: "))
if number == 0:
    print(0)
elif number % 2 == 0:
    print("ლუწია")
else:
    print("კენტია")

#2)
numbers = []
for i in range(10):
    num = int(input("შეიყვანეთ რიცხვი: "))
    numbers.append(num)

results = []
for num in numbers:
    if num == 0:
        results.append(0)
    elif num % 2 == 0:
        results.append("ლუწია")
    else:
        results.append("კენტია")

print(results)
