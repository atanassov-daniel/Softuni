function solve(input) {
    let months = Number(input.shift());
    let water = 20;
    let internet = 15;
    let others = 0;
    let electricityTotal = 0;
    let othersTotal = 0;
    let waterTotal = 0;
    let internetTotal = 0;
    let final = 0;
    let total=0;
    for (let i = 0; i < months; i++) {
        let electricity = Number(input.shift());
        electricityTotal += electricity;
        others = 1.2 * (water + internet + electricity);
        othersTotal += others;
        waterTotal += water;
        internetTotal += internet
        total = electricity + others + water + internet;
        final += total
    }
    console.log(`Electricity: ${electricityTotal.toFixed(2)} lv`);
    console.log(`Water: ${waterTotal.toFixed(2)} lv`);
    console.log(`Internet: ${internetTotal.toFixed(2)} lv`);
    console.log(`Other: ${othersTotal.toFixed(2)} lv`);
    console.log(`Average: ${(final / months).toFixed(2)} lv`);
}

solve([
    //"5",
    //"68.63",
    //"89.25",
    //"132.53",
    //"93.53",
    //"63.22",
    "8",
    "123.54",
    "231.54",
    "140.23",
    "100",
    "122.4",
    "430",
    "178.52",
    "64.2",
])