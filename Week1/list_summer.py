#sum the numbers
number_list = [2, 17, 76, 99, 200, 501]
print(sum(number_list))
##try as function


#largest number
print(max(number_list))


#smallest number
print(min(number_list))


#even numbers
for even in number_list:
    if even % 2 == 0:
        print(even)


#positive numbers
for num in [-20, -9, 0, 18, 35]:
    if num > 0:
        print(num)


#positive numbers II 
num_list = [-200, -85, 7, 26, 55]
new_list = []
for num in num_list:
    if num > 0:
        new_list.append(num)
print(new_list)


#multiply list
multiplied = []
list = [3, 6, 8, 11]
factors = 10
for number in list:
    multiplied.append(number * factor)
print(multiplied)


#multiply vectors;  can a loop be used???
x = [3, 8, 17]
y = [2, 4, 29]
z = []
z.append(x[0] * y[0])
z.append(x[1] * y[1])
z.append(x[2] * y[2])
print(z)


#matrix addition add matrix 1 to matrix 2
first_list = [
    [1, 3], 
    [2, 4]
    ]
second_list = [
    [5, 2], 
    [1, 0]
    ]
result = [[], []]
result[0] = first_list[0][0] + second_list[0][0]
result[0].append(first_list[0][1] + second_list[0][1])


#expect[[6, 5], [3, 4]]

#matrix addition II 
first_list = [
    [1, 3, 9, 10], 
    [2, 4, 8, 10]
    ]
second_list = [
    [1, 3, 9, 10], 
    [2, 4, 8, 10]
    ]
result = [[0, 0, 0, 0], [0, 0, 0, 0]]
for item in range(len(first_list)):
    for nested_item in range(len(first)):
        result[item][nested_item] = first_list[item][nested_item] + second_list[item][nested_item]
print(result)

#de-dup
list_one = ['Nancy', 'Paul', 'Tom']
list_two = ['Max', 'John', 'Paul']
combined_list = list_one + list_two
no_duplicate = []
for name in combined_list:
  if name not in no_duplicate:   #no duplicate to be used as a way to output value?? why new variable?
    no_duplicate.append(name)
print(no_duplicate)

 