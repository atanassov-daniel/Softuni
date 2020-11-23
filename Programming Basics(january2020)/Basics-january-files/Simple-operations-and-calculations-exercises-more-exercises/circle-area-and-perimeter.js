function solve(input) {
    for (let i = 0; i < 2; i++) {
        let r = Number(input.shift());
        let area = Math.PI * Math.pow(r, 2);
        let perimeter = 2 * Math.PI * r;
        console.log(area.toFixed(2))
        console.log(perimeter.toFixed(2))
    }
}

solve([
    "3",
    "4.5"
])