function solve(input) {
    let n = Number(input.shift());
    let countP1 = 0;
    let countP2 = 0;
    let countP3 = 0;
    let countP4 = 0;
    let countP5 = 0;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (num < 200) {
            countP1++;
        } else if (num < 400) {
            countP2++;
        } else if (num < 600) {
            countP3++;
        } else if (num < 800) {
            countP4++;
        } else {
            countP5++;
        }
    }
    console.log((countP1 / n * 100).toFixed(2) + "%");
    console.log((countP2 / n * 100).toFixed(2) + "%");
    console.log((countP3 / n * 100).toFixed(2) + "%");
    console.log((countP4 / n * 100).toFixed(2) + "%");
    console.log((countP5 / n * 100).toFixed(2) + "%");
}

solve([
    "3",
    "1",
    "2",
    "999",
    "4",
    "53",
    "7",
    "56",
    "999",
    "7",
    "800",
    "801",
    "250",
    "199",
    "399",
    "599",
    "799",
    "9",
    "367",
    "99",
    "200",
    "799",
    "999",
    "333",
    "555",
    "111",
    "9",
    "14",
    "53",
    "7",
    "56",
    "180",
    "450",
    "920",
    "12",
    "7",
    "150",
    "250",
    "680",
    "2",
    "600",
    "200"         
])