# def counter(arr):
#     counter = 0
#     for i in arr:
#         print("ხაზის დასაწყისი")
#         print(i, "+", counter, "=", i + counter, "counter:", i + counter,"-------", "i:", i)
#         counter =  i + counter
#         print("ხაზის დასასრული")
        
#     return counter
# print(counter([1, 2, 3, 4]))

# ამ დავალების მიხედვით მასივის ნაცვლად გადაეცით , range() და range შეკრივეთ

def counter(arr):
    counter = 0
    for i in arr:
        print("ხაზის დასაწყისი")
        print(i, "+", counter, "=", i + counter, "counter:", i + counter, "-------", "i:", i)
        counter = i + counter
        print("ხაზის დასასრული")
        
    return counter

print(counter((1, 5)))