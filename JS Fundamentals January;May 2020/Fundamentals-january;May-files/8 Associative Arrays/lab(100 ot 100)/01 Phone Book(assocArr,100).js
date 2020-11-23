/*function solve(input) {
    let contacts = {};
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        let splitted = element.split(' ');
        contacts[splitted[0]] = splitted[1];
    }

    for (const key in contacts) {
        console.log(`${key} -> ${contacts[key]}`);
    }
}*/

// по-фенси решение⇩
function solve(input) {
    let contacts = {};

    for (const line of input) {
        let [name, phone] = line.split(' ');  // използване на destructuring syntax-a
        contacts[name] = phone;
        // няма нужда да проверявам дали вече го има името, защото то при същото име на пропъртито просто ще му презапише стойността
    }

    /*Object.keys(contacts).forEach((name) =>
        console.log(`${name} -> ${contacts[name]}`));*/

    Object.entries(contacts).forEach((currentEntry) =>
        console.log(`${currentEntry[0]} -> ${currentEntry[1]}`));

}

solve([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);