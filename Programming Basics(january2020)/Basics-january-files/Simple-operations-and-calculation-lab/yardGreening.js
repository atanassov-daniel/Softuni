function solve(input){
    let dogs = Number(input.shift());
    let others = Number(input.shift());

    let dogsMoney = dogs * 2.50;
    let othersMoney = others * 4;
    let total = dogsMoney + othersMoney;

    console.log(total.toFixed(2) + " lv.");
}

solve(["13", "9"])