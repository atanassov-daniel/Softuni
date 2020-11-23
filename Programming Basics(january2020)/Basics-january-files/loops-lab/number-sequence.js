function solve(input) {
    let n = Number(input.shift());
    let min = Number.MAX_SAFE_INTEGER
    let max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < n; i++) {
        let a = Number(input.shift());
        if (a < min){
            min = a
        }
        if (a > max){
            max = a
        }
    }
    console.log(`Max number: ${max}`)
    console.log(`Min number: ${min}`)
}

solve([
    "5",
    "10",
    "20",
    "304",
    "0",
    "50",
    
    "6",
    "250",
    "5",
    "2",
    "0",
    "100",
    "1000",
    
])