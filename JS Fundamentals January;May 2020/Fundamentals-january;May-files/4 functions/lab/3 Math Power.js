// function raiseNumToAPower(baseNumber, exponent) {
//     return Math.pow(baseNumber, exponent);
// }

// let result = raiseNumToAPower(3, 4);
// console.log(result);

function raiseNumToAPower(baseNumber, exponent) {
    let product = 1;

    for (let i = 0; i < exponent; i++) {
        product *= baseNumber;
    }
    console.log(product);

    return product;
}

raiseNumToAPower(3, 4);
//let result = raiseNumToAPower(3, 4);
//console.log(result);