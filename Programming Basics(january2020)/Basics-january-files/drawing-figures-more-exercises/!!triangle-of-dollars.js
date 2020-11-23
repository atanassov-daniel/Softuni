function solve(input) {
    let n = Number(input.shift());
    let result = "";
    for (let i = 1; i <= n; i++) {
        for (let d = 1; d <= i; d++) {
            result += "$ ";
        }
        console.log(result)
        result = "";
    }
}

solve([
    //"2",
    "3",
    "4"
])