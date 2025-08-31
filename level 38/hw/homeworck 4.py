def check_number():
    number = int(input("გთხოვთ, შეიტანოთ რიცხვი: "))
    
    if number > 5:
        return "შენ გადახვედი შემდეგ ეტაპზე"
    else:
        return "შენ არ გადახვედი შემდეგ ეტაპზე"

result = check_number()
print(result)

def check_number_2(number):
    if number > 5:
        return "შენ გადახვედი შემდეგ ეტაპზე"
    else:
        return "შენ არ გადახვედი შემდეგ ეტაპზე"

result = check_number_2(3)
print(result)


