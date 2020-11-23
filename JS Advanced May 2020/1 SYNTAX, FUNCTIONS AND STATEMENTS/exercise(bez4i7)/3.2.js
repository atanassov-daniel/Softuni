function solve(number) {
    let stringNum = number.toString();

    let firstNumber = stringNum[0];
    let isSame = true;

    let sum = 0;

    for (let index = 0; index < stringNum.length; index++) {
        let currentNumber = stringNum[index];
        sum += Number(currentNumber);
        if (currentNumber !== firstNumber) {
            isSame = false;
        }
    }

    if (isSame === true) {
        console.log(true);
    } else if (isSame === false) {
        console.log(false);
    }

    console.log(sum);
}

solve(2222222);
solve(1234);