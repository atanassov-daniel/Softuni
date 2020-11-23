function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let fishers = Number(input.shift());

    let price = 0;
    let result = 0; //price after discount

    switch (season) {
        case "Spring":
            price = 3000;
            if (fishers <= 6) {
                result = 0.9 * price;
            } else if (fishers <= 11) {
                result = 0.85 * price;
            } else if (fishers > 12) {
                result = 0.75 * price;
            }
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            if (fishers <= 6) {
                result = 0.9 * price;
            } else if (fishers <= 11) {
                result = 0.85 * price;
            } else if (fishers > 12) {
                result = 0.75 * price;
            }
            break;
        case "Winter":
            price = 2600;
            if (fishers <= 6) {
                result = 0.9 * price;
            } else if (fishers <= 11) {
                result = 0.85 * price;
            } else if (fishers > 12) {
                result = 0.75 * price;
            }
            break;
    }

    if (fishers % 2 === 0 && (season === "Spring" || season === "Summer" || season === "Winter")) {
        result = 0.95 * result;
    }

    let money = Math.abs(budget - result);

    if (result <= budget) {
        console.log(`Yes! You have ${money.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${money.toFixed(2)} leva.`)
    }
}

solve([
    "3000",
    "Summer",
    "11",
    "3600",
    "Autumn",
    "6",
    "2000",
    "Winter",
    "13",
])