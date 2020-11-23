function solve(input) {
    let goal = 10000;
    let steps = 0;
    let walked = 0;

    while (walked < goal) {
        steps = input.shift();
        if (steps !== "Going home") {
            steps = Number(steps)
            walked += steps;
        } else {
            steps = Number(input.shift());
            walked += steps;
            break;
        }
    }
    if (walked >= goal) {
        console.log("Goal reached! Good job!")
    } else {
        let difference = goal - walked;
        console.log(`${difference} more steps to reach goal.`)
    }
}

solve([
    //"1000",
    //"1500",
    //"2000",
    //"6500",

    //"1500",
    //"3000",
    //"250",
    //"1548",
    //"2000",
    //"Going home",
    //"2000",
    
    //"125",
    //"250",
    //"4000",
    //"30",
    //"2678",
    //"4682",

    "1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200", 
])