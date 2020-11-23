function solve(matrix) {
    let sumMain = 0;
    let index = 0;

    let sumSecondary = 0;
    let backIndex = matrix[0].length - 1;

    for (const arr of matrix) {
        sumMain += arr[index];
        sumSecondary += arr[backIndex];
        index++;
        backIndex--;
    }

    console.log(sumMain + ' ' + sumSecondary);
}

solve([
    [20, 40],
    [10, 60]
]);
solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);