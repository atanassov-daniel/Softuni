function solve(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let evenSum = 0;
    let oddSum = 0;
    let result = "";    //важно

    for (let i = num1; i <= num2; i++) {
        i = String(i);  //важно
        for (let d = 0; d < 6; d++) {
            if (d % 2 == 0) {
                oddSum += Number(i[d]);
            } else if (d % 2 == 1) {
                evenSum += Number(i[d]);
            }
        }
        i = Number(i);  //важно
        if (oddSum == evenSum) {
            result += `${i} `   //важно
        }
        oddSum = 0;     //важно
        evenSum = 0;    //важно
    }
    console.log(result)
}

solve([
    "100000",
    "100050",
    //"123456",
    //"124000",
    //"299900",
    //"300000",
    //"100115",
    //"100120",
])