function solve(input) {
    let contributionsCount = Number(input.shift());
    //let num = Number(input.shift());
    let total = 0;
    for (let i = 0; i < contributionsCount; i++) {
        let num = Number(input.shift());
        if (num < 0) {
            console.log("Invalid operation!");
            break;
        }
            console.log(`Increase: ${num.toFixed(2)}`);
            total += num;
            //num = Number(input.shift());
    }
    console.log(`Total: ${total.toFixed(2)}`)
}

solve([
    //"3",
    //"5.51",
    //"69.42",
    //"100",
    "5",
    "120",
    "45.55",
    "-150",

])