names = ["Alex", "John", "Mary", "Steve", "John", "Steve"]

def remove_duplicates(list):
  filtered_list = []
  for name in list:
    if name not in filtered_list:
      filtered_list.append(name)
  return filtered_list

print(remove_duplicates(names))