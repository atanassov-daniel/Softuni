function solve(arrayOfIntegers) {

    for (let i = 0; i < arrayOfIntegers.length; i++) {

        let currentElement = String(arrayOfIntegers[i]);

        let resultString = '';
        for (let k = currentElement.length - 1; k >= 0; k--) {
            if (currentElement[k]) {
                resultString += currentElement[k];
            }
        }

        if (resultString === currentElement) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

solve([123, 323, 421, 121]);



















// for (let g = 0; g < currentElement.length; g++) {
//     if (currentElement[k] === currentElement[g]) {
//         console.log('true');
//     }
// }



// let reversedString = '';
// for (let r = currentElement.length - 1; r >= 0; r--) {
//     reversedString += currentElement[r];
// }

// let resultString = '';
// for (let k = currentElement.length - 1; k >= 0; k--) {
//     if (currentElement[k]) {
//         resultString += currentElement[k];
//     }
// }

// if (resultString === reversedString) {
//     console.log('true');
// }
// reversedString = '';