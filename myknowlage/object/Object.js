//TODO:- Possible Way to create Object in js
const person = {
  greet: function () {
    console.log("Hello!");
  },
};
const john = Object.create(person);
john.greet(); // Output: Hello!
