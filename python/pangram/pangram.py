import string

def is_pangram(sentence):
    check = []
    flag = 0

    for letter in sentence:
        letter = letter.lower()

        if letter not in check:
            check.append(letter)

    for letter in string.ascii_lowercase:
        if letter not in check:
            flag = 1

    return True if flag == 0 else False