function Person(name, age) {
    let _name = name; // Private variable
    let _age = age;   // Private variable

    this.getName = function() {
        return _name;
    };

    this.getAge = function() {
        return _age;
    };

    this.setAge = function(newAge) {
        if (newAge > 0) {
            _age = newAge;
        } else {
            console.log("Invalid age");
        }
    };
}

const person1 = new Person('John', 30);
console.log(person1.getName()); // Output: John
console.log(person1.getAge());  // Output: 30

person1.setAge(35);
console.log(person1.getAge());  // Output: 35

// Direct access is not possible
console.log(person1._age); // Output: undefined
person1._age="4555"
console.log(person1);

