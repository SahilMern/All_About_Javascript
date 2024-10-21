//! Check if a Number is a Palindrome
// TODO: Check if a given number is a palindrome
const isPalindrome = (number) => {
  const reversedNumber = Number(number.toString().split("").reverse().join(""));
  return reversedNumber === number;
};
// console.log(isPalindrome(1441));

// Find the Largest Word in a String
// TODO: Find the largest word in a given string
const findLargestWord = (inputString) => {
  const words = inputString.split(" ");
  let largestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > largestWord.length) {
      console.log("Found a larger word:", words[i]);
      largestWord = words[i];
    }
  }
  console.log("The largest word is:", largestWord);
};
// findLargestWord("hello how are you everyone I am Sahil Yadav");

// Find the Largest Word Using Reduce
// TODO: Find the largest word in a string using reduce method
const findLargestWordUsingReduce = (inputString) => {
  const words = inputString.split(" ");

  const largestWord = words.reduce((accumulator, currentWord) => {
    return accumulator.length >= currentWord.length ? accumulator : currentWord;
  });

  console.log("The largest word using reduce is:", largestWord);
};
// findLargestWordUsingReduce("hello how are you everyone I am Sahil Yadav");

// Transform Text to Uppercase
// TODO: Transform the first letter of each word to uppercase
const transformTextToUppercase = (inputString) => {
  if (!inputString || inputString.length === 0) {
    return false;
  }

  const words = inputString.split(" ");
  const transformedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  const transformedString = transformedWords.join(" ");
  console.log("Transformed text:", transformedString);
};
// transformTextToUppercase("sab ke first letter capital kar do");

// Count occurrences of a character in a string
// TODO: Count occurrences of a specified character in a string
const findCountWordInString = (inputString, findValue) => {
  console.log("Input String:", inputString);
  console.log("Character to Find:", findValue);

  // Convert the string to uppercase for case-insensitive comparison
  const upperCaseString = inputString.toUpperCase();
  const upperCaseValue = findValue.toUpperCase();

  // Count occurrences of the findValue in the string
  const occurrences = upperCaseString.split("").filter((char) => {
    return char === upperCaseValue;
  });

  console.log("Count of occurrences:", occurrences.length);
};
// Example usage
// findCountWordInString("jaijAiJAIjaiJai", "I");

// Count occurrences using reduce
// TODO: Count occurrences of a character using reduce method
const findCountWordInStringReduce = (word, search) => {
  const lowerCaseWord = word.toLowerCase();
  const lowerCaseSearch = search.toLowerCase();

  const count = lowerCaseWord.split("").reduce((acc, char) => {
    return char === lowerCaseSearch ? acc + 1 : acc; // Increment if a match is found
  }, 0);

  console.log("Count of occurrences using reduce:", count);
};
// findCountWordInStringReduce("jaijAiJAIjaiJai", "I");

// Sort an array in ascending order
// TODO: Sort an array of numbers in ascending order
const sortArrayAscending = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  console.log("Sorted Array in Ascending Order:", sortedArray);
};
// sortArrayAscending([1, 5, 8, 9, 10]);

// Find the Maximum Number in an Array
// TODO: Find the maximum number in a given array
const findMaxNumberInArray = (arrays) => {
  console.log(...arrays, arrays);
  console.log("Maximum number:", Math.max(...arrays));
};
// Example usage
// findMaxNumberInArray([5]);

// TODO: Calculate the factorial of a given number
const factorial = (num) => {
  let fact = 1; // Initialize factorial result
  for (let i = 1; i <= num; i++) {
    // Loop through numbers from 1 to num (inclusive)
    fact = fact * i; // Multiply each number to the result
  }
  return fact; // Return the computed factorial
};

// console.log(factorial(10));

// TODO: Calculate the factorial of a given number using recursion
const factorialRecursive = (num) => {
  debugger;
  if (num === 0 || num === 1) {
    return 1; // Base case: 0! and 1! both equal 1
  }
  console.log(num * factorialRecursive(num - 1));

  return num * factorialRecursive(num - 1); // Recursive call
};

// console.log(factorialRecursive(4)); // Example usage

// TODO: Calculate the average of an array of numbers
const CalculateAverage = (array) => {
  const total = array.reduce((acc, elem) => {
    return acc + elem; // Sum all elements
  }, 0);

  const average = total / array.length;
  console.log("Average:", average);
};

// CalculateAverage([5, 6, 7, 8, 9]);

// TODO: Check if two arrays are equal (same values and order)

const sameArrayValue = (array1, array2) => {
  if (array1.length !== array2.length) return false; // Check length first

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false; // Check each value
  }

  return true; // Arrays are equal
};

// Example usage
// console.log(sameArrayValue([4, 5, 6, 8], [4, 5, 6, 8]));
// console.log(sameArrayValue([4, 5, 6, 8], [4, 5, 6, 7]));

// TODO: Check if two arrays have the same values in the same order using the every method
const sameArrayValueEvery = (array1, array2) => {
  // First, check if they have the same length
  if (array1.length !== array2.length) {
    console.log("Arrays have different lengths:", array1.length, array2.length);
    return false; // If lengths are different, return false
  }

  // Use every to compare each corresponding element
  const areEqual = array1.every((value, index) => {
    const isEqual = value === array2[index];
    console.log(
      `Comparing index ${index}: ${value} === ${array2[index]} -> ${isEqual}`
    );
    return isEqual; // Return true or false based on comparison
  });

  console.log("Are both arrays equal?", areEqual);
  return areEqual; // Return the result
};

