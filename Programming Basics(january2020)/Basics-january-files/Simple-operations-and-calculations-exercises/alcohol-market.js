function solve(input){
    let whiskeyPrice = Number(input.shift());
    let beerLitres = Number(input.shift());
    let wineLitres = Number(input.shift());
    let rakiaLitres = Number(input.shift());
    let whiskeyLitres = Number(input.shift());

    let rakiaPrice = whiskeyPrice / 2;
    let winePrice = rakiaPrice - 0.4 * rakiaPrice;
    let beerPrice = rakiaPrice - 0.8 * rakiaPrice;

    let beerSum = beerLitres * beerPrice;
    let wineSum = wineLitres * winePrice;
    let rakiaSum = rakiaLitres * rakiaPrice;
    let whiskeySum = whiskeyLitres * whiskeyPrice;

    let total = beerSum + wineSum + rakiaSum + whiskeySum;

    let result = total.toFixed(2);

    console.log(result);
}

solve([
    "50",
    "10",
    "3.5",
    "6.5",
    "1",
    "63.44",
    "3.57",
    "6.35",
    "8.15",
    "2.5"
])