function solve(input){
    let price = Number(input.shift() * 7.61);
    let percentage = 0.18;
    let discount = Number(price * percentage).toFixed(2);
    let final = (price - discount).toFixed(2);

    console.log(`The final price is: ${final} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}

solve(["540"])