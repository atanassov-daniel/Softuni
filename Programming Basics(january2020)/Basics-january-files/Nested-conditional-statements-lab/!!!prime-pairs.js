function solve(input) {
    let firstBegin = Number(input.shift());
    let secondBegin = Number(input.shift());
    let firstEnd = firstBegin + Number(input.shift());
    let secondEnd = secondBegin + Number(input.shift());
    let count1 = 0;
    let count2 = 0;
    let isPrime = false;
    let isPrime2 = false;

    for (let i = firstBegin; i <= firstEnd; i++) {
        for (let g = secondBegin; g <= secondEnd; g++) {
            for (let divider = 1; divider <= i; divider++) {
                if (divider != 1 && divider != i) {
                    if (i % divider == 0) {
                        count1++;
                    }
                }

                if (count1 == 0) {
                    isPrime = true;
                } else {
                    isPrime = false;
                }
            }
            count1 = 0;

            for (let divider2 = 1; divider2 <= g; divider2++) {
                if (divider2 != 1 && divider2 != g) {
                    if (g % divider2 == 0) {
                        count2++;
                    }
                }

                if (count2 == 0) {
                    isPrime2 = true;
                } else {
                    isPrime2 = false
                }
            }
            count2 = 0;

            if (isPrime == true && isPrime2 == true) {
                console.log(`${i}${g}`);
            }
        }
    }
}

solve([
    //10,
    //20,
    //5,
    //5,
    10,
    30,
    9,
    6,
])