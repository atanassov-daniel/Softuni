function solve(input) {
    let timeToBeat = Number(input.shift());      //seconds
    let distance = Number(input.shift());      //metres
    let pace = Number(input.shift());       //for how many seconds Ivan swims 1 metre

    //let minus = 12.5 / 15; // water slows him down every 15 metres with 12.5 seconds

    let time1 = distance * pace
    //console.log(time1)
    let distanceNew = Math.floor(distance / 15)
    //console.log(distanceNew)
    let time2 = distanceNew * 12.5
    //console.log(time2)
    let time = time1 + time2
    //console.log(time)

    //let time = distance * pace + Math.floor(distance * minus); //how fast Ivan will swim the distance
    let differenceWithWorldRecord = Math.abs(timeToBeat - time);

    let print = 0
    if (time >= timeToBeat) {
        print = `No, he failed! He was ${differenceWithWorldRecord.toFixed(2)} seconds slower.`;
        console.log(print)
    } else {
        print = `Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`
        console.log(print)
    }
}

solve([
    "10464",
    "1500",
    "20",
    "55555.67",
    "3017",
    "5.03"
])

/*"10464",
"1500",
"20", */