number_list = range(1, 20)
for number in number_list:
    if number % 3 == 0 and number % 5 == 0: #most complicated condition first; otherwise it may be ignored
        print("FizzBuzz")
    elif number % 3 == 0:
        print("Fizz")
    elif number % 5 == 0:
        print("Buzz")
    else:
        print(number)        