//!!!!!!!!!!!!!
//копирах го от блога, аз не успях да я измисля сам
function solve(array) {
    let longestSequence = [];
    let resultSequence = [];
    let count = 0;
    let maxCount = 0;

    for (i = 0; i < array.length; i++) {
        if (count === 0) {
            resultSequence.push(array[i]);
        }
        if (array[i] === array[i + 1]) {
            count++;
            resultSequence.push(array[i]);
            if (count > maxCount) {
                longestSequence = resultSequence;
                maxCount = count;
            }
        } else {
            resultSequence = [];
            count = 0;
        }
    }
    console.log(longestSequence.join(" "));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);