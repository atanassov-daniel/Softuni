function solve(input) {
    let juniorsCount = Number(input.shift());
    let seniorsCount = Number(input.shift());
    let traceType = input.shift();
    let donated = 0;

    if (traceType == "trail") {
        donated = juniorsCount * 5.50 + seniorsCount * 7;
    } else if (traceType == "cross-country") {
        donated = juniorsCount * 8 + seniorsCount * 9.50;
        if (juniorsCount + seniorsCount >= 50) {
            donated *= 0.75;
        }
    } else if (traceType == "downhill") {
        donated = juniorsCount * 12.25 + seniorsCount * 13.75;
    } else if (traceType == "road") {
        donated = juniorsCount * 20 + seniorsCount * 21.50;
    }
    donated *= 0.95;
    console.log(donated.toFixed(2));
}

solve([
    "30",
    "25",
    "cross-country",
])