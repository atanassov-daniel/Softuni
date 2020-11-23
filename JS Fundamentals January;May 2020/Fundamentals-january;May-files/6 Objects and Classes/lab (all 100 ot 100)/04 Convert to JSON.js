function solve(name, lastName, hairColor) {
    let person = { name: name, lastName: lastName, hairColor: hairColor };

    let personJSON = JSON.stringify(person);
    
    console.log(personJSON);
}

solve('George', 'Jones', 'Brown');