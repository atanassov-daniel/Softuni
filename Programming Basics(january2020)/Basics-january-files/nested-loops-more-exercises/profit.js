function solve(input) {
    let oneLeva = Number(input.shift());
    let twoLeva = Number(input.shift());
    let fiveLeva = Number(input.shift());
    let sum = Number(input.shift());

    for (let i = 0; i <= oneLeva; i++) {
        for (let g = 0; g <= twoLeva; g++) {
            for (let k = 0; k <= fiveLeva; k++) {
                if (i * 1 + g * 2 + k * 5 == sum) {
                    console.log(`${i} * 1 lv. + ${g} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

solve([
    //3,
    //2,
    //3,
    //10,
    5,
    3,
    1,
    7
])