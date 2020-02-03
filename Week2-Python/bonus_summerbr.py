#print top 3 letters/words from previous exercises
text = 'awareness'
dict = {}

for letter in text:
  if letter not in dict:
    dict[letter] = 1 
  elif letter in dict:     
    dict[letter] += 1
print(dict)

dict_sort = sorted((value, key)) for (key, value) in dict.items()
print(dict_sort)

#convert to a list to sort by value??