function solve(input) {
    let first = Number(input.shift());
    let second = Number(input.shift());
    let third = Number(input.shift());
    let result = 0;

    for (let i = 1; i <= first; i++) {
        for (let g = 1; g <= second; g++) {
            for (let k = 1; k <= third; k++) {
                result = `${i} ${g} ${k}`;
                if (i % 2 == 0 && k % 2 == 0 && (g == 2 || g == 3 || g == 5 || g == 7)) {
                    console.log(result)
                }
            }
        }
    }
}

solve([
    3,
    5,
    5,

])