function solve(array) {
    let newArr = [];
    let g = 0;
    let isFound = false;
    let toPrint = [];

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        let nextElement = array[i + 1];

        if (nextElement === currentElement) {
            newArr.push(currentElement);
            for (g = i + 1; g < array.length; g++) {
                if (currentElement === array[g]) {
                    newArr.push(array[g]);
                    isFound = true;
                } else {
                    break;
                }
            }

            if (g === array.length - 1) {
                break;
            }
            if (isFound) {
                i = g - 1;
            }
        }
    }
    
    console.log(newArr);
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);