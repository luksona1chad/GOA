def validate_pin(pin):
    n = len(pin)
    if n != 4 and n != 6:
        return False
    for i in pin:
        if i < "0" or i > "9":
            return False
    return True