function solve(input) {
    let step = Number(input.pop());

    for (let index = 0; index < input.length; index += step) {
        console.log(input[index]);
    }
}

solve([
    '5',
    '20',
    '31',
    '4',
    '20',
    '2'
]);
solve([
    'dsa',
    'asd',
    'test',
    'tset',
    '2'
]);
solve([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
]);