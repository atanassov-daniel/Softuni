class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
    }

    set fullName(fullName) {
        if (fullName.split(" ").length === 1) {

        } else {
            this.firstName = fullName.split(' ')[0];
            this.lastName = fullName.split(' ')[1];
        }
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let a = new Person("Albert", "Simpson");
let actual = a.fullName;
let expected = "Albert Simpson";
assert.equal(actual, expected);
a.firstName = "Simon";
let actualFullName = a.fullName;
let expectedFullName = "Simon Simpson";
assert.equal(actualFullName, expectedFullName);
a.fullName = "Peter";
let b = a.firstName;
let expectedB = "Simon";
assert.equal(b, expectedB);
let v = a.lastName;
let expectedV = "Simpson";
assert.equal(v, expectedV);
/*
let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
*/
/*
let person = new Person("Albert", "Simpson");
console.log(person.fullName);//Albert Simpson
person.firstName = "Simon";
console.log(person.fullName);//Simon Simpson
person.fullName = "Peter";
console.log(person.firstName) // Simon
console.log(person.lastName) // Simpson
*/