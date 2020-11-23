function solve(input) {
    let n = Number(input.shift());
    let condition = 0;
    let result = "";
    for (let i = 1111; i < 9999; i++) {
        i = String(i);
        for (let d = 0; d < 4; d++) {
            if (n % i[d] == 0) {
                condition++;
            }
        }
        if (condition == 4) {
            result += `${i} `
        }
        condition = 0;    //много важно

        i = Number(i);
    }
    console.log(result);
}

solve([
    //"3",
    //"11",
    "16",
])