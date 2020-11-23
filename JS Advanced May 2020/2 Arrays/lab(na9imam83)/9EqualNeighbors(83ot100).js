function solve(matrix) {
    let pairs = [];

    if (matrix.length > 1) {
        for (let index = 0; index < matrix.length - 1; index++) {
            let currentArr = matrix[index];

            let nextArr = matrix[index + 1];

            for (let g = 0; g < currentArr.length; g++) {
                if (currentArr[g] === nextArr[g]) {
                    pairs.push(`|| ${currentArr[g]} \\ ${nextArr[g]} ||`);
                }
            }

            for (let k = currentArr.length - 1; k > 0; k--) {
                if (currentArr[k] === currentArr[k - 1]) {
                    pairs.push(`|| ${currentArr[k]} \\ ${currentArr[k - 1]} ||`);

                }

                if (nextArr[k] === nextArr[k - 1]) {
                    pairs.push(`|| ${nextArr[k]} \\ ${nextArr[k-1]} ||`);
                }
            }
        }
    } else if (matrix.length == 1) {
        for (let k = matrix[0].length - 1; k > 0; k--) {
            if (matrix[0][k] === matrix[0][k - 1]) {
                pairs.push(`|| ${matrix[0][k]} \\ ${matrix[0][k - 1]} ||`);
            }
        }
    }


    console.log(pairs.length);
}

solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);

solve([
    ['2', '2', '5', '7', ' 4'],
    ['4', '0', '5', '3', ' 4'],
    ['2', '5', '5', '4', ' 2']
]);
solve([
    ['2', '2', '5', '7', ' 4']
]);


/*
        let indexElement = 0;
        while (indexElement < matrix[0].length) {

            for (const i in matrix) {
                let arr = matrix[i];

                let elementFirstArr;
                if (i == 0) {
                    elementFirstArr = arr[indexElement];
                } else {
                    if (arr[indexElement] === elementFirstArr) {
                        pairs.push(`|| ${arr[indexElement]} \\ ${elementFirstArr} ||`);
                    }
                }


            }

            indexElement++;
        }

        console.log(pairs);
    */