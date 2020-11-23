function solve(input) {
    //make the array of strings a matrix with arrays of numbers
    for (const index in input) {
        input[index] = input[index].split(' ').map(Number);
    }

    let sumLeftMain = 0;
    let sumRightMain = 0;

    let rightDiagonalIndexElement = input.length - 1;
    for (let i = 0; i < input.length; i++) {

        sumLeftMain += input[i][i];


        sumRightMain += input[i][rightDiagonalIndexElement];
        rightDiagonalIndexElement--;
    }

    if (sumLeftMain !== sumRightMain) {
        input.forEach(line => console.log(line.join(' ')));
    } else {
        let rightDiagonalIndexElement = input.length - 1;
        for (let index = 0; index < input.length; index++) {

            sumLeftMain += input[index][index];


            sumRightMain += input[index][rightDiagonalIndexElement];
            rightDiagonalIndexElement--;
        }
    }
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);
solve(['1 1 1',
    '1 1 1',
    '1 1 0'
]);