var globalVar = 'Global';


function outerFunction() {
  var outerVar = 'Outer';


  function innerFunction() {
    var innerVar = 'Inner';
    console.log(innerVar);   // Inner
    console.log(outerVar);   // Outer
    console.log(globalVar);  // Global
  }


  innerFunction();
  console.log(innerVar);     // Error: innerVar is not defined
  console.log(outerVar);     // Outer
  console.log(globalVar);    // Global
}


outerFunction();
console.log(globalVar);      // Global
console.log(outerVar);       // Error: outerVar is not defined
console.log(innerVar);       // Error: innerVar is not defined