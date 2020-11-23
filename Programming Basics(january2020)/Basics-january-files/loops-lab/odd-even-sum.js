function solve(input) {
    let n = Number(input.shift());
    let sum = 0;
    let sum2 = 0;

    let sum3 = 0
    let sum4 = 0

    if (n % 2 === 0) {
        for (let i = 0; i < n; i += 2) {
            let a = Number(input.shift());
            let b = Number(input.shift());
            sum += a;
            sum2 += b
        }
        if (sum === sum2) {
            console.log("Yes")
            console.log(`Sum = ${sum}`)
        } else {
            let result = Math.abs(sum - sum2)
            console.log("No")
            console.log(`Diff = ${result}`)
        }
    } else {
        for (let im = 1; im <= n; im += 2) {
            if (im === n) {
                c = Number(input.shift());
                sum3 += c;
            } else {
                let c = Number(input.shift());
                let d = Number(input.shift());
                sum3 += c;
                sum4 += d;
            }
        }
        if (sum3 === sum4) {
            console.log("Yes")
            console.log(`Sum = ${sum3}`)
        } else {
            let res = Math.abs(sum3 - sum4)
            console.log("No")
            console.log(`Diff = ${res}`)
        }
    }
}

solve([
    //"4",
    //"10",
    //"50",
    //"60",
    //"20",
    //"4",
    //"3",
    //"5",
    //"1",
    //"-2",
    "3",
    "5",
    "8",
    "1",
])