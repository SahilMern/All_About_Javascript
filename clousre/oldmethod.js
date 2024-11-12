function createCounter() {
    var count = 0; // Private variable
  
  
    function increment() {
      count++; // Accessing the 'count' variable
      console.log('Count:', count);
    }
  
  
    function decrement() {
      count--; // Accessing the 'count' variable
      console.log('Count:', count);
    }
  
  
    return {
      increment: increment, // Exposing increment method
      decrement: decrement  // Exposing decrement method
    };
  }
  
  
  // Create an instance of the counter
  const counter = createCounter();
  console.log(counter, "counter");
  counter.increment(); // Output: Count: 1
  counter.increment(); // Output: Count: 2
  counter.decrement(); // Output: Count: 1
  