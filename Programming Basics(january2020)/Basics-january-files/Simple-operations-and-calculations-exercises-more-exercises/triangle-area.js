function solve(input) {
    for (let i = 0; i < 4; i++) {
        let a = Number(input.shift());
        let h = Number(input.shift());

        let area = (a * h / 2).toFixed(2)
        console.log(area)
    }
}

solve([
    "20",
    "30",
    "15",
    "35",
    "7.75",
    "8.45",
    "1.23456",
    "4.56789",
])