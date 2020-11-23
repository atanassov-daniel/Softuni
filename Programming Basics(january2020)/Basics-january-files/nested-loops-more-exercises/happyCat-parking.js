function solve(input) {
    let days = Number(input.shift());
    let hoursDay = Number(input.shift());
    let sum = 0;
    let total = 0;

    for (let i = 1; i <= days; i++) {
        for (let g = 1; g <= hoursDay; g++) {
            if (i % 2 == 0 && g % 2 == 1) {
                sum += 2.50;
            } else if (i % 2 == 1 && g % 2 == 0) {
                sum += 1.25;
            } else {
                sum += 1;
            }
        }
        console.log(`Day: ${i} - ${sum.toFixed(2)} leva`);
        total += sum;
        sum = 0;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}

solve([
    2,
    5,
    5,
    2
])