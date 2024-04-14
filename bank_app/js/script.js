class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Requested Withdraw $${amount}. Insufficient funds`);
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Creating instances of BankAccount class
const account1 = new BankAccount(2024001, "Atikur Rahman", 1000);
const account2 = new BankAccount(2024002, "Abdul Hannan", 500);

// Demonstrate functionality
console.log("Account 1 Information:");
account1.displayAccountInfo();
account1.deposit(200);
account1.withdraw(300);
account1.withdraw(2000); // Trying to withdraw more than available balance

console.log("\nAccount 2 Information:");
account2.displayAccountInfo();
account2.deposit(1000);
account2.withdraw(700);
