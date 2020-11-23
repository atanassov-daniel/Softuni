function solve(input){
    let usd = Number(input.shift());
    let courseBGN = 1.79549;
    let leva = usd * courseBGN;

    console.log(leva.toFixed(2));
}

solve([
    "20",
    "100",
    "12.5"
])