function solve(input) {
    let stadiumCapacity = Number(input.shift());
    let fansCount = Number(input.shift());
    let countA = 0;
    let countB = 0;
    let countV = 0;
    let countG = 0;
    for (let i = 0; i < fansCount; i++) {
        let sector = input.shift();
        switch (sector) {
            case "A":
                countA++;
                break;
            case "B":
                countB++;
                break;
            case "V":
                countV++;
                break;
            case "G":
                countG++;
                break;
        }
    }
    console.log((countA / fansCount * 100).toFixed(2) + "%");
    console.log((countB / fansCount * 100).toFixed(2) + "%");
    console.log((countV / fansCount * 100).toFixed(2) + "%");
    console.log((countG / fansCount * 100).toFixed(2) + "%");
    console.log((fansCount / stadiumCapacity * 100).toFixed(2) + "%")
}

solve([
    /*"76",
    "10",
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B",*/

    /*"93",
    "16",
    "A",
    "V",
    "G",
    "G",
    "B",
    "B",
    "G",
    "B",
    "A",
    "B",
    "B",
    "B",
    "A",
    "B",
    "B",
    "A",*/

    "1000",
    "12",
    "A",
    "A",
    "V",
    "V",
    "A",
    "G",
    "A",
    "A",
    "V",
    "G",
    "V",
    "A",
])