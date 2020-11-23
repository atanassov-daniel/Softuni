function wrong(numOne, numTwo, numThree) {
    let negativesCount = 0;
    if (numOne < 0) {
        negativesCount++;
    }
    if (numTwo < 0) {
        negativesCount++;
    }
    if (numThree < 0) {
        negativesCount++;
    }
    if (numOne === 0 || numTwo === 0 || numThree === 0) {
        return 'Positive';
    } else {
        if (negativesCount === 1 || negativesCount === 3) {
            return 'Negative';
        } else {
            return 'Positive';
        }
    }
}

console.log(wrong(5, 12, -15));
console.log(wrong(- 6, -12, 14));
console.log(wrong(- 1, -2, -3));
console.log(wrong(- 1, 0, 1));