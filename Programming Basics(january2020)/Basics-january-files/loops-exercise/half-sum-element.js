function solve(input) {
    let n = Number(input.shift());
    let sum = 0
    let max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        sum += num

        if (num > max) {
            max = num;
        }
    }
    let finalSum = sum - max;
    if (finalSum === max) {
        console.log("Yes");
        console.log(`Sum = ${finalSum}`)
    } else{
        let result = Math.abs(finalSum - max);
        console.log("No");
        console.log(`Diff = ${result}`)
    }
}

solve([
    "7",
    "3",
    "4",
    "1",
    "1",
    "2",
    "12",
    "1",
    "4",
    "6",
    "1",
    "2",
    "3",
    "3",
    "1",
    "1",
    "10",
    "3",
    "5",
    "5",
    "1",
    "3",
    "1",
    "1",
    "1"
])