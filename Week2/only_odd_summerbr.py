import is_odd_summerbr

def only_odd(num_list):
    odd_list = []
    for num in num_list:
        if is_odd_summerbr.is_odd(num) == True:
            odd_list.append(num)
    return odd_list

print(only_odd([7, 9, 11, 14, 20]))

