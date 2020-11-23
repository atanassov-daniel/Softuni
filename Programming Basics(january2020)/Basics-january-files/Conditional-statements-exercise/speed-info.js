function solve(input) {
    let speed = Number(input.shift())

    let message = 0
    if (speed > 1000) {
        message = "extremely fast";
    } else if (speed > 150) {
        message = "ultra fast";
    } else if (speed > 50) {
        message = "fast";
    } else if (speed > 10) {
        message = "average";
    } else if (speed <= 10) {
        message = "slow";
    }
    console.log(message);
}

solve([
    "8",
    "49.5",
    "126",
    "160",
    "3500"
])


/*
    става и с <= в обратен ред
    <= 10                   
    <= 50             
    <= 150            
    <= 1000
    > 1000                  с 
*/