function checkIfPrimeNumber(num) {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (i !== 1 && i !== num) {
            if (num % i === 0) {
                count++;
            }
        }
    }

    if (count > 0) {
        return false;
    } else {
        return true;
    }
}

checkIfPrimeNumber(8)