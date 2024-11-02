// Function Definition
function introduce(title, city) {
    console.log(`${title}. My name is ${this.name} and I live in ${city}.`);
}

// Object with context
const person = {
    name: 'Sahil'
};

// Calling the function using apply
introduce.apply(person, ['Mr.', 'New York']);

// Parent Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to Person's prototype
Person.prototype.getDetails = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Child Constructor Function
function Employee(name, age, jobTitle, salary) {
    // Call the Person constructor with Employee's context using apply
    Person.apply(this, [name, age]);
    this.jobTitle = jobTitle;
    this.salary = salary;
}

// Set up inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding a method to Employee's prototype
Employee.prototype.getJobDetails = function() {
    console.log(`Job Title: ${this.jobTitle}, Salary: ${this.salary}`);
};

// Create an instance of Employee
const employee1 = new Employee('John', 30, 'Developer', 50000);

// Calling methods
employee1.getDetails();      // Output: Name: John, Age: 30
employee1.getJobDetails();  // Output: Job Title: Developer, Salary: 50000

//? Array Handling: apply method ke through, aap easily array elements ko function arguments mein convert kar sakte hain