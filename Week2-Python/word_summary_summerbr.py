text = 'Cat food cat meow'
words = text.split()
dict = {}

for word in words:
  if word not in dict:
    dict[word] = 0
  if word in dict:
    dict[word] += 1
print(dict)