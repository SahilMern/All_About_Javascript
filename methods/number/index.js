// cd methods/number

// TODO: toPrecision Example
let preciseNumber = 9876.54321;
// console.log(preciseNumber.toPrecision(4)); // "9877" - rounded to 4 significant digits

let preciseNumber1 = 9876.54321;
// console.log(preciseNumber1.toPrecision(6)); // "9876.54" - rounded to 6 significant digits

// -------------------------------------------------------------------------------

// TODO: isInteger Example
const checkValue = "is";
// console.log(Number.isInteger(checkValue)); // false - "is" is not an integer

const integerCheckValue = 42;
// console.log(Number.isInteger(integerCheckValue)); // true - 42 is an integer

// -------------------------------------------------------------------------------

// TODO: isFinite Example
const finiteNumber = 44;
const isFiniteResult = isFinite(finiteNumber);
// console.log(isFiniteResult); // true - 44 is a finite number

const infiniteNumber = Infinity;
// console.log(isFinite(infiniteNumber)); // false - Infinity is not finite

// -------------------------------------------------------------------------------

// TODO: parseFloat Example
const stringFloat = "4.544";
const parsedFloat = parseFloat(stringFloat);
// console.log(parsedFloat, typeof parsedFloat); // 4.544 "number"

const whitespaceFloat = "   3.14   ";
const parsedFloatWithWhitespace = parseFloat(whitespaceFloat);
// console.log(parsedFloatWithWhitespace); // 3.14 - parseFloat trims spaces before parsing
