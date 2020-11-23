function solve(input) {
    for (let i = 0; i < 6; i++) {
        let year = input.shift();
        let p = Number(input.shift());            // holidays(no weekends)
        let h = Number(input.shift());            // уикенди в които си е на село

        let inSofia = 48 - h;
        let freeInSofia = 0.75 * inSofia;
        let playsVolley = freeInSofia + (2 / 3) * p + h;

        if (year === "leap") {
            playsVolley = playsVolley * 1.15;
        }

        console.log(Math.floor(playsVolley));
        console.log(3 / 4)
    }
}

solve([
    "leap",
    "5",
    "2",
    "normal",
    "3",
    "2",
    "leap",
    "2",
    "3",
    "normal",
    "11",
    "6",
    "leap",
    "0",
    "1",
    "normal",
    "6",
    "13",
])