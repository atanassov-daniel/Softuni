class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(username, salary, position, department) {
        if (Object.values(arguments).length !== 4 || Object.values(arguments).includes("") || Object.values(arguments).includes(undefined) || Object.values(arguments).includes(null) || salary < 0) {
            throw "Invalid input!";
        } else {
            if (this.departments[department]) {
                this.departments[department].push({
                    username,
                    salary,
                    position
                });
            } else {
                this.departments[department] = [{
                    username,
                    salary,
                    position
                }];
            }

            return `New employee is hired. Name: ${username}. Position: ${position}`;
        }
    }

    bestDepartment() {
        let deps = {};
        for (const department in this.departments) {
            let salariesTotal = 0;
            let salariesCount = 0;

            this.departments[department].forEach(object => {
                salariesTotal += object.salary;
                salariesCount++;
            });

            let average = salariesTotal / salariesCount;
            deps[department] = average;
        }


        let sortedDeps = Object.entries(deps).sort((a, b) => b[1] - a[1]);
        let bestDepartment = sortedDeps[0];

        let output = `Best Department is: ${bestDepartment[0]}\nAverage salary: ${bestDepartment[1].toFixed(2)}`;
        let sorted = this.departments[bestDepartment[0]].sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
        sorted.forEach(obj => output += `\n${Object.values(obj).join(' ')}`);

        return output;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer

console.log('Best department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR' == 'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR');