function solve(array, magicalNumber) {

    for (let i = 0; i < array.length; i ++) {

        let currentElement = array[i];

        for (let g = i; g < array.length; g++) {
            let otherElement = array[g + 1];
            let sum = currentElement + otherElement;

            if (sum === magicalNumber) {
                console.log(currentElement + " " + otherElement);
            }
        }
    }
}

solve([1, 7, 6, 2, 19, 23], 8);
solve([14, 20, 60, 13, 7, 19, 8], 27);
solve([1, 2, 3, 4, 5, 6], 6);
