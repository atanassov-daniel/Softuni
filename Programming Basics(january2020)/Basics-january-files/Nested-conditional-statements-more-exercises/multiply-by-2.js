function solve(input) {
    let i = Number(input.shift());
    while (i >= 0) {
        console.log(`Result: ${(i * 2).toFixed(2)}`);
        i = Number(input.shift());
        if (i < 0) {
            console.log("Negative number!");
        }
    }
}

solve([
    "12",
    "43.2144",
    "12.3",
    "543.23",
    "-20",

])