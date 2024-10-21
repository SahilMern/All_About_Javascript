// 1)Reverser the each string
// 2) check params is array or not
// 3) Empty Array
// 4) Number is integer or not
// 5) add same array value or dublicate array
// 6) reverse a number

//! Reverse Each Word in a String
const reverseString = "Hello Bro How are you";

// Split the string into an array of words
const reverseString1 = reverseString.split(" ");

// Reverse each word, join the characters back into a word, and finally join the array into a string
const data = reverseString1.map((element) => {
  return element.split("").reverse().join(""); // Reverse each word
});

console.log(data.join(" "), "Reversed String"); // Output: "olleH orB woH era uoy"

//? -------------------------------------------------------------------

//! Check if the Given Parameter is an Array
function checkArray(params) {
  return Array.isArray(params); // Best method to check if a value is an array
}

console.log(checkArray([])); // true
console.log(checkArray({})); // false

//? -------------------------------------------------------------------

//! How to Empty an Array in JavaScript
const emptyArray = [4, 8, 9, 2];

// Setting the length property to 0 is the fastest and simplest way to empty an array
emptyArray.length = 0;

console.log(emptyArray); // Output: []
console.log(emptyArray.length); // Output: 0

//? -------------------------------------------------------------------

//! Check if a Number is an Integer

const checkInteger = 4.5;

// Using `Number.isInteger()` to check if a number is an integer
console.log(Number.isInteger(checkInteger)); // false

// Alternate method using modulus to check if the number has a fractional part
if (checkInteger % 1 === 0) {
  console.log("Is integer!");
} else {
  console.log("Not an integer");
}

// Output: Not an integer

//! Dublicate array
const dublicateArray = (array) => {
  return array.concat(array);
};
console.log(dublicateArray([1, 2, 3, 4, 5]));

//! reverse a number

const reverseNumber = (number) => {
  return Number(number.toString().split("").reverse().join(""));
};
console.log(reverseNumber("12"));

//! Return string in alphabate order
const alphabateOrder = (string) => {
    return string.split("").sort().join("");
}
// console.log(alphabateOrder("sahil"));

//! return Accept string and convert first letter to UpperCase
const convertFirstUppercase = (string) => {
    return string
        .split(" ")
        .map((element) => {
            return element.charAt(0).toUpperCase() + element.substring(1);
        })
        .join(" "); // Join back the words with a space
}

console.log(convertFirstUppercase("sahil yadav")); // Outputs: "Sahil Yadav"


const occ = (string) => {
    let occurance = {}
    string.split("").forEach((element) => {
        // Check if the element exists in the occurance object
        if (occurance.hasOwnProperty(element) === false) {
            occurance[element] = 1; // Initialize with 1 if not present
            console.log(occurance); // Output the result
        } else {
            occurance[element]++; // Increment count if already present
        }
    });
}


occ("apple")