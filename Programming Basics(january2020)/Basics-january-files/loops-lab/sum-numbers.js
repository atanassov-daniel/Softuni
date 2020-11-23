function solve(input) {
    let n = Number(input.shift())
    let result = 0
    for (let i = 0; i < n; i++) {
        let a = Number(input.shift())
        result += a
    }
    console.log(result);
}

solve([
    "2",
    "10",
    "20",
    "3",
    "-10",
    "-20",
    "-30",
    "4",
    "45",
    "-20",
    "7",
    "11",
    "1",
    "999",
    "0"
])