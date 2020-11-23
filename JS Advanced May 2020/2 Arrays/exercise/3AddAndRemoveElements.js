function solve(input) {
    let arr = [];
    let currentNumber = 1;

    for (const command of input) {
        if (command === 'add') {
            arr.push(currentNumber);
        } else if (command === 'remove') {
            arr.pop();
        }

        currentNumber++;
    }

    if (arr.length === 0) {
        console.log('Empty');
    } else {
        arr.forEach(element => console.log(element));
    }
}

solve(['add',
    'add',
    'add',
    'add'
]);
solve(['add',
    'add',
    'remove',
    'add',
    'add'
]);
solve(['remove',
    'remove',
    'remove'
]);