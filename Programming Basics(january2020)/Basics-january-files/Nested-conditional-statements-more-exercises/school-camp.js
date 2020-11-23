function solve(input) {
    let season = input.shift();
    let groupType = input.shift();
    let studentsCount = Number(input.shift());
    let nightsCount = Number(input.shift());
    let price = 0;
    let sport = "";

    if (season == "Winter") {
        if (groupType == "mixed") {
            price = studentsCount * nightsCount * 10;
            sport = "Ski";
        } else if (groupType == "boys") {
            price = studentsCount * nightsCount * 9.60;
            sport = "Judo";
        } else {
            price = studentsCount * nightsCount * 9.60;
            sport = "Gymnastics";
        }
    } else if (season == "Spring") {
        if (groupType == "mixed") {
            price = studentsCount * nightsCount * 9.50;
            sport = "Cycling";
        } else if (groupType == "boys") {
            price = studentsCount * nightsCount * 7.20;
            sport = "Tennis";
        } else {
            price = studentsCount * nightsCount * 7.20;
            sport = "Athletics";
        }

    } else {
        if (groupType == "mixed") {
            price = studentsCount * nightsCount * 20;
            sport = "Swimming";
        } else if (groupType == "boys") {
            price = studentsCount * nightsCount * 15;
            sport = "Football";
        } else {
            price = studentsCount * nightsCount * 15;
            sport = "Volleyball";
        }
    }

    if (studentsCount >= 50) {
        price *= 0.50;
    } else if (studentsCount >= 20) {
        price *= 0.85;
    } else if (studentsCount >= 10) {
        price *= 0.95;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`)
}

solve([
    "Spring",
    "girls",
    "20",
    "7",
])