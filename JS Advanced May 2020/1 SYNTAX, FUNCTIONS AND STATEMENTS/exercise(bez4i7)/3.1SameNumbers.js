function solve(number) {
    let stringNum = number.toString();
    let splitted = stringNum.split('');
    let unique = Array.from(new Set(splitted));
    if (unique.length === 1) {
        console.log(true);
    } else {
        console.log(false);
    }

    let sum = 0;
    splitted.forEach(num => sum += Number(num));
    console.log(sum);

    /*let firstNumber = stringNum[0];
    for (let index = 0; index < array.length; index++) {
        let currentNumber = array[index];
        if (currentNumber !== firstNumber) {
            let isSame = false;
            break;
        }

    }*/
}

solve(2222222);
solve(1234);