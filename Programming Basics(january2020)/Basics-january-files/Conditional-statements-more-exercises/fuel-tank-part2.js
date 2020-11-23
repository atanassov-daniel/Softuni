function solve(input) {
    let fuelType = input.shift();
    let litres = Number(input.shift());
    let clubCard = input.shift();
    let price = 0;
    switch (fuelType) {
        case "Gasoline":
            price = litres * 2.22;
            if (clubCard == "Yes") {
                price -= litres * 0.18;
            }
            break;
        case "Diesel":
            price = litres * 2.33;
            if (clubCard == "Yes") {
                price -= litres * 0.12;
            }
            break;
        case "Gas":
            price = litres * 0.93;
            if (clubCard == "Yes") {
                price -= litres * 0.08;
            }
            break;
    }
    if (litres > 20 && litres <= 25) {
        price *= 0.92
    } else if (litres > 25) {
        price *= 0.9
    }
    console.log(`${price.toFixed(2)} lv.`);
}

solve([
    //"Gas",
    //"30",
    //"Yes",
    //"Gasoline",
    //"25",
    //"No",
    "Diesel",
    "19",
    "No",
])