function solve(input) {
    let n = Number(input.shift());
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        sum += num;
    }
    console.log((sum / n).toFixed(2));
}

solve([
    "4",
    "3",
    "2",
    "4",
    "2",

])