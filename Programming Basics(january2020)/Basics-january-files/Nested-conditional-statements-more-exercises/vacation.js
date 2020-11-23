function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let type = "";
    let location = "";
    let price = 0;

    if (budget <= 1000) {
        type = "Camp";
        if (season == "Summer") {
            location = "Alaska";
            price = 0.65 * budget;
        } else {
            location = "Morocco";
            price = 0.45 * budget;
        }
    } else if (budget <= 3000) {
        type = "Hut";
        if (season == "Summer") {
            location = "Alaska";
            price = 0.8 * budget;
        } else {
            location = "Morocco";
            price = 0.6 * budget;
        }
    } else {
        type = "Hotel";
        if (season == "Summer") {
            location = "Alaska";
        } else {
            location = "Morocco";
        }
        price = 0.9 * budget;
    }
    console.log(`${location} - ${type} - ${price.toFixed(2)}`)
}

solve([
    "800",
    "Summer",
    "799.50",
    "Winter",
    "3460",
    "Summer",
])