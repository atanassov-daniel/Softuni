function solve(array) {
    let newArray = [];
    let currentMax = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];

        if (currentElement >= currentMax) {
            currentMax = currentElement;
            newArray.push(currentElement);
        }
    }
    console.log(newArray.join(' '));
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);