function Person(name, age) {
  this.name = name;
  this.age = age;

  //method
  this.details = function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  };
}

const sahil = new Person("sahil", "yadav");
sahil.details()
