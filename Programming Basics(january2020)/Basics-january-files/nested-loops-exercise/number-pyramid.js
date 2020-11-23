function solve(input) {
    let n = Number(input.shift());
    for (let i = 1; i <= n; i++) {
        for (let onRow = 1; onRow <= i; onRow++)
            console.log(i)
    }
}

solve([
    "7"
])