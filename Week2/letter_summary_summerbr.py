text = input('Text? ')
dict = {}


for letter in text:
  if letter not in dict:
    dict[letter] = 1 #value assigned; value = 1 at first instance
  elif letter in dict:     
    dict[letter] += 1
print(dict)
