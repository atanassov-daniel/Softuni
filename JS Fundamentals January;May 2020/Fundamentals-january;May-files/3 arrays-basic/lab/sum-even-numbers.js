function solve(arrayOfStrings) {
    let sum = 0;

    for (let i = 0; i < arrayOfStrings.length; i++) {
        let currentNumber = Number(arrayOfStrings[i]);
        if (currentNumber % 2 === 0) {
            sum += currentNumber;
        }
    }

    console.log(sum);
}

solve(['1', '2', '3', '4', '5', '6']);
//solve(['3','5','7','9']);
//solve(['2','4','6','8','10']);

/*
function solve(arrayOfStrings) {
    let sum = 0;

    for (let index in arrayOfStrings) {
        let currentNumber = Number(arrayOfStrings[index]);
        if (currentNumber % 2 === 0) {
            sum += currentNumber;
        }
    }

    console.log(sum);
}
*/

/*
function solve(arrayOfStrings) {
    let sum = 0;

    for (let value of arrayOfStrings) {
        let currentNumber = Number(value);
        if (currentNumber % 2 === 0) {
            sum += currentNumber;
        }
    }

    console.log(sum);
}
*/