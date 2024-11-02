//? pahle Do Common honge, next 2 jo hai vo apne previous ke sum honge

function fibonacci(n) {
  let fib = [0, 1];
  debugger;
  for (let i = 2; i < n; i++) {
    console.log("hiiii", i);

    console.log(fib[i]);
    console.log(fib[i - 1]);
    console.log(fib[i - 2]);
    console.log((fib[i] = fib[i - 1] + fib[i - 2]));
  }
  return fib;
}

console.log(fibonacci(4)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
