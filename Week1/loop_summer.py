#1 to 10
for num in range(1, 11):
    print(num)


#n to m
user_input1 = int(input('Enter start: '))
user_input2 = int(input('Enter stop: '))
user_input2 = user_input2 + 1
for num in range(user_input1, user_input2):
    print(num)


#Odd numbers
for num in range(1, 11):
  if num % 2 != 0:
    print(num)


#print a square
square = 5
for row in range(square):
  print('*' * square)

#print a square II
user_square = int(input('How big is the square? '))
for row in range(user_square):
    print('*' * user_square)


#print a box
height = int(input('Enter height of box: '))
width = int(input('Enter width of box: '))

for x in range(height):
  if x == 0 or x == height - 1:
    print(width * '*')
  else:
    print ('*' + ' ' * (width - 2) + '*')


#print a triangle
n = int(input('Enter the number of rows: '))
for i in range(n): 
  print(' ' * (n - 1 - i) + '*' * (i + 1))

#....*
#...***
#..*****
#.*******

#stack = [1,3,5,7] or

#num = 1
#while num < 8:
  #pyramid_line = ' '
  #if num % 2 == 1:        prints odd numbers
    #print('*')
  #num += 1

#x = 10
#space = ' '

#for item in range(1,8,2):
#  print((space * x) + (item * '*')
#  x = x - 1



#print a triangle II




#multiplication table
for x in range(1,11):
  for y in range(1,11):
    print(x, 'x', y, '=', x * y)



#banner --need to redo problem using a loop :(
text = input('Enter text: ')
banner = len(text) + 2
banner_top_bottom = banner * '*'

print(banner_top_bottom)
print('* ' + text + ' *')
print(banner_top_bottom)

#text = input('Text? ')
#text_length = len(text)
#print('*' * (text_length + 4))    addtl parantheses needed to break string
#print('* ' + text + ' *')
#print('*' * (text_length + 4))