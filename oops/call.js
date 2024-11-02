function Person(name, age){
    this.name= name;
    this.age = age;
}

Person.prototype.getDetails = function() {
    console.log(`Hello My name is ${this.name} and My Age is ${this.age}`);
    
}

function Employe(jobTitle, salary){
    Person.call(this, jobTitle, salary)
    this.jobTitle = jobTitle
    this.salary =salary
}

Employe.prototype = Object.create(Person.prototype)
Employe.prototype.constructor  = Employe;


const newEmploye = new Employe("sahil", 22, "Mern Developer",1000000);
console.log(newEmploye);
console.log(newEmploye.getDetails());

//! Employe.prototype = Object.create(Person.prototype);
//?  yeh line ensure karti hai ki Employe class Person class ke prototype methods (jaise getDetails()) inherit kar sake.

//! Employe.prototype.constructor = Employe;
//? constructor ko reset karta hai taaki Employe objects ka constructor properly set ho.

//? Deff :- Definition: call allows you to invoke a parent constructor function from a child constructor function, setting this to the child instance and passing arguments to the parent constructor. 