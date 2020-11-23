function solve(input) {
    for (let i = 0; i < 4; i++) {
        let celsius = Number(input.shift());
        let fahrenheit = celsius * 1.8 + 32;
        console.log(fahrenheit.toFixed(2))
    }
}

solve([
    "25",
    "0",
    "-5.5",
    "32.3"
])