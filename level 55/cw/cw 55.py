animals_name ={
    #key: value
    '1': "cat",
    '2': "dog",
    '3': "elephant",
    '4': "giraffe",
    '5': "hippo",
    '6': "lion",
    '7': "monkey",
    '8': "panda",
    '9': "koala"
}

print(animals_name.get('1'))
print(animals_name.get('2'))
print(animals_name.get('3'))
print(animals_name.get('4'))
print(animals_name.get('5'))
print(animals_name.get('6'))
print(animals_name.get('7'))
print(animals_name.get('8'))
print(animals_name.get('9'))

if "7" in animals_name:
    print(f"შენი ცხოველის სახელი არის {animals_name['7']}")
    
    if "4" in animals_name:
        print(f"შენი ცხოველის სახელი არის {animals_name['4']}")
        
        if "1" in animals_name:
            print(f"შენი ცხოველის სახელი არის {animals_name['1']}")
            
            if "9" in animals_name:
                print(f"შენი ცხოველის სახელი არის {animals_name['9']}")
                
                if "5" in animals_name:
                    print(f"შენი ცხოველის სახელი არის {animals_name['5']}")
                    
                    if "6" in animals_name:
                        print(f"შენი ცხოველის სახელი არის {animals_name['6']}")
                        
                        if "8" in animals_name:
                            print(f"შენი ცხოველის სახელი არის {animals_name['8']}")
                            
                            if "2" in animals_name:
                                print(f"შენი ცხოველის სახელი არის {animals_name['2']}")