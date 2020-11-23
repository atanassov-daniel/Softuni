function solve(input) {
    let n = Number(input.shift());
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (num < min) {
            min = num;
        }
    }
    console.log(min)
}

solve([
    4,
    45,
    -20,
    7,
    99,
    
])