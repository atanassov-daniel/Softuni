//това е на Иво решението от лекцията, аз не успях сам
function solve(arrayOfNumbers) {

    while (arrayOfNumbers.length > 1) {
        let condensedArray = [];

        for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
            let currentElement = arrayOfNumbers[i];
            let nextElement = arrayOfNumbers[i + 1];
            let sum = currentElement + nextElement;
            condensedArray.push(sum)
        }

        arrayOfNumbers = condensedArray;
    }
    console.log(arrayOfNumbers[0]);
}

solve([2, 10, 3]);
solve([5, 0, 4, 1, 2]);
solve([1]);


/*if (arrayOfNumbers.length === 1) {
    condensedArray.push(arrayOfNumbers[0]);
} else {}*/

/*
let condensedArray = [];
    let nextArray = [];

    if (arrayOfNumbers.length !== 1) {

        for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
            let currentElement = arrayOfNumbers[i];
            let nextElement = arrayOfNumbers[i + 1];
            let sum = currentElement + nextElement;
            condensedArray.push(sum)
        }

    } else {
        console.log(arrayOfNumbers);
    }

    if (condensedArray.length !== 1) {
        for (let g = 0; g < condensedArray.length - 1; g++) {
            let sum = condensedArray[g] + condensedArray[g + 1]
            nextArray.push(sum)
        }
        console.log(nextArray);
    } else {
        console.log(nextArray);
    }
    */













/*
let sum = 0;
    let final = 0;

    for (let i = 0; i + 1 < arrayOfNumbers.length; i++) {
        if (i !== arrayOfNumbers.length) {
            sum += arrayOfNumbers[i] + arrayOfNumbers[i + 1];
            final += sum;
        }
    }
console.log(arrayOfNumbers);
*/