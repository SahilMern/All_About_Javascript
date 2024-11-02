function BankAccount(customerName, Balance){
    this.customerName = customerName;
    this.Balance =  Balance;
}

BankAccount.prototype.Deposite = function(amount){
    this.Balance += amount
}
const user1 = new BankAccount("Sahil", 1252456566);
const user2 = new BankAccount("Sahil 2", 9252456566);

console.log(user1, "User1");
console.log(user2, "User1");


//TODO:-  Note:- JS MAI Jo function hoti hai vo sab object hoti isliye hum constructor function par . properties access kar sakte hai 