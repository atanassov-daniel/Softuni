function solve(input){

    let time1 = Number(input.shift());
    let time2 = Number(input.shift());
    let time3 = Number(input.shift());

    let totalTime = time1 + time2 + time3;
    let timeInMinutes = Math.floor(totalTime / 60);
    let timeInSeconds = totalTime % 60;

    let result = 0;
    if(timeInSeconds > 9){
        console.log(`${timeInMinutes}:${timeInSeconds}`);
    } else {
        console.log(`${timeInMinutes}:0${timeInSeconds}`);
    }
}

solve([
    "35",
    "45",
    "44",
    "22",
    "7",
    "34",
    "50",
    "50",
    "49",
    "14",
    "12",
    "10"
])