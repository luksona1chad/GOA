def binary_array_to_number(arr):
    x = 0
    for i in range (len(arr)):
        x = x * 2 + arr [i]
    return x