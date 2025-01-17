function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getDetails = function() {
    console.log(`Hello My name is ${this.name} and My Age is ${this.age}`);
};

function Employe(name, age, jobTitle, salary) {
    Person.call(this, name, age); // Call parent constructor with 'name' and 'age'
    this.jobTitle = jobTitle;
    this.salary = salary;
}

// Set the prototype chain so that Employe instances inherit from Person
Employe.prototype = Object.create(Person.prototype);
// Employe.prototype.constructor = Employe;

const newEmploye = new Employe("Sahil", 22, "MERN Developer", 1000000);
console.log(newEmploye);  // This will log the newEmploye object
newEmploye.getDetails();  // This will call the getDetails method from the Person prototype


//! Employe.prototype = Object.create(Person.prototype);
//?  yeh line ensure karti hai ki Employe class Person class ke prototype methods (jaise getDetails()) inherit kar sake.

//! Employe.prototype.constructor = Employe;
//? constructor ko reset karta hai taaki Employe objects ka constructor properly set ho.

//? Deff :- Definition: call allows you to invoke a parent constructor function from a child constructor function, setting this to the child instance and passing arguments to the parent constructor. 