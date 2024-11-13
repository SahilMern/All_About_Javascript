// Parent constructor function
function Animal(name, food) {
    this.name = name;
    this.food=food
  }
  
  // Child constructor function
  function Dog(name, food,breed) {
    // Using `call` to invoke the parent constructor
    Animal.call(this, name, food);  // Sets `this` to the current Dog instance and passes the name argument
    this.breed = breed;       // Additional property specific to Dog
  }
  
  const myDog = new Dog("Buddy","pedigree", "Golden Retriever");
  console.log(myDog.name);   // Output: Buddy
  console.log(myDog.food);   // Output: Buddy
  console.log(myDog.breed);  // Output: Golden Retriever
  