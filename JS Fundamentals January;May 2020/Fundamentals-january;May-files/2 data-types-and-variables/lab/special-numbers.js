function printSpecialNumbers(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        i = String(i);
        for (let index = 0; index < i.length; index++) {
            sum += Number(i[index]);
        }

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        i = Number(i);
        sum = 0;
    }
}

printSpecialNumbers(15)