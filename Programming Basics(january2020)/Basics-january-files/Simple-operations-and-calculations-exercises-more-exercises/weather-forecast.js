function solve(input) {
    for (let i = 0; i < 3; i++) {
        let weather = input.shift();
        if (weather === "sunny") {
            console.log("It's warm outside!")
        } else {
            console.log("It's cold outside!")
        }
    }
}

solve([
    "sunny",
    "cloudy",
    "snowy",
])