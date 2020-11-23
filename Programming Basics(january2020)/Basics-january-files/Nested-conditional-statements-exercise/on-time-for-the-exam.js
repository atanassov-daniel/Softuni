function solve(input) {
    let hourExam = Number(input.shift());
    let minuteExam = Number(input.shift());
    let hourArrival = Number(input.shift());
    let minuteArrival = Number(input.shift());

    let examInMinutes = hourExam * 60 + minuteExam
    let arrivalInMinutes = hourArrival * 60 + minuteArrival;

    let delay = Math.abs(examInMinutes - arrivalInMinutes)
    let earlier = examInMinutes - arrivalInMinutes;
if(examInMinutes >= arrivalInMinutes){
    if (earlier <= 30) {
        console.log("On time");
    }else if (earlier > 30) {
        console.log("Early");
    }
} else {
    //if (delay > 0) {
        console.log("Late");
    //}// май изобщо не е нужно вложеното
}

    if (earlier < 60 && earlier >= 1) {
        console.log(`${earlier} minutes before the start`);
    } else if (earlier >= 60) {
        let hours = Math.floor(earlier / 60)
        let minutes = earlier % 60 
        if(minutes > 9){
            console.log(`${hours}:${minutes} hours before the start`)
        } else if(minutes <= 9){
            console.log(`${hours}:0${minutes} hours before the start`)
        }
    } else if (delay < 60 && delay >= 1) {
        console.log(`${delay} minutes after the start`)
    } else if (delay >= 60) {
        let hours = Math.floor(delay / 60)
        let minutes = delay % 60 
        if(minutes > 9){
            console.log(`${hours}:${minutes} hours after the start`)
        } else if(minutes <= 9){
            console.log(`${hours}:0${minutes} hours after the start`)
        }
    }
}

solve([
    "9",
    "30",
    "9",
    "50",
    "9",
    "00",
    "8",
    "30",
    "16",
    "00",
    "15",
    "00",
    "9",
    "00",
    "10",
    "30",
    "14",
    "00",
    "13",
    "55",
    "11",
    "30",
    "8",
    "12",
    "10",
    "00",
    "10",
    "00",
    "11",
    "30",
    "10",
    "55",
    "11",
    "30",
    "12",
    "29",
])//