function solve(input) {
    let luggagesCount = Number(input.shift());
    let busPrice = 0;
    let truckPrice = 0;
    let trainPrice = 0;
    let busTonnes = 0;
    let truckTonnes = 0;
    let trainTonnes = 0;
    let tonnesTotal = 0;
    let totalPrice = 0;
    for (let i = 0; i < luggagesCount; i++) {
        let luggageTonnes = Number(input.shift());
        tonnesTotal += luggageTonnes;

        if (luggageTonnes < 4) {
            busPrice = luggageTonnes * 200;
            busTonnes += luggageTonnes;
            totalPrice += busPrice;
        } else if (luggageTonnes < 12) {
            truckPrice = luggageTonnes * 175;
            truckTonnes += luggageTonnes;
            totalPrice += truckPrice;
        } else {
            trainPrice = luggageTonnes * 120;
            trainTonnes += luggageTonnes;
            totalPrice += trainPrice;
        }
    }
    let average = totalPrice / tonnesTotal;
    console.log(average.toFixed(2));
    let busP = busTonnes / tonnesTotal * 100;
    let truckP = truckTonnes / tonnesTotal * 100;
    let trainP = trainTonnes / tonnesTotal * 100;
    console.log(busP.toFixed(2) + "%");
    console.log(truckP.toFixed(2) + "%");
    console.log(trainP.toFixed(2) + "%");
}

solve([
    "4",
    "1",
    "5",
    "16",
    "3",
    "5",
    "2",
    "10",
    "20",
    "1",
    "7",
])