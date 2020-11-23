function solve(input) {
    let days = Number(input.shift());
    let roomType = input.shift();
    let review = input.shift();

    let nights = days - 1;

    let firstPrice = 0
    let discount = 0

    if (roomType === "room for one person") {
        firstPrice = nights * 18.00
    } else if (roomType === "apartment") {
        firstPrice = nights * 25.00
    } else if (roomType === "president apartment") {
        firstPrice = nights * 35.00
    }


    if (days < 10) {
        switch (roomType) {
            case "room for one person":
                discount = 0; break;
            case "apartment":
                discount = 0.3 * firstPrice; break;
            case "president apartment":
                discount = 0.1 * firstPrice; break;
        }
    } else if (days <= 15) {
        switch (roomType) {
            case "room for one person":
                discount = 0; break;
            case "apartment":
                discount = 0.35 * firstPrice; break;
            case "president apartment":
                discount = 0.15 * firstPrice; break;
        }
    } else if (days > 15) {
        switch (roomType) {
            case "room for one person":
                discount = 0; break;
            case "apartment":
                discount = 0.50 * firstPrice; break;
            case "president apartment":
                discount = 0.20 * firstPrice; break;
        }
    }
    let price = firstPrice - discount

    let finalPrice = 0

    switch (review) {
        case "positive":
            finalPrice = price + 0.25 * price;
            break;
        case "negative":
            finalPrice = price - 0.10 * price;
            break;
    }
    console.log(finalPrice.toFixed(2))
}

solve([
    "14",
    "apartment",
    "positive",
    "30",
    "president apartment",
    "negative"
])