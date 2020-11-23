function solve(stepsCount, footprintMeters, speedKmH) {
    let metersWalked = stepsCount * footprintMeters; // 2400 , 1794.8
    let kmWalked = metersWalked / 1000; // 2.4, 1.7948

    let hoursWithoutRest = kmWalked / speedKmH; // 0.48, 0.32632727272727274


    let additionalMinutes = 0;
    for (let meter = 500; meter <= metersWalked; meter += 500) {
        additionalMinutes++;
    }
    // 4, 3


    if (hoursWithoutRest >= 1) {
        let string = hoursWithoutRest.toString();
        let splitted = string.split('.');
        let min = Number('0.' + splitted[1]); // 0.2


        let minS = min * 60 + additionalMinutes; // 13.8576

        let stringMin = minS.toString();
        let [minutes, secS] = stringMin.split('.');
        secS = '0.' + secS;
        let seconds = secS * 60;

        console.log(`${Number(splitted[0]).toFixed(0)}:${Number(minutes).toFixed(0)}:${seconds.toFixed(0)}`);

    } else if (hoursWithoutRest < 1.0) {

        let totalMinutes = hoursWithoutRest * 60 + additionalMinutes; // 32.8, 22.579636363636364


        let stringMinutes = totalMinutes.toString();
        let splitted = stringMinutes.split('.');

        splitted[1] = '0.' + splitted[1];
        //console.log(splitted); //[ '32', '0.8' ], [ '22', '0.579636363636364' ] 

        let minutes = Number(splitted[0]);

        let seconds = (Number(splitted[1]) * 60).toFixed(0);
        //console.log(seconds);

        console.log(`00:${minutes.toFixed(0)}:${seconds}`);
    }


    /*
    let mPerMin = (speedKmH * 1000) / (1 * 60);
    console.log(mPerMin);
    console.log(metersWalked / mPerMin);
    console.log(60 * hoursWithoutRest);

    // kolko metra minawa za 1 4as
    */
}

solve(10258, 0.60, 5);
solve(2564, 0.70, 5.5);