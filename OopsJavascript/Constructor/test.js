function BankAccount(customerName,balance){
    this.customerName=customerName
    this.accountNumber= Date.now()
    this.balance = balance
}

const rakeshAccount = new BankAccount("Rakesh Account", 1000)
const sahilAccount = new BankAccount("Sahil Account", 1000)
console.log(rakeshAccount);
console.log(sahilAccount);

console.log(BankAccount.prototype, "BankAccount prototype"); //Empty Object
// BankAccount.prototype.test = "Hello i am prototype"
BankAccount.prototype.deposit = function(amount) {
   this.balance += amount
}

BankAccount.prototype.withraw = function(amount) {
    this.balance -= amount
 }

sahilAccount.deposit(89000)
rakeshAccount.withraw(8)
console.log(sahilAccount, rakeshAccount);

