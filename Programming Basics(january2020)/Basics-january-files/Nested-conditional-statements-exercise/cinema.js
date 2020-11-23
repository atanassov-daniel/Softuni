function solve(input){
    let projection = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());

    let sits = rows * columns;

    let result = 0;

    if(projection === "Premiere"){
        result = sits * 12.00
    } else if(projection === "Normal"){
        result = sits * 7.50
    } else if(projection === "Discount"){
        result = sits * 5.00
    }
    console.log(`${result.toFixed(2)} leva`)
}

solve([
    "Premiere",
    "10",
    "12",
    "Normal",
    "21",
    "13",
    "Discount",
    "12",
    "30"
])