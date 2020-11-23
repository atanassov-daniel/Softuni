function solve(input) {
    let sumRows = [];
    let sumColumns = [];

    if (input.length === 0) {
        console.log(true);
    } else {
        for (let i = 0; i < input.length; i++) {
            let rowSum = 0;

            for (let index = 0; index < input[i].length; index++) {
                rowSum += input[i][index];
            }

            sumRows.push(rowSum);
        }

        for (let g = 0; g < input.length; g++) {
            let columnSum = 0;

            for (let k = 0; k < input[g].length; k++) {
                columnSum += input[k][g];
            }

            sumColumns.push(columnSum);
        }

        let uniqueRows = Array.from(new Set(sumRows));
        let uniqueColumns = Array.from(new Set(sumColumns));

        if (uniqueColumns.length === 1 && uniqueRows.length === 1) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
/*solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);*/