function solve(func) {
    return function (value) {
        const separator = ",";
        const symbol = "$";
        const symbolFirst = true;

        func(separator, symbol, symbolFirst, value);
    };
}






/* function solve(func) {
    const separator = ",";
    const symbol = "$";
    const symbolFirst = true;

    let output = func();
    return output;
    return function (value) {
        console.log(value);
        return value;
    };
}

solve(currencyFormatter);

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

//currencyFormatter(separator, symbol, symbolFirst, 1); */