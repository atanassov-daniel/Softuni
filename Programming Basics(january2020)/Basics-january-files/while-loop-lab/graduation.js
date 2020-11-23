function solve(input) {
    let name = input.shift();
    let sum = 0;
    let i = 0;
    while (i < 12) {
        let grade = Number(input.shift());
        if (grade >= 4.00) {
            sum += grade
            i++
        }
    }
    let average = sum / i;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
}

solve([
    //"Pesho",
    //"4",
    //"5.5",
    //"6",
    //"5.43",
    //"4.5",
    //"6",
    //"5.55",
    //"5",
    //"6",
    //"6",
    //"5.43",
    //"5",
    'Ani',
    '5',
    '5.32',
    '6',
    '5.43',
    '5',
    '6',
    '5.5',
    '4.55',
    '5',
    '6',
    '5.56',
    '6',
])