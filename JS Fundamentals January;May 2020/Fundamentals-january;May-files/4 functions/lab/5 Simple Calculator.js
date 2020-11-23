function calculateResult(numOne, numTwo, operator) {
    let multiply = (numOne, numTwo) => numOne * numTwo;
    let divide = (numOne, numTwo) => numOne / numTwo;
    let add = (numOne, numTwo) => numOne + numTwo;
    let subtract = (numOne, numTwo) => numOne - numTwo;

    if (operator === 'multiply') {
        return multiply(numOne, numTwo);
    } else if (operator === 'divide') {
        return divide(numOne, numTwo);
    } else if (operator === 'add') {
        return add(numOne, numTwo);
    } else if (operator === 'subtract') {
        return subtract(numOne, numTwo);
    }
}

console.log(calculateResult(5, 5, 'multiply'));
console.log(calculateResult(40, 8, 'divide'));
console.log(calculateResult(12, 19, 'add'));
console.log(calculateResult(50, 13, 'subtract'));

// долу съм променил само умножението и не мисля, че стан по-лесно, дори е по-зле от първото
//function calculateResult(numOne, numTwo, operator) {

//     if (operator === 'multiply') {
//         return ((numOne, numTwo) => numOne * numTwo)(numOne, numTwo);
//     }

//     let divide = (numOne, numTwo) => numOne / numTwo;
//     let add = (numOne, numTwo) => numOne + numTwo;
//     let subtract = (numOne, numTwo) => numOne - numTwo;

//     if (operator === 'divide') {
//         return divide(numOne, numTwo);
//     } else if (operator === 'add') {
//         return add(numOne, numTwo);
//     } else if (operator === 'subtract') {
//         return subtract(numOne, numTwo);
//     }
// }

// console.log(calculateResult(5, 5, 'multiply'));