function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();

    let destination = 0
    let type = 0
    let price = 0

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            type = "Camp";
            price = 0.3 * budget
        } else if (season === "winter") {
            type = "Hotel";
            price = 0.7 * budget;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            type = "Camp";
            price = 0.4 * budget
        } else if (season === "winter") {
            type = "Hotel";
            price = 0.8 * budget;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        type = "Hotel";
        price = 0.9 * budget;
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${type} - ${price.toFixed(2)}`)
}

solve([
    "50",
    "summer",
    "75",
    "winter",
    "312",
    "summer",
    "678.53",
    "winter",
    "1500",
    "summer",
])