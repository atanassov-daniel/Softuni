function solve(arrayOfNumbers) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let currentNumber = arrayOfNumbers[i];
        if (currentNumber % 2 === 0) {
            sumEven += currentNumber;
        } else {
            sumOdd += currentNumber;
        }
    }

    let sumsDifference = sumEven - sumOdd;
    console.log(sumsDifference);
}

solve([1, 2, 3, 4, 5, 6]);
solve([3, 5, 7, 9]);
solve([2, 4, 6, 8, 10]);

/*
function solve(arrayOfNumbers) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let value of arrayOfNumbers) {
        if (value % 2 === 0) {
            sumEven += value;
        } else {
            sumOdd += value;
        }
    }

    let sumsDifference = sumEven - sumOdd;
    console.log(sumsDifference);
}
*/

