function solve(input) {
    let m = Number(input.shift());
    let result = "";
    let count = 0;
    let pass = 0;

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if ((a * b + c * d == m) && a < b && c > d) {
                        result += `${a}${b}${c}${d} `;
                        count++;
                        if (count == 4) {
                            pass = `${a}${b}${c}${d}`;
                        }
                    }
                }
            }
        }
    }
    if(result!=""){
        console.log(result);
    }
    if (pass != 0) {
        console.log(`Password: ${pass}`);
    } else {
        console.log("No!");
    }
}

solve([
    //11,
    139,
    //110,
    55
])