function solve(input){
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());

    if(num1 > num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
}

solve([
    "5",
    "3",
    "3",
    "5",
    "10",
    "10",
    "-5",
    "5"
])