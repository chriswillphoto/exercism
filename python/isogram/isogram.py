def is_isogram(string):
    check = {}
    state = 0
    string = string.lower()

    for letter in string:
        if letter not in check:
            check[letter] = 1
        else:
            check[letter] += 1
    

    for key, value in check.items():
        if key.isalpha() == True and value > 1:
            state = 1

    return True if state == 0 else False