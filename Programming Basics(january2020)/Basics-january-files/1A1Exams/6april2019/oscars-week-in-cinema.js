function solve(input) {
    let name = input.shift();
    let type = input.shift();
    let tickets = Number(input.shift());
    let total = 0;

    if (name == "A Star Is Born") {
        if (type == "normal") {
            total = tickets * 7.50;
        } else if (type == "luxury") {
            total = tickets * 10.50;
        } else {
            total = tickets * 13.50;
        }
    } else if (name == "Bohemian Rhapsody") {
        if (type == "normal") {
            total = tickets * 7.35;
        } else if (type == "luxury") {
            total = tickets * 9.45;
        } else {
            total = tickets * 12.75;
        }
    } else if (name == "Green Book") {
        if (type == "normal") {
            total = tickets * 8.15;
        } else if (type == "luxury") {
            total = tickets * 10.25;
        } else {
            total = tickets * 13.25;
        }
    } else {
        if (type == "normal") {
            total = tickets * 8.75;
        } else if (type == "luxury") {
            total = tickets * 11.55;
        } else {
            total = tickets * 13.95;
        }
    }
    console.log(`${name} -> ${total.toFixed(2)} lv.`);
}

solve([
    "A Star Is Born",
    "luxury",
    "42",
])