#How many coins?
coin = 0
print('You have 0 coins.')
user_input = input('Do you want a coin? ')
while user_input == 'yes':
    input('Do you want another? ')
    coin = coin + 1
    print(f' You have {coin} coins')
else:
    print('End')