function solve(input) {
    let n = Number(input.shift());
    let sum = 0;
    let possibleCount = 0
    for (let x1 = 0; x1 <= n; x1++) {
        for (let x2 = 0; x2 <= n; x2++) {
            for (let x3 = 0; x3 <= n; x3++) {
                sum = x1 + x2 + x3;
                if (sum == n) {
                    possibleCount++;
                    //break;
                }
            }
        }
    }
    console.log(possibleCount)
}

solve([
    //"25",
    //"20",
    "5"
])