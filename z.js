function User(name, age) {
  this.name = name;
  this.age = age;

  

  //!Not do like this
//   this.getBioData = () => {
//     return `my name is ${this.name} and my age is ${this.age}`;
//   };
}

User.prototype.getBioData = function() {
    return `my name is ${this.name} and my age is ${this.age}`;
    
}

const sahil = new User("sahil", 21);
const sumit = new User("sumit", 12)
console.log(sahil, "sahil");
console.log(sumit, "sahil");

console.log(sahil.getBioData());
console.log(sumit.getBioData());


