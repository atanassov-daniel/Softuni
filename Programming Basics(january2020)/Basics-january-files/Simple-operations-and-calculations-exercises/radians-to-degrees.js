function solve(input){
    for(let i = 0; i < 4; i ++){
    let radian = Number(input.shift());
    
    let degree = radian * 180 / Math.PI;

    let final = degree.toFixed(0);

    console.log(final);
    }
}

solve([
    "3.1416",
    "6.2832",
    "0.7854",
    "0.5236"
])