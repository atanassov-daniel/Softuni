function solve(input) {
    let n = Number(input.shift());
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < n; i++) {
        let number = Number(input.shift());
        leftSum += number;
    }
    for(let im = 0; im < n; im++){
        let number = Number(input.shift());
        rightSum += number
    }
    if(leftSum === rightSum){
        console.log(`Yes, sum = ${leftSum}`)
    }else {
        let result = Math.abs(leftSum - rightSum)
        console.log(`No, diff = ${result}`)
    }
}

solve([
    //"2",
    //"10",
    //"90",
    //"60",
    //"40",

    "2",
    "90",
    "9",
    "50",
    "50",
])