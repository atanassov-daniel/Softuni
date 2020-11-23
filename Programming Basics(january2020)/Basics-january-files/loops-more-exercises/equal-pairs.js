function solve(input) {
    let n = Number(input.shift());
    let sum = 0;
    let oldSum = 0;
    let difference = 0;
    let maxDiff = 0;
    let isSame = false;

    for (let i = 0; i < n; i++) {

        let num = Number(input.shift());
        let num2 = Number(input.shift());

        if (n != 2) {
            oldSum = sum;
            sum = num + num2;
        } else {
            if (i == 0) {
                sum = num + num2;
                oldSum = sum;
            } else {
                oldSum = sum;
                sum = num + num2;
            }
        }

        if (n == 1) {
            isSame = true;
            break;
        } else {
            difference = Math.abs(oldSum - sum);

            if (sum == oldSum) {
                isSame = true;
            } else {
                isSame = false;
            }

            if (difference > maxDiff) {
                maxDiff = difference;
            }
        }
    }

    if (isSame == true) {
        console.log(`Yes, value=${sum}`)
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

solve([
    //"3",
    //"1",
    //"2",
    //"0",
    //"3",
    //"4",
    //"-1",

    "2",
    "1",
    "2",
    "2",
    "2",

    //"4",
    //"1",
    //"1",
    //"3",
    //"1",
    //"2",
    //"2",
    //"0",
    //"0",
    //"2",
    //"-1",
    //"0",
    //"0",
    //"-1",
    //"2",
    //"-1",
    //"2",
    //"0",
    //"-1",

    //"1",
    //"5",
    //"5",

])

/*
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let i = 0;
    let im = 0;
    for (let i = 0; i < n * 2; i++) {
        let num = Number(input.shift());
        let num2 = Number(input.shift());
        sum1 = num + num2;
    }

    console.log(sum1)
    console.log(sum2)
    console.log(sum3)
*/