function solve(array) {
    let isBigger = true;
    let topIntegers = [];

    for (let i = 0; i < array.length; i++) {
        let currentElement=array[i]
        for (let g = i; g < array.length; g++) {
            if (currentElement >= array[g]) {
                isBigger = true;
            } else {
                isBigger = false;
                break;
            }
        }
        if (isBigger === true) {
            topIntegers.push(array[i]);
        }
    }

    let newArr = [];

    if (isBigger === true) {
        for (let k = 0; k < topIntegers.length; k++) {
                if (topIntegers[k] != topIntegers[k+1]) {
                    newArr.push(topIntegers[k])
                }
        }
        console.log(newArr.join(' '));
    }
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);