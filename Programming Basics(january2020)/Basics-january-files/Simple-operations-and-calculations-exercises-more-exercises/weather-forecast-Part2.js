function solve(input) {
    for (let i = 0; i < 5; i++) {
        let degrees = Number(input.shift());
        let result = 0

        if (degrees < 5) {
            result = "unknown"
        } else if (degrees < 12) {
            result = "Cold"
        } else if (degrees < 15) {
            result = "Cool"
        } else if (degrees < 20.1) {
            result = "Mild"
        } else if (degrees < 26) {
            result = "Warm"
        } else if (degrees <= 35.00) {
            result = "Hot"
        } else if (degrees > 35) {
            result = "unknown"
        }
        console.log(result)
    }
}

solve([
    "16.5",
    "8",
    "22.4",
    "26",
    "0",
])