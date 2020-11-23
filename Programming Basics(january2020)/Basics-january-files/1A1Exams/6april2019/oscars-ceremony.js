function solve(input) {
    let sum = Number(input.shift());
    let statuetki = 0.7 * sum;
    let ketering = 0.85 * statuetki;
    let sound = 0.5 * ketering;
    let result = sum + statuetki + ketering + sound;
    console.log(result.toFixed(2));
}

solve([
    3500,
    5555
])