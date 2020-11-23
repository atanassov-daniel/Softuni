function solve(input) {
    let distance = Number(input.shift());  //kilometres to travel
    let timeOfDay = input.shift();
    let taxi = 0;
    let train = Number.MAX_SAFE_INTEGER;
    let bus = Number.MAX_SAFE_INTEGER;

    switch (timeOfDay) {
        case "day":
            taxi = 0.70 + 0.79 * distance;
            if (distance >= 100) {
                train = 0.06 * distance;
            } else if (distance >= 20) {
                bus = 0.09 * distance;
            }
            break;
        case "night":
            taxi = 0.70 + 0.9 * distance;
            if (distance >= 100) {
                train = 0.06 * distance;
            } else if (distance >= 20) {
                bus = 0.09 * distance;
            }
            break;
    }
    if (taxi < train && taxi < bus) {
        console.log(taxi.toFixed(2));
    } else if (train < taxi && train < bus) {
        console.log(train.toFixed(2));
    } else if (bus < taxi && bus < train) {
        console.log(bus.toFixed(2));
    }
}

solve([
    //"5",
    //"day",
    //"7",
    //"night",
    //"25",
    //"day",
    "180",
    "night",
])