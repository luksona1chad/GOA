def tomy_jery(lst):
    count = 0
    for i in lst:
        count += i
        return count // len(lst)
    print(tomy_jery ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
    print(tomy_jery ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]))