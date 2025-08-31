def divisors(integer):
#                start, end, step
    arr = []
    for i in range(2, integer):
        if integer % i == 0:
            arr.append(i)
    if len(arr) == 0:
        return f"{integer} is prime"
        
    return arr