var x = 10;
var x = 20;  // Allowed: Re-declared the same variable
console.log(x); // Output: 20

x = 30; // Allowed: Updated the value
console.log(x); // Output: 30
// ----------------------------------------------------------------
let y = 10;
y = 20; // Allowed: Updated the value
console.log(y); // Output: 20

// Do not re-declare the same variable 'y' in the same block.
// You can use another block or different variable names:

{
  let y = 30; // This works because it's in a different block
  console.log(y); // Output: 30
}


// -------------------------------------------------------
const z = 10;
// z = 20; // Error: Assignment to constant variable

// Do not re-declare 'z' in the same block, use a separate block for demonstration:
{
  const z = 30; // This works because it's in a different block
  console.log(z); // Output: 30
}

const obj = { a: 1 };
obj.a = 2; // Allowed: Object properties can be changed
console.log(obj); // Output: { a: 2 }

// You cannot reassign the object to another object:
{
  // obj = { b: 3 }; // Error: Assignment to constant variable
}

