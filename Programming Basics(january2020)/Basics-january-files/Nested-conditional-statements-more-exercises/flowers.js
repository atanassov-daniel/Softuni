function solve(input) {
    let hrizantemi = Number(input.shift());
    let roses = Number(input.shift());
    let laleta = Number(input.shift());
    let season = input.shift();
    let holiday = input.shift();
    let price = 0;

    if (season == "Spring" || season == "Summer") {
        price = hrizantemi * 2 + roses * 4.10 + laleta * 2.50;
    } else if (season == "Autumn" || season == "Winter") {
        price = hrizantemi * 3.75 + roses * 4.50 + laleta * 4.15;
    }

    if (holiday == "Y") {
        price *= 1.15;
    }

    if (laleta > 7 && season == "Spring") {
        price *= 0.95
    }
    if (roses >= 10 && season == "Winter") {
        price *= 0.9
    }
    if (hrizantemi + roses + laleta > 20) {
        price *= 0.8
    }
    price += 2;
    console.log(price.toFixed(2));
}

solve([
    //"2",
    //"4",
    //"8",
    //"Spring",
    //"Y",
    //"3",
    //"10",
    //"9",
    //"Winter",
    //"N",
    "10",
    "10",
    "10",
    "Autumn",
    "N",
])