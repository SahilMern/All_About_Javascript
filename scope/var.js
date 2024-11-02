console.log(a); // Output: undefined (due to hoisting)
var a = 10;

if (true) {
    var b = 20;
}
console.log(b); // Output: 20 (b is function-scoped)

function checkVar(){
    var data = "var 1s"
}
console.log(data, "data"); //! Not Defined Because it function scope

