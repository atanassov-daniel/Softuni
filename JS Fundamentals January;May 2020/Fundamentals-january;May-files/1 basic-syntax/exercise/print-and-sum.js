function printNumbers(start, end) {
    let sum = 0;
    let result = "";

    for (let i = start; i <= end; i++) {
        sum += i;
        if (i != end) {
            result += `${i} `;
        } else {
            result += `${i}`;
        }
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}

printNumbers(5, 10)