def min_max(lst):
    m1 = lst[0]
    m2 = lst[0]
    for i in lst:
        if i < m1:
            m1 = i
        if i > m2:
            m2 = i
    return [m1,m2]