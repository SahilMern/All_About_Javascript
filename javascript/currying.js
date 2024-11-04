//? Currying in JavaScript is a technique of breaking down a function that takes multiple arguments into a series of functions that each take a single argument. This allows you to call a function with one argument at a time, returning a new function each time until all arguments are provided. Simple Definition: Currying transforms a function with multiple parameters into a sequence of functions that each take one parameter.


function add(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = add(5); // Returns a function that adds 5
console.log(add5(3)); // Outputs: 8
console.log(add(10)(2)); // Outputs: 12
