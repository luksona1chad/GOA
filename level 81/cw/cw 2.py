# 2) შექმენით შეკრების ფუქნცია რომელიც გადაეცემა მასივი (list) და ამ მასში არსებულ ელემენტებს შეკრებს 

# [1,2,3] ===> 6
# [1,2,3,4] ===> 10
# 1)
def sum_list(l):
    total = 0
    for i in l:
        total += i
    return total
print(sum_list([1, 2, 3]))
# 2)
def sum_list(l):
    total = 0
    for i in l:
        total += i
    return total
print(sum_list([1, 2, 3, 4]))
