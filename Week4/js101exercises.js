// Madlib
// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).
function madLib(name, subject) {
    return name + "'s favorite subject in school is " + subject + "."
}

// Tip Calculator
// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20%
// fair -> 15%
// bad -> 10%
// > tipAmount(100, 'good') 
// 20 
// > tipAmount(40, 'fair') 
// 6

function tipAmount(bill, service) {
    switch (service) {
        case service === fair:
        var goodTip = bill * 15%;
        break;
        case service === good:
        var greatTip = bill * 20%;
        break;
        case service === bad:
        var fairTip = bill * 10%;
        break;
    }
}
// Tip Calculator 2
// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.
// > totalAmount(100, 'good') 
// 120 
// > totalAmount(40, 'fair') 
// 46
// Print Numbers

// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:
// > printNumbers(1, 10) 
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7 
// 8 
// 9 
// 10
// Write two versions of the above function. One using a while loop and the other using a for loop.

// Print a Square
// Write a function printSquare which is given a size and prints a square of that size using asterisks.
// > printSquare(5) 
// ***** 
// ***** 
// ***** 
// ***** 
// *****
// Print a box

// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.
// > printBox(6, 4) 
// ****** 
// *    * 
// *    * 
// ******
// Print a Banner

// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.
// > printBanner('Welcome to DigitalCrafts') 
// **************************** 
// * Welcome to DigitalCrafts * 
// ****************************
// Leetspeak

// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
// > leetspeak('Leet') 
// l337
function leetSpeak(word) {
    var capitalize = word.toUpperCase();
    var splitWord = capitalize.split('');
    var convertedWord = [];
    splitWord.forEach(letter => {
        convertedWord.push(letterReplace(letter));
    })
    return convertedWord.join();
}
function letterReplace(letter) {
    switch (letter) {
        case 'A':
            return 4;
        case 'E':
            return 3;
        case 'G':
            return 6;
        case 'I':
            return 1;
        case 'O':
            return 0;
        case 'S':
            return 5;
        case 'T':
            return 7;
        default:
            return letter
    }
}

// Long-long Vowels
// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.
// > longLongVowels('Good') 
// 'Goooood' 
// > longLongVowels('Cheese') 
// 'Cheeeeese' 
// > longLongVowels('Man') 
// 'Man'
// Just the positives

// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.
// > positiveNumbers([1, -3, 5, -3, 0]) 
// [1, 5, 0] 
// > positiveNumbers([1, 2, 3]) 
// [1, 2, 3] 
// > positiveNumbers([-1, -2, -3]) []
// Bonus: Caesar Cipher

// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.
// > cipher('Genius without education is like silver in the mine') 
// 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'
// Bonus: Caesar Cipher 2

// Write a function decipher which is given a string, an offset, and returns the original message.
// > decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', offset)
// 'Genius without education is like silver in the mine'

// function printBox (width, height, marker = '*') {
//     var output;
//     var row = '';
//     for (var i = 0; i < width; i++) {
//         row += marker;
//     }
//     var gap = '';
//     for (var i = 0; i < width - 2; i++) {
//         gap += '';
//     }
//     var column = marker + gap + marker;
//     for (var i =0; i < height; i++) {
//         switch (i) {
//             case 0:
//                 case height - 1:
//                     console.log(row);
//                     break;
//                 default:
//                     console.log(column);
//                     break;
//         }
//     }   
// }



