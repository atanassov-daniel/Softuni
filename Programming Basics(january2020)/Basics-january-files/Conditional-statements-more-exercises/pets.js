function solve(input) {
    let days = Number(input.shift());
    let foodTotal = Number(input.shift());
    let dogKg = Number(input.shift());
    let catKg = Number(input.shift());
    let turtleGr = Number(input.shift());

    let total = days * (dogKg + catKg + turtleGr / 1000);
    if(total <= foodTotal){
        console.log(`${Math.floor(Math.abs(foodTotal - total))} kilos of food left.`);
    }else{
        console.log(`${Math.ceil(Math.abs(foodTotal - total))} more kilos of food are needed.`);
    }
}

solve([
    '2',
    '10',
    '1',
    '1',
    '1200',
    '5',
    '10',
    '2.1',
    '0.8',
    '321',
])