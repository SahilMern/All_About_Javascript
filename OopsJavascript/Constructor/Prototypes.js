function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to Person prototype
Person.prototype.details = function () {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

// Creating instances of Person
const sahil = new Person("sahil", 25);
const deepak = new Person("deepak", 30);

sahil.details(); // Output: "Hello, my name is sahil and I'm 25 years old."
deepak.details(); // Output: "Hello, my name is deepak and I'm 30 years old."


