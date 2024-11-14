// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//     this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//     this.balance -= amount;
// };

// function CurrentAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//     console.log('Taking business loan: ' + amount);
// };

// function SavingAccount(customerName, balance = 0) {
//     BankAccount.call(this, customerName, balance);
//     this.transactionLimit = 10000;
// }
// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//     console.log('Taking personal loan: ' + amount);
// };

// const rakeshAccount = new SavingAccount('Rakesh K', 500);
// rakeshAccount.deposit(500);
// rakeshAccount.withdraw(100);
// rakeshAccount.takePersonalLoan(40000);
// // console.log(rakeshAccount);

// ----------------------------------------------------
function Animal(name) {
  this.name = name;
  this.species = 'Animal';
}
Animal.prototype.speak = function() {
  console.log(this.name + ' makes a noise');
};

// Child constructor function
function Dog(name, breed) {
  // Call the parent constructor
  // Animal.call(this, name); // Inherit properties
  Animal.call(this, name)
  this.breed = breed;
}

const dog1 = new Dog('Rex', 'Labrador');
const dog2 = new Dog('RexKaBaap', 'lalabahadur');

console.log(dog1);
console.log(dog2);


// dog.speak(); // Rex makes a noisecls
