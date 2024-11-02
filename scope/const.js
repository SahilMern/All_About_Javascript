if (true) {
    const z = 30;
    console.log(z); // Output: 30
}
console.log(z); // Error: z is not defined (z is block-scoped)

const w = 50;
w = 60; // Errsor: Assignment to constant variable.


function checkConst(){
    const data ="user1"
}
console.log(data, "data");
