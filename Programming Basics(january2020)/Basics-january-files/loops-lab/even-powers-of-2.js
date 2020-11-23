function solve(input) {
    let n = Number(input.shift());
    for (let i = 0; i <= n; i = i + 2) {
        console.log(Math.pow(2, i));
    }
}

solve([
    "3",
    "4",
    "5",
    "6",
    "7"
])