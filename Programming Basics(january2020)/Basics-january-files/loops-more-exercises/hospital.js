function solve(input) {
    let days = Number(input.shift());
    let doctors = 7;
    let seen = 0;
    let unseen = 0;
    let totalSeen = 0;
    let totalUnseen = 0;
    for (let i = 1; i <= days; i++) {
        let patients = Number(input.shift());
        if (i % 3 === 0) {
            if (unseen > seen) {
                doctors++
            }
        }

        if (patients <= doctors) {
            seen = patients
            totalSeen += seen
        } else if (patients > doctors) {
            seen = doctors % patients;
            totalSeen += seen
            unseen = patients - seen;
            totalUnseen += unseen
        }
    }
    console.log(`Treated patients: ${totalSeen}.`)
    console.log(`Untreated patients: ${totalUnseen}.`)
}

solve([
    "4",
    "7",
    "27",
    "9",
    "1",
    //"6",
    //"25",
    //"25",
    //"25",
    //"25",
    //"25",
    //"2",
    "3",
    "7",
    "7",
    "7",
])