function printOddNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n * 2; i++) {
        if (i % 2 === 1) {
            console.log(i);
            sum += i;
        }
    }
    console.log(`Sum: ${sum}`);
}

printOddNumbers(3)