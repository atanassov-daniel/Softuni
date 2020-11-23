function solve(array) {
    let step = Number(array.pop());
    let toPrint = [];

    for (let i = 0; i < array.length; i += step) {
        toPrint.push(array[i]);
    }

    console.log(toPrint.join(' '));
}

solve(['5', '20', '31', '4', '20', '2']);
solve(['dsa', 'asd', 'test', 'test', '2']);
solve(['1', '2', '3', '4', '5', '6']);
