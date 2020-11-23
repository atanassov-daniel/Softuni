function solve(input) {
    let weekendsNumber = Number(input.shift());
    let workDaysNumber = 365 - weekendsNumber;
    let workDaysPlaytime = 63;
    let weekendsPlaytime = 127;
    let totalPlaytime = workDaysNumber * workDaysPlaytime +
        weekendsNumber * weekendsPlaytime

    let norm = 30000;
    let difference = Math.abs(totalPlaytime - norm);
    let hours = Math.floor(difference / 60);
    let minutes = difference % 60;
    if (totalPlaytime > norm) {
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}

solve([
    "20",
    "113",
])