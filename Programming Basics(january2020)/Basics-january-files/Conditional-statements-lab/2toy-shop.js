function solve(input){
    let excursionPrice = Number(input.shift());
    let puzzles = Number(input.shift());
    let dolls = Number(input.shift());
    let bears = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());

    let puzzlePrice = 2.60;
    let dollsPrice = 3;
    let bearsPrice = 4.10;
    let minionsPrice = 8.20;
    let trucksPrice = 2;
    
    let sum = puzzles * puzzlePrice + dolls * dollsPrice + bears * bearsPrice + 
              minions * minionsPrice + trucks * trucksPrice;
    let piecesOrdered = puzzles + dolls + bears + minions + trucks;

    if(piecesOrdered >= 50){
        sum = sum - 0.25 * sum;
        let finalIncome = sum - 0.1 * sum;
        if(finalIncome >= excursionPrice){
            let moneyLeft = finalIncome - excursionPrice; 
            //може и да използваме това навсякъде и надолу Math.abs(finalIncome - excursionPrice)
            let message = `Yes! ${moneyLeft.toFixed(2)} lv left.`;
            console.log(message);
        } else{
            let moneyNeeded = excursionPrice - finalIncome;
            let message = `Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`;
            console.log(message);
        }
    } else{
        let finalIncome = sum - 0.1 * sum;
        if(finalIncome >= excursionPrice){
            let moneyLeft = finalIncome - excursionPrice;
            let message = `Yes! ${moneyLeft.toFixed(2)} lv left.`;
            console.log(message);
        } else {
            let moneyNeeded = excursionPrice - finalIncome;
            let message = `Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`;
            console.log(message);
        }
    }
}
// съществува и доста по-кратък начин, но не си го записах
solve([
    "40.8",
    "20",
    "25",
    "30",
    "50",
    "10",
    "320",
    "8",
    "2",
    "5",
    "5",
    "1"
])