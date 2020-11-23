function solve(array) {
//защо не работеше когато това беше тук вместо малко по-долу    let isTop = true;
    let topIntegers = [];

    for (let i = 0; i < array.length; i++) {
        let isTop = true;
        let currentElement = array[i];
        let rightElementsArray = array.slice(i + 1);

        for (let g = 0; g < rightElementsArray.length; g++) {
            if (currentElement > rightElementsArray[g]) {
                isTop = true;
            } else {
                isTop = false;
                break;
            }
        }
        if (isTop === true) {
            topIntegers.push(currentElement);
        }
    }

    console.log(topIntegers.join(' '));
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
solve([27, 19, 42, 2, 13, 45, 48]);
