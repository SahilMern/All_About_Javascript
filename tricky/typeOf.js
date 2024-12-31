console.log(typeof(44));               // "number"
console.log(typeof 'hello');           // "string"
console.log(typeof true);              // "boolean"
console.log(typeof undefined);         // "undefined"
console.log(typeof null);              // "object"  (This is a known JavaScript quirk)
console.log(typeof NaN);               // "number"  (NaN is considered a number in JS)
console.log(typeof Infinity);          // "number"  (Infinity is also treated as a number)

let arr = [1, 2, 3];
let obj = { a: 1, b: 2 };

console.log(typeof arr);               // "object"  (Arrays are technically objects)
console.log(typeof obj);               // "object"
console.log(Array.isArray(arr));       // true      (Array.isArray checks if it's an array)
console.log(Array.isArray(obj));       // false     (obj is not an array)


