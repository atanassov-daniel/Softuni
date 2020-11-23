class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.map(el => {
                let copy = {};
                for (const key in el) {
                    if (key !== "_transactions") {
                        copy[key] = el[key];
                    }
                }
                return JSON.stringify(copy);
            }).includes(JSON.stringify(customer))) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        } else {
            customer._transactions = [];
            this.allCustomers.push(customer);
            return customer;
        }
    }

    depositMoney(personalId, amount) {
        let indexFoundID = this.allCustomers.map(el => el = el.personalId).indexOf(personalId);
        if (indexFoundID === -1) {
            throw new Error("We have no customer with this ID!");
        } else {
            if (this.allCustomers[indexFoundID].totalMoney === undefined) {
                this.allCustomers[indexFoundID].totalMoney = amount;
            } else {
                this.allCustomers[indexFoundID].totalMoney += amount;
            }
            this.allCustomers[indexFoundID]._transactions.push(`${this.allCustomers[indexFoundID]._transactions.length + 1 || 1}. ${this.allCustomers[indexFoundID].firstName} ${this.allCustomers[indexFoundID].lastName} made deposit of ${amount}$!`);

            return `${this.allCustomers[indexFoundID].totalMoney}$`;
        }
    }

    withdrawMoney(personalId, amount) {
        let indexFoundID = this.allCustomers.map(el => el = el.personalId).indexOf(personalId);
        if (indexFoundID === -1) {
            throw new Error("We have no customer with this ID!");
        } else {
            if (this.allCustomers[indexFoundID].totalMoney === undefined || this.allCustomers[indexFoundID].totalMoney < amount) {
                throw new Error(`${this.allCustomers[indexFoundID].firstName} ${this.allCustomers[indexFoundID].lastName} does not have enough money to withdraw that amount!`);
            } else {
                this.allCustomers[indexFoundID].totalMoney -= amount;
            }
            this.allCustomers[indexFoundID]._transactions.push(`${this.allCustomers[indexFoundID]._transactions.length + 1 || 1}. ${this.allCustomers[indexFoundID].firstName} ${this.allCustomers[indexFoundID].lastName} withdrew ${amount}$!`);

            return `${this.allCustomers[indexFoundID].totalMoney}$`;
        }
    }

    customerInfo(personalId) {
        let indexFoundID = this.allCustomers.map(el => el = el.personalId).indexOf(personalId);

        if (indexFoundID === -1) {
            throw new Error("We have no customer with this ID!");
        }

        let obj = this.allCustomers[indexFoundID];

        let result = `Bank name: ${this._bankName}\nCustomer name: ${obj.firstName} ${obj.lastName}\nCustomer ID: ${personalId}\nTotal Money: ${obj.totalMoney}$`;

        result += "\nTransactions:\n";
        for (let i = obj._transactions.length - 1; i >= 0; i--) {
            result += obj._transactions[i];
            if (i !== 0) {
                result += "\n";
            }
        }

        return result;
    }
}

//zero test 1
let name = 'SoftUni Bank';
let bank = new Bank(name);

let customer1 = bank.newCustomer({
    firstName: 'Svetlin',
    lastName: 'Nakov',
    personalId: 1111111
});
console.log(customer1.firstName); //'Svetlin'

let customer2 = bank.newCustomer({
    firstName: 'Mihaela',
    lastName: 'Mileva',
    personalId: 3333333
});
console.log(customer2.lastName); //'Mileva'
console.log(customer2.personalId); //3333333

let totalMoney1 = bank.depositMoney(1111111, 250);
console.log(totalMoney1); //'250$', 'Function depositMoney returns incorrect totalMoney');

let totalMoney2 = bank.depositMoney(1111111, 250);
console.log(totalMoney2); //'500$', 'Function depositMoney returns incorrect totalMoney');

let totalMoney3 = bank.depositMoney(3333333, 555);
console.log(totalMoney3); //'555$', 'Function depositMoney returns incorrect totalMoney');

let totalMoney4 = bank.withdrawMoney(1111111, 125);
console.log(totalMoney4); //'375$', 'Function withdrawMoney returns incorrect totalMoney');

let output = bank.customerInfo(1111111);
let expectedOutput = `Bank name: SoftUni Bank
Customer name: Svetlin Nakov
Customer ID: 1111111
Total Money: 375$
Transactions:
3. Svetlin Nakov withdrew 125$!
2. Svetlin Nakov made deposit of 250$!
1. Svetlin Nakov made deposit of 250$!`;
console.log(output); //output, 'Incorrect output');