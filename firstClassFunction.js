// function sayHello(name) {
//     return "Hello, " + name + "!";
//   }
//   var greetFunction = sayHello;
//   console.log(greetFunction);
  
//   console.log(greetFunction("Thapa"));

  // Function that takes another function as an argument
function executeFunction(fn, value) {
    console.log(value, "value v");
    
    return fn(value);
  }
  
  // Passing a function as an argument
  const result = executeFunction(function(name) {
    return `Hello, ${name}!`;
  }, 'Bob');
  
  console.log(result);  // Output: Hello, Bob!
  