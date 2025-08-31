def password(st):
    if len(st) < 8:
        return False
    
    is_digit = False
    is_lower = False
    is_upper = False
    
    for char in st:
        if char.isdigit():
            is_digit = True
        if char.islower():
            is_lower = True
        if char.isupper():
            is_upper = True
            
    if is_digit and is_lower and is_upper:
        return True
    return False