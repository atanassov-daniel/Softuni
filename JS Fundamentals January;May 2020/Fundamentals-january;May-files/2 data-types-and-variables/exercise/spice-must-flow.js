function solve(startingYield) {
    let day = 0;
    let yield = startingYield;
    let spiceMined = 0;

    while (yield >= 100) {
        spiceMined += yield;

        spiceMined -= 26;
        yield -= 10;
        day++;

        if (yield < 100) {
            spiceMined -= 26;
            break;
        }
    }
    console.log(day);
    console.log(spiceMined);
}

solve(111);