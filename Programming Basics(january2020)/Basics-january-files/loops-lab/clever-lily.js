function solve(input) {
    let age = Number(input.shift());
    let washerPrice = Number(input.shift());
    let toyPrice = Number(input.shift());

    let money = 0
    let toysCount = 0
    let saved = 0
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += 10
            saved += money - 1
        } else {
            toysCount += 1
        }
    }
    //saved = saved - 1 * (Math.floor(age / 2))
    let savedMoney = saved + toysCount * toyPrice;
    let moneyleft = Math.abs(washerPrice - savedMoney);
    if (savedMoney >= washerPrice) {
        console.log(`Yes! ${moneyleft.toFixed(2)}`)
    } else {
        console.log(`No! ${moneyleft.toFixed(2)}`)
    }
}

solve([
    //"10",
    //"170.00",
    //"6",
    "21",
    "1570.98",
    "3",
])