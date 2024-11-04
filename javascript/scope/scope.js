function myFunction() {
    var a = 10;        // Function-scoped variable
    let b = 20;       // Block-scoped variable
    const c = 30;     // Block-scoped constant
    console.log(a);   // Output: 10
    console.log(b);   // Output: 20
    console.log(c);   // Output: 30
}
myFunction();
console.log(a); // ReferenceError: a is not defined
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined
