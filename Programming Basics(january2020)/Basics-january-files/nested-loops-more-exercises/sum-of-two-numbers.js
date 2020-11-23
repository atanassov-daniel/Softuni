function solve(input) {
    let begin = Number(input.shift());
    let end = Number(input.shift());
    let magicNum = Number(input.shift());
    let count = 0;
    let isFinish = false;

    for (let i = begin; i <= end; i++) {
        if (isFinish) {
            break;
        }
        for (let g = begin; g <= end; g++) {
            count++;
            if (i + g == magicNum) {
                isFinish = true;
                console.log(`Combination N:${count} (${i} + ${g} = ${magicNum})`);
                break;
            }
        }
    }
    if (isFinish == false) {
        console.log(`${count} combinations - neither equals ${magicNum}`);
    }
}

solve([
    1,
    10,
    5,
    23,
    24,
    20
])