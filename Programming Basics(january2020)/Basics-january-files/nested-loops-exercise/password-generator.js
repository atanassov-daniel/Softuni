function solve(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let result = "";

    for (let i = 1; i <= n; i++) {
        for (let g = 1; g <= n; g++) {
            for (let k = 97; k < (97 + l); k++) {
                for (let j = 97; j < (97 + l); j++) {
                    for (let h = 1; h <= n; h++) {
                        if (h > i && h > g) {
                            result += `${i}${g}${String.fromCharCode(k)}${String.fromCharCode(j)}${h} `;
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}

solve([
    "2",
    "4",
    "3",
    "1",
    //"3",
    //"2",
    //"4",
    //"2",
])