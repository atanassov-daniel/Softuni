function solve(input) {
    let men = Number(input.shift());
    let women = Number(input.shift());
    let tables = Number(input.shift());
    let isFinish = false;
    let result = "";

    for (let i = 1; i <= men; i++) {
        if (isFinish) {
            break;
        }

        for (let g = 1; g <= women; g++) {
            if (tables <= 0) {
                isFinish = true;
                break;
            }
            result += `(${i} <-> ${g}) `;
            tables--;
        }
    }
    console.log(result);
}

solve([
    //2,
    //2,
    //6,
    2,
    2,
    3,
    5,
    8,
    40
])