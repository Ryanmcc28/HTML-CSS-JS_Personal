import string
import random as r

character_string = f"{string.ascii_letters}{string.digits}{string.punctuation}"
input_string = str(input("Enter text to be encrypted here: "))
output_string = ''


for char in input_string:
    rn = r.randint(1, len(character_string))
