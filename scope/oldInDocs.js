// Scope :- Scope in JavaScript determines where variables and functions are accessible within your code.

// JavaScript variables have 3 types of scope: 
// Block scope 
// Function scope
//  Global scope

// Global Scope: Variables declared outside any function are in the global scope and can be accessed anywhere in your code. 
// Local Scope: Variables declared inside a function are in the local scope and can only be accessed within that function.
//  Block Scope: Variables declared with let or const inside a block (e.g., inside {}) are in block scope and can only be accessed within that block.

// Global scope
let globalVar = "I am a global variable";
function exampleFunction() {
  // Local scope
  let localVar = "I am a local variable";
  console.log(globalVar); // Accessible
  console.log(localVar);  // Accessible
}

exampleFunction();
console.log(globalVar); // Accessible
console.log(localVar);  // Error: localVar is not defined

if (true) {
  // Block scope
  let blockVar = "I am a block-scoped variable";
  console.log(blockVar); // Accessible
}
console.log(blockVar); // Error: blockVar is not defined



