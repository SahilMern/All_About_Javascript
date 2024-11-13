// Parent constructor function
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.sayHello = function() {
    console.log(`Hello, I am ${this.name}`);
  };
  
  // Child constructor function
  function Dog(name, breed) {
    Animal.call(this, name);  // Call the parent constructor
    this.breed = breed;
  }
  
  // Set up inheritance from Animal
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  // Add a method to Dog
  Dog.prototype.bark = function() {
    console.log(`${this.name} says Woof!`);
  };
  
  // Create an instance of Dog
  const myDog = new Dog('Buddy', 'Golden Retriever');
  myDog.sayHello();  // Output: Hello, I am Buddy
  myDog.bark();      // Output: Buddy says Woof!
  