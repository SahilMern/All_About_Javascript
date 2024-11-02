// function removeSpaces(str) {
//     return str.replace(/\s+/g, '');
// }

// let result = removeSpaces("Hello World!");
// console.log(result); // Output: "HelloWorld!"


//!Method 2
// function removeSpaces(str) {
//     return str.split(" ").join("");
// }
// let result = removeSpaces("Hello World!");
// console.log(result); // Output: "HelloWorld!"

//!Method 3

function removeSpaces(str) {
    let result = '';
    console.log(str.length);
    
    for (let i = 0; i < str.length; i++) {
        // if (str[i] !== ' ') {
        //     result += str[i];
        // }
        console.log(str[i] !== ' ', str[i], "what");
        
        
    }
    return result;
}

let result = removeSpaces("Hello World!");
console.log(result); // Output: "HelloWorld!"