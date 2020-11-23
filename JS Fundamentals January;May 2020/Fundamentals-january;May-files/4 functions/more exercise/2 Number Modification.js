function modifyNumber(num) {
    num = String(num);
    let sumOfAllDigits = 0;

    for (let i = 0; i < num.length; i++) {
        sumOfAllDigits += Number(num[i]);
    }
    let averageOfAllDigits = sumOfAllDigits / num.length;

    while (averageOfAllDigits <= 5) {
        num += '9';

        sumOfAllDigits = 0;
        averageOfAllDigits = 0;

        for (let i = 0; i < num.length; i++) {
            sumOfAllDigits += Number(num[i]);
        }
        averageOfAllDigits = sumOfAllDigits / num.length;
    }

    console.log(num);
}

modifyNumber(101);
modifyNumber(5835);