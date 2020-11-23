function solve(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let heigth = Number(input.shift());
    let condition = input.length;
    let apartmentArea = width * length * heigth;
    let boxArea = 1 * 1 * 1;
    let area = 0;
    let areaTaken = 0;
    let notEnough = 0;
    let i = 0;
    let statement = 0;
    while (i < condition) {
        let command = input.shift();
        statement = command === "Done";
        if (statement === true) {
            if (apartmentArea < area) {
                console.log(`No more free space! You need ${notEnough} Cubic meters more.`)
            } else {
                console.log(`${notEnough} Cubic meters left.`)
            }
            break;
        } else {
            let boxCount = Number(command);
            let areaTaken = boxArea * boxCount;
            area += areaTaken;
            notEnough = Math.abs(area - apartmentArea);
        }
        i++
    }
    if (statement === false && apartmentArea > area) {
        console.log(`${notEnough} Cubic meters left.`)
    } else if (statement === false && apartmentArea < area) {
        console.log(`No more free space! You need ${notEnough} Cubic meters more.`)
    }
}

solve([
    //"10",
    //"10",
    //"2",
    //"20",
    //"20",
    //"20",
    //"20",
    //"122",
    "10",
    "1",
    "2",
    "4",
    "6",
    "Done",
])