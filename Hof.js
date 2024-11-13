function applyOperation(a, b, operation) {
    return operation(a, b);
  }
  
  function add(x, y) {
    return x + y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  console.log(applyOperation(5, 3, add));      // 8
  console.log(applyOperation(5, 3, multiply)); // 15
  