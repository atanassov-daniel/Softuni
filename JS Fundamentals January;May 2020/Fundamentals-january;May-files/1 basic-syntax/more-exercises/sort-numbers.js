function sortNumbersDescending(num1, num2, num3) {
    if (Math.max(num1, num2, num3) === num1) {
        console.log(num1);
        if (Math.max(num2, num3) === num2) {
            console.log(num2);
            console.log(num3);
        } else {
            console.log(num3);
            console.log(num2);
        }
    } else if (Math.max(num1, num2, num3) === num2) {
        console.log(num2);
        if (Math.max(num1, num3) === num1) {
            console.log(num1);
            console.log(num3);
        } else {
            console.log(num3);
            console.log(num1);
        }
    } else if (Math.max(num1, num2, num3) === num3) {
        console.log(num3);
        if (Math.max(num1, num2) === num1) {
            console.log(num1);
            console.log(num2);
        } else {
            console.log(num2);
            console.log(num1);
        }
    }
}

sortNumbersDescending(2, 1, 3)