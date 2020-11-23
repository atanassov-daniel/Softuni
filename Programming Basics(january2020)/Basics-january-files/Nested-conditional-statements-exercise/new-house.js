function solve(input) {
    let flower = input.shift();
    let quantity = Number(input.shift());
    let budget = Number(input.shift());

    let price = 0
    let result = 0; // after discount

    switch (flower) {
        case "Roses":
            price = quantity * 5
            if (quantity > 80) {
                result = 0.9 * price;
            } else {
                result = price
            }
            break;
        case "Dahlias":
            price = quantity * 3.80
            if (quantity > 90) {
                result = 0.85 * price
            } else {
                result = price
            }
            break;
        case "Tulips":
            price = quantity * 2.80
            if (quantity > 80) {
                result = 0.85 * price;
            } else {
                result = price
            }
            break;
        case "Narcissus":
            price = quantity * 3
            if (quantity < 120) {
                result = 1.15 * price;
            } else {
                result = price
            }
            break;
        case "Gladiolus":
            price = quantity * 2.50
            if (quantity < 80) {
                result = 1.20 * price;
            } else {
                result = price
            }
            break;
    }
    let money = Math.abs(budget - result)

    if (result <= budget) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${money.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${money.toFixed(2)} leva more.`)
    }
}

solve([
    "Roses",
    "55",
    "250",
    "Tulips",
    "88",
    "260",
    "Narcissus",
    "119",
    "360",
])