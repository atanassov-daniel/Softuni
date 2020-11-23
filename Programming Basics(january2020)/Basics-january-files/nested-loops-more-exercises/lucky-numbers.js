function solve(input) {
    let n = Number(input.shift());
    let result = "";

    for (let i = 1; i <= 9; i++) {
        for (let g = 1; g <= 9; g++) {
            for (let k = 1; k <= 9; k++) {
                for (let h = 1; h <= 9; h++) {
                    if ((i + g) == (k + h)) {
                        if (n % (i + g) == 0) {
                            result += `${i}${g}${k}${h} `
                        }
                    }
                }
            }
        }
    }
    console.log(result)
}

solve([
    //3,
    7,
    24
])