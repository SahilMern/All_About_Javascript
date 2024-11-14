// cd javascript/Array CreateArray.js
//Todo:- Using Array Literal 
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits);  // Output: ['Apple', 'Banana', 'Cherry']

//TODO:-  Using the Array Constructor
let numbers = new Array(5);  // Creates an array with 5 empty slots
console.log(numbers);  // Output: [ <5 empty slots> ]

let colors = new Array('Red', 'Green', 'Blue');
console.log(colors);  // Output: ['Red', 'Green', 'Blue']


//TODO:- Array Of 
let numbers1 = Array.of(1, 2, 3, 4, 5);
console.log(numbers1);  // Output: [1, 2, 3, 4, 5]

//IYTRATING ARRAY
let str = 'hello';
let strArray = Array.from(str);
console.log(strArray);  // Output: ['h', 'e', 'l', 'l', 'o']
