function solve(input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let operator = input.shift();

    result = 0
    evenOrOdd = 0

    switch (operator) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = n1 / n2;
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else{
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            }
// защо тук работи по същия начин ако е без ELSE-a, а при % не става, дори дебъгера не го показва
            break;
        case "%":
            result = n1 % n2;
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else{
                console.log(`${n1} % ${n2} = ${result}`);
            }
            break;
    }

    if (operator === "+" || operator === "-" || operator === "*") {
        if (result % 2 === 0) {
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
    }
}

solve([
    //"10",
    //"12",
    //"+",
    "10",
    "1",
    "-",
    //"7",
    //"3",
    //"*",
    //"123",
    //"12",
    //"/",
    //"10",
    //"3",
    //"%",
    //"112",
    //"0",
    //"/",
    "10",
    "0",
    "%",
])