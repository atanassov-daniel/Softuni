function solve(input) {
    for(let i=0;i<3;i++){
        let budget = Number(input.shift());
        let statists = Number(input.shift());
        let clothesPrice = Number(input.shift()); //per one statist
    
        let decor = 0.1 * budget;
        let clothesSum = statists * clothesPrice;
        let toPay = decor + clothesSum;
    
        let final = 0;
    
        if(statists > 150) {
            clothesSum = clothesSum * 0.9;
            toPay = decor + clothesSum;
            final = Math.abs(budget - toPay);
        } else {
            final = Math.abs(budget - toPay)
        }
    
        if(budget >= toPay){
            console.log("Action!");
            console.log(`Wingard starts filming with ${final.toFixed(2)} leva left.`);
        } else if (budget < toPay){
            console.log("Not enough money!");
            console.log(`Wingard needs ${final.toFixed(2)} leva more.`);
        }    
    }
}

solve([
    "20000 ",
    "120",
    "55.5",
    "15437.62",
    "186",
    "57.99",
    "9587.88",
    "222",
    "55.68"
])