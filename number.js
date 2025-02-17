let num1 = 9876.44321;
console.log(num1.toPrecision(4)); // "9877"
console.log(num1.toPrecision(6)); // "9876.54"

// Example of parseFloat with a string number
const strNum = "4.544";
const parsedNum = parseFloat(strNum);
console.log(strNum, typeof strNum, parsedNum, typeof parsedNum);
//4.544 string 4.544 number

// parseFloat with extra spaces
const parsedNumWithSpaces = parseFloat("   3.14   ");
console.log(parsedNumWithSpaces); // 3.14

// parseFloat with numbers followed by letters
const parsedNumWithText = parseFloat("123.45abc");
console.log(parsedNumWithText); // 123.45

// parseFloat with non-numeric starting string
const parsedInvalid = parseFloat("abc123");
console.log(parsedInvalid); // NaN (Not a Number)
