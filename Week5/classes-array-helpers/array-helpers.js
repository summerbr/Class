// Array Helpers in ES6


let numbers = [4,5,6,7,8,1]

for(let index = 0; index < numbers.length; index++) {
  console.log(numbers[index])
}

// ES6 forEach
numbers.forEach(function(num) {
  console.log(num)
})

// ES6 Map
// Map is also known as transformation operator
let doubledArray = numbers.map(function(num) {
    return num * 2
})

console.log(doubledArray) //  [8, 10, 12, 14, 16, 2]

let evenNumbers = numbers.filter(function(num) {
  return num % 2 == 0
})

console.log(evenNumbers) // [4, 6, 8]

let users = [{name: "John",age: 23},{name:"Mary", age: 34 },{name: "Alex", age: 45},{name: "John",age: 99}]


let ageOfAllUsers = users.reduce((sum, user) => sum + user.age, 0)

let search = "John"
let foundUser = users.find(function(user) {

  /*
  if(user.name == search && user.age == 99) {
    return true
  } else {
    return false
  } */

  return user.name == search && user.age == 99
})

// using arrow syntax for find
/*

users.find((user) => user.name == search)

users.find((user) => {
  return user.name == search
})

users.find(function(user){
  return user.name == search
})

*/

const pi = 3.142
// pi = 4 // this will cause error because you cannot change constant

class Dog {
  constructor() {
    this.name = ""
  }
}

const dog = new Dog() // dog is assigned to a new Dog instance
dog.name = "Dog 1"
let anotherDog = new Dog()
//dog = anotherDog // dog is reassigned to anotherDog PROBLEM

const primeNumbers = [1,2,3,5,7]
primeNumbers.push(13) // NO ERROR in JavaScript


const names = ["Alex","Jimmy","Johnny"]
names.some(name => name.length > 4)
console.log(names)


const shoppingCartItems = [1,2,3,4,5]
let sum = 100
for(let i=0;i<shoppingCartItems.length;i++){
   sum += shoppingCartItems[i]
}
console.log(sum)

console.log("Reduce")
let sumOfShoppingCart =shoppingCartItems.reduce((sum, no) => sum + no, 0)
console.log(sumOfShoppingCart)



console.log(foundUser) // {name: "John", age: 23}
