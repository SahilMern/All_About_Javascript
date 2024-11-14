// cd methods/number

// toPrecision
let num = 9876.54321
// console.log(num.toPrecision(4));

let num1 = 9876.54321;
// console.log(num1.toPrecision(6))
// output 9877
// 9876.54 

// -------------------------------------------------------------------------------


// isInteger():-
const num2 = "is";
// console.log(Number.isInteger(num2));
// -------------------------------------------------------------------

// isFinite()
const number = 44;
const result = isFinite(44)
// console.log(result); // true
// ------------------------
// parseFloat
const number4 = "4.544";
const result4 = parseFloat(number4);
console.log(number4, typeof number4, result, typeof result4);
const result5 = parseFloat("   3.14   ");
console.log(result5); // 3.14