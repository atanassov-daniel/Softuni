function solve(input) {
    let budget = Number(input.shift());
    let category = input.shift();
    let people = Number(input.shift());
    let money = 0;
    let price = 0;

    if (people < 5) {
        money = 0.25 * budget;
    } else if (people < 10) {
        money = 0.4 * budget;
    } else if (people < 25) {
        money = 0.5 * budget;
    } else if (people < 50) {
        money = 0.6 * budget;
    } else {
        money = 0.75 * budget;
    }

    if (category == "VIP") {
        price = people * 499.99;
    } else if (category == "Normal") {
        price = people * 249.99;
    }

    let left = Math.abs(money - price);

    if (price < money) {
        console.log(`Yes! You have ${left.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${left.toFixed(2)} leva.`)
    }
}

solve([
    //"1000",
    //"Normal",
    //"1",
    "30000",
    "VIP",
    "49",
])