class BankAccount {
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
  }

  deposit() {
    console.log(this.balance);
  }
}

class CurrentAccount  extends BankAccount {
    transtionLimit= 10
    constructor(customerName, balance){
        super(customerName, balance)
    }

    takeBussinessLoad(){
        console.log(this.balance);
        
    }
}
const sahil = new CurrentAccount("sahil", 88);
console.log(sahil.takeBussinessLoad())
