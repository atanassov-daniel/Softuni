function solve(input) {
    let floorsNumber = Number(input.shift());
    apartmentsFloor = Number(input.shift());
    let apartmentsTotal = floorsNumber * apartmentsFloor;
    let result = '';
    for (let i = floorsNumber; i > 0; i--) {
        for (let d = 0; d < apartmentsFloor; d++) {
            if (i == floorsNumber) {
                result += `L${i}${d} `
                //console.log(`L${i}${d}`)
            } else if (i % 2 == 0) {
                result += `O${i}${d} `
                //console.log(`O${i}${d}`)
            } else {
                result += `A${i}${d} `
                //console.log(`A${i}${d}`)
            }
        }
        console.log(result)
        result = '';
    }
}

solve([
    "6",
    "4",
    "9",
    "5",
    "4",
    "4"
])