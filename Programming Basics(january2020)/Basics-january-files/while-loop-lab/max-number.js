function solve(input) {
    let n = Number(input.shift());
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (num > max) {
            max = num;
        }
    }
    console.log(max)
}

solve([
    2,
    -1,
    -2,
])