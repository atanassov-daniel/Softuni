function solve(input){
    let grade = Number(input.shift());
    if(grade >= 5.50){
        console.log("Excellent!");
    }
}

solve([
    "6",
    "5",
    "5.50",
    "5.49"
])