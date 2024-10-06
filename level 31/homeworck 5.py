movies = ["Interstellar", "Inception", "Avatar", "Titanic", "The Matrix"]
while True:
    action = input("რა უნდა გააკეთოთ? (დაამატეთ/წაშალეთ/quit): ").strip().lower()
    if action == "quit":
        break
    elif action == "წაშალეთ":
        movie_to_remove = input("რომელი ფილმი უნდა წაიშალოს? ")
        if movie_to_remove in movies:
            movies.remove(movie_to_remove)
            print(f"{movie_to_remove} წარმატებით წაიშალა.")
        else:
            print("ფილმი არ მოიძებნება.")
    elif action == "დაამატეთ":
        new_movie = input("რომელი ფილმი უნდა დაამატოთ? ")
        position = input("სად უნდა დაამატოთ? (ბოლოში/ინდექსზე): ").strip().lower()
        if position == "ბოლოში":
            movies.append(new_movie)  # ფილმის დამატება ბოლოში
        else:
            index = int(input("რომელი ინდექსი გსურთ? "))  # კონკრეტული ინდექსი
            movies.insert(index, new_movie)
    # ნუსხა
    print("ამჟამინდელი ფილმების სია:", movies)

# საბოლოო სია
print("თქვენი ფილმების საბოლოო სია:", movies)
