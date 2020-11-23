function solve(input) {
    let name = input.shift();
    let sum = 0;
    let i = 0;
    let badGrade = 0
    while (i < 12) {
        let grade = Number(input.shift());
        if (grade >= 4.00) {
            sum += grade
        } else {
            badGrade++
        }
        if (badGrade > 1) {
            console.log(`${name} has been excluded at ${i} grade`)
            break;
        }
        i++
    }
    let average = sum / i;
    if(badGrade<=1){
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
    }
}

solve([
    "Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5",
    //"Mimi",
    //"5",
    //"6",
    //"5",
    //"6",
    //"5",
    //"6",
    //"6",
    //"2",
    //"3",
])//