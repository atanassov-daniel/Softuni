function addAndSubtract3Numbers(a, b, c) {
    function sum(a, b) {
        return a + b;
    }

    let result = sum(a, b);

    function subtract(result, c) {
        return result - c;
    }
    return subtract(result, c);
}

console.log(addAndSubtract3Numbers(42,58,100));