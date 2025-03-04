def reverse_words(s):
    n = s.split(" ")
    r = n[::-1]
    return " ".join(r)