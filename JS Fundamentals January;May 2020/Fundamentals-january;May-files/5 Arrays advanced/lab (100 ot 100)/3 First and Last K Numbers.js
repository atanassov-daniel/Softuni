function solve(arr) {
    let k = arr[0];
    arr.shift();
    let resultArray = [];

    for (let i = 0; i < k; i++) {
        resultArray.push(arr[i]);
    }
    console.log(resultArray.join(' '));
    resultArray = [];

    for (let i = arr.length - k; i < arr.length; i++) {
        resultArray.push(arr[i]);
    }
    console.log(resultArray.join(' '));
}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);

/*
това е за второто пак, но ги дава отзад напред и след това ще трябва да ги обръщам,
или просто да ги добавям в началото на масива:

for (let i = arr.length - 1; i > arr.length - 1 - k; i--) {
    console.log(arr[i]);
}

*/