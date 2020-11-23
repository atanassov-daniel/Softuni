function solve(input) {
    let bottles = Number(input.shift());
    let totalML = bottles * 750;
    let dishes = 0;
    let pots = 0;
    let count = 1;
    let isEnough = true;
    let toClean = input.shift();

    while (toClean != "End") {

        toClean = Number(toClean);

        if (count % 3 == 0) {
            totalML -= toClean * 15;
            pots += toClean;
        } else {
            totalML -= toClean * 5;
            dishes += toClean;
        }

        if (totalML < 0) {
            isEnough = false;
            break;
        }

        count++;
        toClean = input.shift();
    }
    if (isEnough == true) {
        console.log("Detergent was enough!");
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${totalML} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(totalML)} ml. more necessary!`)
    }
}

solve([
    //"2",
    //"53",
    //"65",
    //"55",
    //"End",
    "1",
    "10",
    "15",
    "10",
    "12",
    "13",
    "30",

])