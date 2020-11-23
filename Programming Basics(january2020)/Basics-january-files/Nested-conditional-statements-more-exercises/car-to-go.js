function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let clas = "";
    let car = "";
    let price = 0;

    if (budget <= 100) {
        clas = "Economy class";
        if (season == "Summer") {
            car = "Cabrio";
            price = 0.35 * budget;
        } else {
            car = "Jeep";
            price = 0.65 * budget;
        }
    } else if (budget <= 500) {
        clas = "Compact class";
        if (season == "Summer") {
            car = "Cabrio";
            price = 0.45 * budget;
        } else {
            car = "Jeep";
            price = 0.8 * budget;
        }
    } else {
        clas = "Luxury class";
        car = "Jeep";
        price = 0.9 * budget;
    }
    console.log(clas);
    console.log(`${car} - ${price.toFixed(2)}`);
}

solve([
    "450",
    "Summer",
    "450",
    "Winter",
    "1010",
    "Summer",
    "99.99",
    "Summer",
    "1010",
    "Winter",
    "70.50",
    "Winter",           
])