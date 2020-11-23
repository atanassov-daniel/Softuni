function solve(input) {
    let destination = input.shift();
    let minBudget = Number(input.shift());
    let sum = 0;
    while (destination != "End") {
        while (sum < minBudget) {
            let money = Number(input.shift());
            sum += money;
        }
        sum = 0;
        //много важно е да не го забравям
        console.log(`Going to ${destination}!`);
        destination = input.shift();
        if (destination != "End") {
            minBudget = Number(input.shift());
        }
    }
}

solve([
    //"Greece",
    //"1000",
    //"200",
    //"200",
    //"300",
    //"100",
    //"150",
    //"240",
    //"Spain",
    //"1200",
    //"300",
    //"500",
    //"193",
    //"423",
    //"End",
    "France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End",
])