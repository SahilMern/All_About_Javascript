function Greet(names) {
    this.name = "Coder1";
    this.printName = function() {
      console.log(`My Name is ${this.name}`);
    }
  }
  
  const userData = {
      name: "Sahil"
  }
  
  // Create an instance of Greet
  const greetInstance = new Greet();
  
  // Bind printName method to userData
  const printUser = greetInstance.printName.bind(userData);
  
  console.log(printUser, "printUser");
  
  printUser(); // Output: My Name is Sahil
  