function solve(num) {
    if (num < 0) {
        console.log("It's not so perfect.");
    } else {
        let divisors = [];
        for (let i = 0; i < num; i++) {

            if (num % i === 0) {
                divisors.push(i);
            }
        }

        let sumOfDivisors = 0;
        for (let g = 0; g < divisors.length; g++) {
            sumOfDivisors += divisors[g];
        }

        if (sumOfDivisors === num) {
            console.log("We have a perfect number!");
        } else {
            console.log("It's not so perfect.");
        }
    }
}

solve(6);
solve(28);
solve(1236498);