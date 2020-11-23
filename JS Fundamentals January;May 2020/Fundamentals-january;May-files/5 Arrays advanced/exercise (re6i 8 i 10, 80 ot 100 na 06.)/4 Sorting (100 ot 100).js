function sort(arr) {
    let descending = arr.sort((a, b) => b - a).slice();
    let ascending = arr.sort((a, b) => a - b).slice();

    let resultArr = [];
    for (let index = 0; index < descending.length / 2; index++) {
        let biggestElement = descending[index];
        let smallestElement = ascending[index];

        if (index !== Math.floor(descending.length / 2)) {
            resultArr.push(biggestElement, smallestElement);
        } else if (index === Math.floor(descending.length / 2)) {
            if (arr.length % 2 === 0) {
                resultArr.push(biggestElement, smallestElement);
            } else {
                resultArr.push(biggestElement);
            }
        }
    }

    console.log(resultArr.join(' '));
}

sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);