// Example usage
// sameArrayValueEvery([4, 5, 6, 8], [4, 5, 6, 8]); // Should return true
// sameArrayValueEvery([4, 5, 6, 8], [4, 5, 6, 7]); // Should return false
// sameArrayValueEvery([4, 5, 6, 8], [4, 5, 6, 8, 9]); // Should return false due to different lengths

// TODO: Calculate the sum of digits of a given number
const sumOfDigit = (number) => {
  const digitsArray = Array.from(String(number)); // Convert number to array of digits
  console.log("Digits Array:", digitsArray); // Log the array of digits
  const sum = digitsArray.reduce((accumulator, digit) => {
    return accumulator + Number(digit); // Sum the digits
  }, 0);
  console.log("Sum of Digits:", sum); // Log the sum of the digits
};

// Example usage
// sumOfDigit(1234100); // Should output the sum of the digits

// TODO: Remove duplicates using filter and indexOf
const removeDuplicates = (array) => {
  return array.filter((value, index) => {
    // console.log(array.indexOf(value), index, array.indexOf(value)=== index);
    array.indexOf(value) === index;
  });
};

// Example usage
const result1 = removeDuplicates([1, 2, 3, 2, 4, 3, 5, 1]);
// console.log(result1); // Output: [1, 2, 3, 4, 5]

// TODO: Remove duplicates using reduce
const removeDuplicatesUsingReduce = (array) => {
  return array.reduce((acc, value) => {
    if (!acc.includes(value)) {
      acc.push(value);
    }
    return acc;
  }, []);
};

// Example usage
const result = removeDuplicatesUsingReduce([1, 2, 3, 2, 4, 3, 5, 1]);
// console.log(result); // Output: [1, 2, 3, 4, 5]

const vowelsWord = ["a", "e", "i", "o", "u"];

// TODO: Find Vowels in a String
// Function to find all vowels in a given string. It removes spaces and converts the string to lowercase to handle case sensitivity.
const findVowels = (words) => {
  let modifiedWords = words.replace(" ", "").toLowerCase();
  const data = modifiedWords.split("");
  let totalVowel = [];

  for (i = 0; i < data.length; i++) {
    if (vowelsWord.includes(data[i])) {
      totalVowel.push(data[i]);
    }
  }
  return totalVowel;
};
// console.log(findVowels("Hello Ei"));

// TODO: Check if a Number is a Power of Two
// Function to check if a given number is a power of two by iterating and raising 2 to consecutive powers until it matches the number.
const isPowerOfTwo = (number) => {
  let op = false;
  for (i = 1; i <= number; i++) {
    if (2 ** i === number) {
      op = true;
    }
  }
  return op;
};

// console.log(isPowerOfTwo(8)); // true
// console.log(isPowerOfTwo(7)); // false

// TODO: Calculate the sum of the squares of all elements in an array
const sumOfSquare = (array) => {
  const data = array.reduce((acc, elem) => {
    return elem * elem + acc;
  }, 0);

  return data;
};

// sumOfSquare([1, 2, 3, 4]); // Example usage

// TODO: Find the minimum value in an array
const minValueInArray = (arrays) => {
  const data = Math.min(...arrays); // Use Math.min with spread syntax to find the minimum value
  console.log(data); // Log the minimum value
};

// minValueInArray([4, -5, -1, 0, 7]); // Example usage

// TODO: Convert a string into camel case
const covertIntoCamelCase = (string1) => {
  const words = string1.split(" "); // Split the string into words
  const camelCaseString = words
    .map((word, index) => {
      // Capitalize the first letter of each word except the first one
      if (index === 0) {
        return word.toLowerCase(); // Lowercase the first word
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize the rest
    })
    .join(""); // Join the words back together without spaces

  console.log(camelCaseString); // Log the camel case string
};

// covertIntoCamelCase("sahil yadav"); // Example usage

// ----------------------------

const cehckCharisUpperCase = (char) => {
  return char === char.toUpperCase();
  return char === char.toLowerCase();
};
// console.log(cehckCharisUpperCase("S"));

const checkSubstringStart = (str, subStr) => {
  //Build In method
  const trick1 = str.toLowerCase().startsWith(subStr.toLowerCase());
  // console.log(trick1);

  const trick2 =
    str.slice(0, subStr.length).toLowerCase() === subStr.toLowerCase();
  console.log(trick2);
  //Sub str
  // const data = string.split(" ");
  // console.log(data, "data");
  // if (data[0] === startedString) {
  //   console.log(true);
  // }
};
// checkSubstringStart("Hello Word", "hello");
// checkSubstringStart("Hello Word", "Eello");


const reverseTheStringWithourtBuild = (string) => {
  const trick1 = string.split("").reverse().join("")
  // console.log(trick1);
  // console.log(string.length -1);
  

  let r_string =""
 for(i=string.length-1; i>=0;i--){
  console.log(i, string[i]);
  string[i];
  r_string = r_string + string[i]
 }
  return r_string;
}
// console.log(reverseTheStringWithourtBuild("Sahil"));


const findMean = (numbers) => {
  const data = numbers.reduce((accumulator, number) => {
    return accumulator+number
  },0)
  console.log(data);
  const avg = data/numbers.length;
  console.log(avg);
  
}
// findMean([4,8,4,5,8,])

  const median = (array) => {
    const data = array.sort((a,b) => {
      // console.log(a-b);
      return a-b
      
    })
    console.log(data);
    
  }
// median([4,8,4,5,8,])


let obj = {};
obj["name"] = "value"
// console.log(obj);s
