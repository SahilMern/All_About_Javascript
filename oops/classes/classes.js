class BankAccount {
    constructor(CustomerName, balance) {
        this.CustomerName = CustomerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }
}

const user1 = new BankAccount("Sahil", 8000);
const user2 = new BankAccount("Rohit", 400);

console.log(user1, "User1");
console.log(user2, "User2");

user1.deposit(400);
user2.withdraw(150)
console.log(user1.balance); // Output: 8400

// Checking the prototype
console.log(BankAccount.prototype); 
