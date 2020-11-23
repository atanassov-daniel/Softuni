function solve(input) {
    let hour = Number(input.shift());
    let minutes = Number(input.shift());

    let timeInMinutesPlus15 = hour * 60 + minutes + 15;
    let minutesPlus15 = (minutes + 15) % 60;
    let timeInHours = Math.floor(timeInMinutesPlus15 / 60);

    if (timeInHours == 24) {
        if (minutesPlus15 > 9) {
            console.log(`0:${minutesPlus15}`);
        } else if (minutesPlus15 < 10) {
            console.log(`0:0${minutesPlus15}`);
        }
    } else {
        if (minutesPlus15 > 9) {
            console.log(`${timeInHours}:${minutesPlus15}`);
        } else if (minutesPlus15 < 10) {
            console.log(`${timeInHours}:0${minutesPlus15}`);
        }
    }
}

solve([
    "1",
    "46",
    "0",
    "01",
    "23",
    "59",
    "11",
    "08",
    "12",
    "49"
])