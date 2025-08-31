def check_color(color):
    if color == "წითელი":
        return "გაჩერდი!"
    elif color == "ყვითელი":
        return "მოემზადე!"
    elif color == "მწვანე":
        return "გაიარე!"
    else:
        return "შეცდომა: უცნობი ფერი!"
print(check_color("წითელი"))