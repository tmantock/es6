class Account {
  constructor (balance) {
    this.balance = typeof balance === 'number' ? balance : 0;
  }

  set balance (value){
    this._balance = value;
    this.balanceDate = new Date();
  }

  get balance (){
    return this._balance;
  }

  deposit (amount) {
    if(typeof amount === 'number'){
      this.balance = this.balance + amount;
    }
  }

  withdraw (amount) {
    if(typeof amount === 'number') {
      this.balance = this.balance - amount;
    }
  }

  print () {
    console.log(this.balance);
  }
}

var bank = new Account(150);

bank.deposit(10);

console.log("Deposit");bank.print();

bank.withdraw(50);

bank.withdraw('dfjdsfjdkjds');

console.log("Withdraw");bank.print();
