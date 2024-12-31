//! Convert Number to String
const numberValue = 44; // Define a number variable with value 44
const numToString = String(numberValue); // Convert number to string
console.log(numToString, typeof numToString); // Output: "44" "string"

//! Convert String to Number
const nonNumericString = "sahil"; // Define a non-numeric string
const strToNumber = Number(nonNumericString); // Convert string to number
console.log(strToNumber, typeof strToNumber); // Output: NaN "number"

//! Convert String to Array
const stringValue = "stringValue"; // Define a string
const stringToArr = stringValue.split(""); // Convert string to array using split()
console.log(stringToArr); // Output: ['s', 't', 'r', 'i', 'n', 'g', 'V', 'a', 'l', 'u', 'e']

//! Convert Array to String
const charArray = ["s", "t", "r", "i", "n", "g", "V", "a", "l", "u", "e"]; // Define an array of characters
const arrToStr = charArray.join(""); // Convert array to string using join()
console.log(arrToStr); // Output: "stringValue"

//! Array to Object
const fruitArray = ['apple', 'banana', 'cherry']; // Define an array
const arrayToObj = fruitArray.reduce((acc, curr, index) => {
    acc[index] = curr; // Assign array elements to object keys
    return acc;
}, {}); // Convert array to object using reduce()
console.log(arrayToObj); // Output: {0: "apple", 1: "banana", 2: "cherry"}

//! Convert Object to Array
const objectWithKeys = { '0': 'apple', '1': 'banana', '2': 'cherry' }; // Define an object with numeric keys
const objKeys = Object.keys(objectWithKeys); // Get object keys as array
const objValues = Object.values(objectWithKeys); // Get object values as array
const objEntries = Object.entries(objectWithKeys); // Get object entries (key-value pairs) as array
console.log(objKeys, objValues); // Output: ['0', '1', '2'], ['apple', 'banana', 'cherry']
console.log(objEntries); // Output: [['0', 'apple'], ['1', 'banana'], ['2', 'cherry']]

//! Convert Object to String
const personObject = { name: "John", age: 30 }; // Define an object
const objToStr = JSON.stringify(personObject); // Convert object to string using JSON.stringify()
console.log(objToStr); // Output: '{"name":"John","age":30}'

//! Convert String to Object
const jsonString = '{"name":"John","age":30}'; // Define a JSON string
const strToObj = JSON.parse(jsonString); // Convert string to object using JSON.parse()
console.log(strToObj); // Output: {name: "John", age: 30}

//! Convert Number to Boolean
const nonZeroNumber = 1; // Define a non-zero number
const zeroNumber = 0; // Define a zero number
console.log(Boolean(nonZeroNumber)); // Convert number to boolean, Output: true
console.log(Boolean(zeroNumber)); // Convert number to boolean, Output: false

//! Convert Boolean to Number
const boolTrue = true; // Define a boolean value true
const boolFalse = false; // Define a boolean value false
console.log(Number(boolTrue)); // Convert boolean to number, Output: 1
console.log(Number(boolFalse)); // Convert boolean to number, Output: 0


//! Plain String to object
const str = "sahil";
const obj = {};
for (let i = 0; i < str.length; i++) {
    obj[i] = str[i]; // Use index as the key and character as the value
}
console.log(obj); 
// Output: {0: "s", 1: "a", 2: "h", 3: "i", 4: "l"}


