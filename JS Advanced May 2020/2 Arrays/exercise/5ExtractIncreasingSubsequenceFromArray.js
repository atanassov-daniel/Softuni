function solve(input) {
    let resultArr = [];
    let currentBiggest = input[0];

    for (let index = 0; index < input.length; index++) {
        if (input[index] >= currentBiggest) {
            currentBiggest = input[index];
            resultArr.push(currentBiggest);
        }
    }

    resultArr.forEach(element => console.log(element));
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
solve([1,
    2,
    3,
    4
]);
solve([20,
    3,
    2,
    15,
    6,
    1
]);