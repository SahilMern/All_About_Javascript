// //! WORK IN OBJECT ONLY
// const car = { 
//     brand: 'Toyota',
//     getBrand: function() {
//         return this.brand; // 'this' refers to the 'car' object
//     }
// };

// console.log(car.getBrand()); // Outputs: 'Toyota'

// //! NOT  WORK IN FUNCTION ONLY
// function sum(){
//     const user = "user"
//     console.log(this, "thus"); //?But work
//     console.log(this.user, "thus");
// }
// sum()

// const arrowFunction = () => ({ username: "name" });
// console.log(arrowFunction().username); // Outputs: 'name'

var myNames = 'vinod';
function myName() {
    console.log(this.myNames);
}
myName(); // Outputs: vinod (in a non-strict, traditional environment)

