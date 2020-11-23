function solve(input) {
    let number = parseInt(input.shift());
    let isValid = (number >= 100 && number <= 200) || number == 0;

    if (isValid === false) {
        console.log("invalid")
    }
}

solve([
    "75",
    "-1",
    "150",
    "100",
    "220",
    "200",
    "199",
    "0"
])