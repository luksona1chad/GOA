name = input("შეიყვანეთ თქვენი საყვარელი ანდაზა: ")
words = name.split()
longest_word = max(words)
shortest_word = min(words)
print(f"ყველაზე დიდი სიტყვა: {longest_word}")
print(f"ყველაზე პატარა სიტყვა: {shortest_word}")
