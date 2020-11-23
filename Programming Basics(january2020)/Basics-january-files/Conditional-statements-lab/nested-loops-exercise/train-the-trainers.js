function solve(input) {
    let jury = Number(input.shift());
    let presentationName = input.shift();
    let sumPresentation = 0;
    let averagesSum = 0;
    let presentations = 0;

    while (presentationName != "Finish") {
        for (let i = 0; i < jury; i++) {
            sumPresentation += Number(input.shift());
        }
        let average = sumPresentation / jury;
        averagesSum += average;
        console.log(`${presentationName} - ${(average).toFixed(2)}.`);
        presentations++;
        presentationName = input.shift();
        sumPresentation = 0;
    }
    console.log(`Student's final assessment is ${(averagesSum / presentations).toFixed(2)}.`)
}

solve([
    //"2",
    //"While-Loop",
    //"6.00",
    //"5.50",
    //"For-Loop",
    //"5.84",
    //"5.66",
    //"Finish",
    //"3",
    //"Arrays",
    //"4.53",
    //"5.23",
    //"5.00",
    //"Lists",
    //"5.83",
    //"6.00",
    //"5.42",
    //"Finish",
    "2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish",
])