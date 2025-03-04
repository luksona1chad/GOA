def fake_bin(x):
    result = []
    for char in x:
        if int(char) >= 5: 
            result.append("1")
        else:
            result.append("0")
    return "".join(result)