# 1. Find the smallest number
def smallest(num_list):
  return min(num_list)
    
print(smallest([9, 2, 19]))


# 2. Find the largest number
def largest(num_list):
    return max(num_list)

print(largest([456, 89, 501, 23]))


# 3. Find the shortest String
#start at zero index of list and loop
def shortest(thing_list):
    shortest_word = thing_list[0]
    for word in thing_list:
      if len(word) < len(shortest_word):
        shortest_word = word
    return shortest_word

print(shortest(['giraffe', 'rhino', 'hippopotamus', 'cat']))


# 4. Find the longest String
def longest(list_of_things):
  longest_word = list_of_things[0]
  for word in list_of_things:
    if len(word) > len(longest_word):
      longest_word = word
  return longest_word

print(longest(['popularity', 'name', 'origin']))
