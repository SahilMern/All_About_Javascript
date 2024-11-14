function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
    return this.balance; // Optional: return updated balance
};

BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
    return this.balance; // Optional: return updated balance
};

function CurrentAccount(customerName, balance = 0) {
    BankAccount.call(this, customerName, balance);
    this.transactionLimit = 50000;
}

CurrentAccount.prototype = Object.create(BankAccount.prototype);
const rakeshAccount = new CurrentAccount('Rakesh K', 500);

console.log(rakeshAccount);

// Corrected deposit action:
rakeshAccount.deposit(892); // Perform deposit
console.log(rakeshAccount.balance); // Check updated balance
