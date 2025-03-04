def digitize(n):
    str_n = str(n)
    reversed_str = str_n[::-1]
    result = []
    for char in reversed_str:
        result.append(int(char))
    return result
