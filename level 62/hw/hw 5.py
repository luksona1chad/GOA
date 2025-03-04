def sum_str(a, b):
    if b == "" and a == "":
        return "0"
    if a == "":
        return b
    elif b == "":
        return a
    return str(int(a) + int(b))