tuple_list = ('John', 'guitar', 'piano', 'violin', 'trumpet', 'flute', 'drums', 'bass', 'saxophone', 'cello')
print(tuple_list.count(4))

name_1 , name_2 , name_3 ,*rest = tuple_list

print(name_1)
print(name_2)
print(name_3)
print(rest)

normal_list = ['John', 'guitar', 3,4,4,4,]
normal_list[0] = 'John'
normal_list.append('piano')
print(normal_list)