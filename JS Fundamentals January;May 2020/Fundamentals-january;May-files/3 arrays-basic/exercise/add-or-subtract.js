function solve(numbersArray) {

    let newArray = [];
    let sumOldArray = 0;
    let sumNewArray = 0;

    for (let i = 0; i < numbersArray.length; i++) {

        let currentNumber = numbersArray[i];
        sumOldArray += currentNumber;

        if (currentNumber % 2 === 0) {
            newArray.push(currentNumber + i);
        } else {
            newArray.push(currentNumber - i);
        }

        sumNewArray += newArray[i];
    }

    console.log(newArray);
    console.log(sumOldArray);
    console.log(sumNewArray);
}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);
