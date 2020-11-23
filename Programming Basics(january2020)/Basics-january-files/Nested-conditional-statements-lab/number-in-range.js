function solve(input) {
    let number = Number(input.shift());
    
    let isValid = number >= -100 && number <=100 && number != 0;
    if(isValid == true) {
        console.log("Yes");
    } else {
        console.log("No")
    }
}

solve([
    "-25",
    "0",
    "25"
])

/*
let number = Number(input.shift());
if(number >= -100 && number <=100 && number != 0) {
    console.log("Yes");
} else {
    console.log("No")
}
*/