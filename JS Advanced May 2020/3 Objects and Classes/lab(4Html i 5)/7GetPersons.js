function solve() {
    class Person {
        constructor(...args) {
            if (args.length === 4) {
                this.firstName = args[0];
                this.lastName = args[1];
                this.age = args[2];
                this.email = args[3];
            } else if (args.length === 3) {
                this.firstName = args[0];
                this.lastName = args[1];
                this.age = args[2];
            } else if (args.length === 2) {
                this.firstName = args[0];
                this.lastName = args[1];
            } else if (args.length === 1) {
                this.firstName = args[0];
            }

        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }

    return [new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'), new Person('SoftUni'), new Person('Stephan', 'Johnson', 25), new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')];
}