# 1)ავაგოთ კალკულატორი რომელსაც 3 პარამეტრი გადაეცემა a,b, opration 
# ამათი გამოყენებით უნდა გადაწყვიტოს opertaion თუ რა გაუკეთოს a, b -ს 
# მინიმუმ კალკულატორში უნდა იყოს:
# +
# -
# /
# //
# *
def calc(a, b, operation):
    if operation == '+':
        return a + b
    elif operation == '-':
        return a - b
    elif operation == '/':
        return a / b
    elif operation == '//':
        return a // b
    elif operation == '*':
        return a * b
    else:
        return "Invalid operation"
print(calc(10, 5, '*')) 
# 2)ლუწი თუ კენტი
def is_even_or_odd(n):
    if n % 2 == 0:
        return "Even"
    else:
        return "Odd"
print(is_even_or_odd(10))
# 3)სახელის მისალმება(უნდა გამოიტანოს გამაჯობა, (შენი სახელი)
def greet(name):
    return f"გამარჯობა, {name}"
print(greet("ლუკა"))
# 4)სტრინგის გამრავლების ფუნცია
def multiply_string(s, n):
    return s * n
print(multiply_string("go", 5))
# 5) ჟან კლუდ ვადამი ვარჯიშობს, შექმქმენით ფუნქცია რომელიც დათვლის push up ების რაოდენობას
def push_ups(n):
    return n * 2
print(push_ups(25))