function solve(input) {
    let hoursNeeded = Number(input.shift());
    let days = Number(input.shift());
    let workers = Number(input.shift());

    let available = 0.9 * days
    let workDay = 8
    let additionalDay = 2

    let hoursUsed = Math.floor((available * workDay) + (workers * days * 2));
    if (hoursUsed >= hoursNeeded) {
        console.log(`Yes!${hoursUsed - hoursNeeded} hours left.`);
    }else{
console.log(`Not enough time!${hoursNeeded- hoursUsed} hours needed.`)
    }
}

solve([
    //"90",
    //"7",
    //"3",
    //"99",
    //"3",
    //"1",
    "50",
    "5",
    "2",

])