# A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
# a2 + b2 = c2   For example, 32 + 42 = 9 + 16 = 25 = 52.
# There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# Find the product abc.

# Find the single different character between two strings
# Assume two strings str1, str2, where str2 contains the same set of characters in 
# str1 with one additional character. 
# Find the single different character between the two strings.
def unique(text1, text2):
    text1 = text1.split()
    text2 = text2.split()
    for letter in text1:
        for letter in text2:
            if letter not in text1: 
    return letter

print(unique('mope', 'mopey'))