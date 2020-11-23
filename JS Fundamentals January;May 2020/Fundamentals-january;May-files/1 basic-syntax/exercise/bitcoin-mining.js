function solve(goldDay) {
    let bitcoinPrice = 11949.16;
    let goldPrice1Gram = 67.51;
    let gramsGoldThatDay = 0;
    let moneyAvailable = 0;
    let bitcoinsBought = 0;
    let firstDay = 0;
    let isFirstDay = false;

    for (let i = 1; i <= goldDay.length; i++) {

        if (i % 3 === 0) {
            gramsGoldThatDay = 0.7 * goldDay[i - 1];
        } else {
            gramsGoldThatDay = goldDay[i - 1];
        }

        moneyAvailable += gramsGoldThatDay * goldPrice1Gram;
        if (moneyAvailable >= bitcoinPrice) {
            bitcoinsBought += Math.floor(moneyAvailable / bitcoinPrice);
            moneyAvailable -= Math.floor(moneyAvailable / bitcoinPrice) * bitcoinPrice;
            if (isFirstDay === false) {
                if (bitcoinsBought > 0) {
                    firstDay = i;
                    isFirstDay = true;
                }
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${moneyAvailable.toFixed(2)} lv.`);
}

solve([3124.15, 504.212, 2511.124])