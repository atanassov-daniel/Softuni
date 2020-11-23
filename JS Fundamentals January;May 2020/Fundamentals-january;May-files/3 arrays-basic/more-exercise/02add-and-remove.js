function solve(array) {
    let newArray = [];

    for (let i = 1; i <= array.length; i++) {
        let command = array[i - 1];

        if (command === 'add') {
            newArray.push(i);
        } else if (command === 'remove') {
            newArray.pop();
        }
    }

    if (newArray.length >= 1) {
        console.log(newArray.join(' '));
    } else {
        console.log('Empty');
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);
