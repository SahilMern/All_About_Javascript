// setTimeout(() => {
//     console.log("hey sahil");
    
// }, 2000)

// setInterval(() => {
//     console.log("Hello Sir");
    
// },2000)

// function UserConstructor(name) {
//     console.log(this);
//   }
//   const coders = new UserConstructor("sahil");

const hof = (callback) => {

    return anotherfunction
}
const anotherfunction =() => {
    console.log("hello");
    
}
console.log(hof(anotherfunction));
