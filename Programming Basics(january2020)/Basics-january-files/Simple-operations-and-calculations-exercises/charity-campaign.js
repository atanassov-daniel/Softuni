function solve(input){
    let days = Number(input.shift());
    let bakers = Number(input.shift());
    let cakesNumber = Number(input.shift());
    let gofretasNumber = Number(input.shift());
    let pancakesNumber = Number(input.shift());

    let cakesPrice = 45;
    let gofretasPrice = 5.80;
    let pancakesPrice = 3.20;

    let cakesDayMoney = cakesNumber * cakesPrice;
    let gofretasDayMoney = gofretasNumber * gofretasPrice;
    let pancakesDayMoney = pancakesNumber * pancakesPrice;

    let dayMoney = cakesDayMoney + gofretasDayMoney + pancakesDayMoney;

    let dayTotal = dayMoney * bakers;
    
    let campaignTotal = dayTotal * days;
    
    let campaignFinal = campaignTotal - (1 / 8) * campaignTotal;

    console.log(campaignFinal.toFixed(2));
}

solve([
    '20',
    '8',
    '14',
    '30',
    '16',
    '131',
    '5',
    '9',
    '33',
    '46'
])

