function solve(input) {
    let season = input.shift();
    let kmPerMonth = Number(input.shift());
    let total = kmPerMonth * 4;
    let price = 0;

    if (kmPerMonth <= 5000) {
        if (season == "Spring" || season == "Autumn") {
            price = total * 0.75;
        } else if (season == "Summer") {
            price = total * 0.9;
        } else {
            price = total * 1.05;
        }
    } else if (kmPerMonth <= 10000) {
        if (season == "Spring" || season == "Autumn") {
            price = total * 0.95;
        } else if (season == "Summer") {
            price = total * 1.10;
        } else {
            price = total * 1.25;
        }
    } else {
        price = total * 1.45;
    }
    price *= 0.9;
    console.log(price.toFixed(2));
}

solve([
    "Summer",
    "3455",
])