const regex = /hello/;
const str = "hello world";
const result = regex.exec(str);
console.log(result); // Output: ["hello", index: 0, input: "hello world", groups: undefined]

// TODOD:- Second
const regex = /hello/;
const str = "hello world";
const isMatch = regex.test(str);
console.log(isMatch); // Output: true
