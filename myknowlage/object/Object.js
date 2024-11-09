//TODO:- Possible Way to create Object in js
//? 1)In JavaScript, the Object.create() method is used to create a new object, using an existing object as the prototype of the newly created object.
const person = {
  greet: function () {
    console.log("Hello!");
  },
};
const john = Object.create(person);
console.log(john);

john.greet(); // Output: Hello!
