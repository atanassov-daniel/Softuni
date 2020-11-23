function solve(input) {
    let intervalBegin = Number(input.shift());
    let intervalEnd = Number(input.shift());
    let magicalNumber = Number(input.shift());
    let count = 0;
    let sum = 0;
    let isMagical = false;
    let interval = intervalEnd - intervalBegin;
    let i = 0;
    let x = 0;

    for (i = intervalBegin; i <= intervalEnd; i++) {
        if (isMagical === true) {
            break;
        }
        for (x = intervalBegin; x <= intervalEnd; x++) {
            sum = i + x;
            count++;
            if (sum === magicalNumber) {
                isMagical = true;
                break;
            } else {
                isMagical = false;
            }
        }
    }
    if (isMagical === true) {
        console.log(`Combination N:${count} (${i-1} + ${x} = ${magicalNumber})`);
    } else {
        console.log(`${count} combinations - neither equals ${magicalNumber}`)
    }
}

solve([
    //"1",
    //"10",
    //"5",
    //"23",
    //"24",
    //"20",
    //"88",
    //"888",
    //"1000",
    "88",
    "888",
    "2000",
])