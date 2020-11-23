function solve(input) {
    let assoc = {};

    for (const value of input) {
        let splitted = value.split(', ');
        let [direction, carNumber] = [splitted[0], splitted[1]];
        /*  и двете работят, но ги принтира по различен начин:
        console.log([direction, carNumber]); // [ 'IN', 'CA2844AA' ]
        console.log(direction, carNumber); // IN CA2844AA  */
        if (direction === 'IN') {
            assoc[carNumber] = direction;
        } else if (direction === 'OUT') {
            delete assoc[carNumber];
        }

    }
    let entriesSorted = Object.entries(assoc).sort((a, b) => a[0].localeCompare(b[0]));

    if (entriesSorted.length > 0) {
        entriesSorted.forEach(x => console.log(x[0]));
    } else {
        console.log('Parking Lot is Empty');
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);