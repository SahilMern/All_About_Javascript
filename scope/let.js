if (true) {
    let x = 10;
    console.log(x); // Output: 10
}
console.log(x); // Error: x is not defined (x is block-scoped)

function data(){
    let coder= "sahil"
}
console.log(coder, "Coder data "); // Not defined

data(s)

let y = 5;
y = 15; // Allowed (reassignment)
let y = 20; // Error: Identifier 'y' has already been declared
