function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            console.log((num1 + num2).toFixed(2));
            break;
        case "-":
            console.log((num1 - num2).toFixed(2));
            break;
        case "*":
            console.log((num1 * num2).toFixed(2));
            break;
        case "/":
            console.log((num1 / num2).toFixed(2));
            break;
    }
}

calculate(
    5,
    '+',
    10
);