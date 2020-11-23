function moneyForFuel(distance, passengersCount, dieselPrice) {
    let litresNeeded = distance / 100 * 7 + passengersCount * 0.1;
    let neededMoney = litresNeeded * dieselPrice;
    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}

moneyForFuel(260, 9, 2.49,
    90, 14, 2.88)