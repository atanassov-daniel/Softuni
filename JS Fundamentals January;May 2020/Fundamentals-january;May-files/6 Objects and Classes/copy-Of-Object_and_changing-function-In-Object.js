let person = {
    name: 'Pesho',
    age: '20',
    color: 'black',
    makeSound: function () {
        console.log('Meow');
    }
};

let personCopy = {};

let keys = Object.keys(person);
let values = Object.values(person);

for (let i = 0; i < keys.length; i++) {
    personCopy[keys[i]] = values[i];
}

person.makeSound = function () {
    console.log('Bao');
};
//person
person.age = '30';

console.log(person.age); // 30
person.makeSound(); // Bao

//personCopy
console.log(personCopy.age); // 20
personCopy.makeSound(); // Meow