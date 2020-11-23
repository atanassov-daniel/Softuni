function solve(input) {
    let n = Number(input.shift());
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (num % 2 === 0) {
            count1++;
        }
        if (num % 3 === 0) {
            count2++;
        }
        if (num % 4 === 0) {
            count3++;
        }
    }
    console.log(`${(count1 / n * 100).toFixed(2)}%`);
    console.log(`${(count2 / n * 100).toFixed(2)}%`);
    console.log(`${(count3 / n * 100).toFixed(2)}%`);
}

solve([
    //"10",
    //"680",
    //"2",
    //"600",
    //"200",
    //"800",
    //"799",
    //"199",
    //"46",
    //"128",
    //"65",

    "3",
    "3",
    "6",
    "9",
])