function solve(array) {
    let leftSum = 0;
    let rightSum = 0;
    let isFoundSuchElement = false;

    for (let i = 0; i < array.length; i++) {
        leftSum = 0;
        rightSum = 0;
        let currentElement = array[i];

        for (let g = i - 1; g >= 0; g--) {
            leftSum += array[g];
        }

        for (let k = i + 1; k < array.length; k++) {
            rightSum += array[k]
        }


        if (i === 0) {
            leftSum = 0
        } else if (i === array.length - 1) {
            rightSum = 0;
        }


        if (leftSum === rightSum) {
            isFoundSuchElement = true;
            console.log(i);
        }

    }

    if (isFoundSuchElement === false) {
        console.log("no");
    }
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2, 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);