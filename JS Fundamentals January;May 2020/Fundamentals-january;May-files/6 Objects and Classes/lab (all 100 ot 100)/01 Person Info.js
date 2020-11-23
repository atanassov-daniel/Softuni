function solve(firstName, lastName, age) {
    let obj = { firstName: firstName, lastName: lastName, age: age };
    let keys = Object.keys(obj);
    let values = Object.values(obj);

    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i] + ': ' + values[i]);
    }
}

solve("Peter",
    "Pan",
    "20"
);