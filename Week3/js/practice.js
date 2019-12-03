// - Create a Palindrome app in Javascript which will print whether a string is a palindrome or not
  function palindrome (word){
    let letters = word.split('');
    letters.reverse();
    let reversedLetters = letters.join('');
    if (word == reversedLetters) {
      console.log(true)
    } else {
      console.log(false)
    }
  }


// - Create an app which removes duplicates from an array 
  let arr = ["John", "Mary", "Alex", "Steve", "Mary", "John"] 
  function noDuplicates(arr) {
    let noDupes = []
    let duplicates = arr.split('');
    duplicates.forEach(name => {
      if (name !=  names) {
        noDupes.push(name)
      }
    })
  }  //filter or set?  unique = [...new Set(arr)]

// - Create an app which returns true/false depending on if the item is in the array 
  function arrayCheck(arr){
    for (let a of arr) {
      if (a == arr) {
        console.log(true)
      } else {
        console.log(false)
      }
    }
  }  //return a === arr;

// - Create an app which finds the largest number in an array 
  function biggestNum(num) {
    let arr = []
    for (let num in arr) {
      if (num > arr) {
        return num
      } 
    }
  }

// - Create an app which finds the smallest number in an array 
  Math.min(9, 4, 38);

// - Create FizzBuzz app 
for (let num = 1; num <= num.length; num++) {
  switch (num) {
      case num % 15 == 0:
        console.log('FizzBuzz');
        break;
      case num % 3 == 0:
        console.log('Fizz');
        break;
      case num % 5 == 0:
        console.log('Buzz');
        break;
      default:
        console.log(num);
        break;
    }
  }
// - Write an algorithm to sort an array in descending order 
  let arr = [4, 5, 56, 1, 2, 99, 34, 2, 1] 
  arr.sort(function(a, b) {
      return b - a;
    })

// - In a given sentence find the number of words
  function wordCount(sentence){
    return sentence.split(' ').length;
  }
// - In a given word find number of vowels
  let vowel = 0;
  for (let i=0; i < i.length; i++ )
    switch(word[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
          vowel++; 
          break;
    }
  console.log(vowel)

// - Given start time and end time find the different between two times 
  let start = 12;
  let end = 10;
  function timeDiff(start,end) {
    return start - end
  }

