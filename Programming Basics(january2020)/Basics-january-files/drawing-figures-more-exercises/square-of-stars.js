function solve(input) {
    let n = Number(input.shift());
    let result = "";
    for (let i = 0; i < n; i++) {
        for (let i = 0; i < n; i++) {
            result += "* ";
        }
        console.log(result)
        result = "";
    }
}

solve([
    "2",
    "3",
    "4"
])