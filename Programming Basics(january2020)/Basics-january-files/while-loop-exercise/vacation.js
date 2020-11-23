function solve(input) {
    let moneyNeeded = Number(input.shift());
    let moneyAvailable = Number(input.shift());
    let action = 0;
    let amount = 0.0;
    let days = 0;
    let consecutiveDaysSpended = 0;
    let last = 0;
    while (moneyAvailable < moneyNeeded) {
        action = input.shift();
        amount = Number(input.shift());
        days++;
        if (action === "spend") {
            last = action
            if (amount > moneyAvailable) {
                moneyAvailable = 0;
            } else {
                moneyAvailable -= amount
            }
            if (last === "spend") {
                consecutiveDaysSpended++;
            }
            if (consecutiveDaysSpended >= 5) {
                break;
            }
        } else {
            consecutiveDaysSpended = 0;
            moneyAvailable += amount
        }
    }
    if (moneyAvailable >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`)
    } else {
        console.log("You can't save the money.");
        console.log(days)
    }
}

solve([
    //"2000",
    //"1000",
    //"spend",
    //"1200",
    //"save",
    //"2000",
    //"110",
    //"60",
    //"spend",
    //"10",
    //"spend",
    //"10",
    //"spend",
    //"10",
    //"spend",
    //"10",
    //"spend",
    //"10",
    "250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100",
])