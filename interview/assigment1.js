// Reverse a string without using built-in functions.
// Find the factorial of a number using recursion.
// Check if a number is a palindrome.
// Find the largest and smallest number in an array.
// Implement a function to flatten an array.
// Implement a debounce function in JavaScript.
// Write a function to remove duplicates from an array.
// Implement a function to check if a string has balanced parentheses.

//? Reverse a string without using built-in functions.
const reverseString = "Reverse a string without using built-in functions";
let reversed = "";
for (let i = reverseString.length - 1; i >= 0; i--) {
  reversed += reverseString[i];
}
// console.log(reversed);

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// console.log(factorial(5));

//!Check if a number is a palindrome.
const isPalindrome = (number) => {
    const reversedNumber = Number(number.toString().split("").reverse().join(""));
    return reversedNumber === number;
  };

// console.log(isPalindrome(1441));

// Find the largest and smallest number in an array.

const arrayValue = [10, 5, 21,15]
const data = Math.min(...arrayValue)

let minvalue = arrayValue[0]; // Initialize minvalue as the first element
for (let i = 1; i < arrayValue.length; i++) {
    if (arrayValue[i] < minvalue) {
        minvalue = arrayValue[i]; // Update minvalue if a smaller element is found
    }
}

// console.log(minvalue, "minvalue");


const nestedArray = [1, [2, [3, [4]]], 5, [6]];
// console.log(nestedArray.flat(Infinity));


//? Write a function to remove duplicates from an array.
const removeDuplicates = [44, 22, 55, 66, 44, 22];
const result = removeDuplicates.reduce((acc, elem) => {
    // If the element is not already in the accumulator array, add it
    if (!acc.includes(elem)) {
        acc.push(elem);
    }
    return acc;
}, []);

console.log(result); // Output: [44, 22, 55, 66]


function removeDuplicates1(arr) {
    console.log(...arr);
    
    // return [...new Set(arr)];
}

const arr = [1, 2, 3, 4, 4, 5, 5];
console.log(removeDuplicates1(arr)); // Output: [1, 2, 3, 4, 5]
