function solve(arrIntegers, commandsArray) {
    for (const value of commandsArray) {

        let splitted = value.split(' ');
        let command = splitted.shift();

        if (command === 'add') {
            let index = Number(splitted.shift());
            let element = Number(splitted.shift());

            arrIntegers.splice(index, 0, element);

        } else if (command === 'addMany') {
            let index = Number(splitted.shift());
            let elementsToAddArray = splitted.slice().map(x => Number(x));

            arrIntegers.splice(index, 0, ...elementsToAddArray);

        } else if (command === 'contains') {
            let element = Number(splitted.shift());

            console.log(arrIntegers.indexOf(element));

        } else if (command === 'remove') {
            let index = Number(splitted.shift());

            arrIntegers.splice(index, 1);

        } else if (command === 'shift') {
            let positionsToShift = Number(splitted.shift());
        } else if (command === 'sumPairs') {
            for (let g = 0; g < arrIntegers.length / 2; g++) {
                let sum = arrIntegers[g] + arrIntegers[g + 1];
                arrIntegers.splice(g, 2, sum);
            }

        } else if (command === 'print') {
            console.log(arrIntegers);
            break;
        }

    }
}

solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);
solve([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);