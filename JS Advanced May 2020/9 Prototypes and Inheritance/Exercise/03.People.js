function solve() {
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = Number(age);
      this.salary = 0;
      this.tasks = [];
    }
    collectSalary() {
      let salary = this.salary;
      if (this.dividend) {
        salary += this.dividend;
      }
      console.log(`${this.name} received ${salary} this month.`);
    }
    work() {
      console.log(this.tasks[0]);
      let firstElement = this.tasks.shift();
      this.tasks.push(firstElement);
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = [`${this.name} is working on a simple task.`];
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = [`${this.name} is working on a complicated task.`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers.`
      ];
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.dividend = 0;
      this.tasks = [`${this.name} scheduled a meeting.`,
        `${this.name} is preparing a quarterly report.`
      ];
    }
  }

  return {
    Employee,
    Junior,
    Senior,
    Manager
  };
}

let result = solve();

let guy1 = new result.Junior('dragan', 23);
let guy1parent = Object.getPrototypeOf(Object.getPrototypeOf(guy1));
let guy2 = new result.Senior('petkan', 24);
let guy2parent = Object.getPrototypeOf(Object.getPrototypeOf(guy2));
let guy3 = new result.Manager('bojan', 25);
let guy3parent = Object.getPrototypeOf(Object.getPrototypeOf(guy3));