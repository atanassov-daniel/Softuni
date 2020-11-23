function solve(input) {
    let begin = Number(input.shift());
    let end = Number(input.shift());
    let result = "";

    for (let i = begin; i <= end; i++) {
        for (let g = begin; g <= end; g++) {
            for (let k = begin; k <= end; k++) {
                for (let h = begin; h <= end; h++) {
                    if (i > h && (g + k) % 2 == 0 && ((i % 2 == 0 && h % 2 == 1) || (i % 2 == 1 && h % 2 == 0))) {
                        result += `${i}${g}${k}${h} `;
                    }
                }
            }
        }
    }
    console.log(result)
}


solve([
    //2,
    //3,
    3,
    5,
    5,
    8
])