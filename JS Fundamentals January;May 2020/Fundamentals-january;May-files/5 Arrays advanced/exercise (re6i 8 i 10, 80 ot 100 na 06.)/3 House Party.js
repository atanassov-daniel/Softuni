function solve(arr) {
    let guests = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let elementParts = element.split(' ');
        let name = elementParts[0];

        if (elementParts.length === 3) {

            if (guests.includes(name) === false) {
                guests.push(name);
            } else {
                console.log(name + ' is already in the list!');
            }
        } else if (elementParts.length === 4) {

            if (guests.includes(name) === false) {
                console.log(name + ' is not in the list!');
            } else {
                guests = guests.filter(x => x !== name);
            }
        }
    }

    for (let index = 0; index < guests.length; index++) {
        console.log(guests[index]);
    }
}

solve(
    [
        'Allie is going!',
        'George is going!',
        'John is not going!',
        'George is not going!'
    ]
);

solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);