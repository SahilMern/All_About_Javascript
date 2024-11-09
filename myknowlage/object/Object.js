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

// Function constructor
function Person1(name) {
    this.name = name;
    this.age = 21;
  }
  var object = new Person1("Sudheer");


//?   Function constructor with prototype:
function Person3() {}
Person3.prototype.name = "Sudheer";
var object = new Person3();
console.log(object, "object");


const orgObject = { company: 'XYZ Corp'};
const carObject = { name: 'Toyota'};
const staff = Object.assign({}, orgObject, carObject);
console.log(staff);


class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  var object = new Person("Sudheer");
  console.log(object, "Main Es6");
  