function solve(input) {
    let money = Number(input.shift());
    let year = Number(input.shift());
    let age = 17
    let total = 0
    for (let i = 1800; i <= year; i++) {
        age++;
        if (i % 2 === 0) {
            total += 12000
        } else if (i % 2 === 1) {
            total += 12000 + 50 * age
        }
    }
    let result = Math.abs((money - total)).toFixed(2)
    if (total > money) {
        console.log(`He will need ${result} dollars to survive.`)
    } else {
        console.log(`Yes! He will live a carefree life and will have ${result} dollars left.`);
    }
}

solve([
    // /"50000",
    // /"1802",
    "100000.15",
    "1808",
])