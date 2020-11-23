function solve(arr) {
    let racersList = arr.shift().split(', ');
    let isDone = false;
    let assocArr = {};

    for (const string of arr) {
        if (string !== 'end of race') {
            isDone = false;

            let name = string.match(/[A-Za-z]+/g).join('');
            let arrDistance = string.match(/[0-9]/g).map(Number);

            let distance = 0;
            for (const value of arrDistance) {
                distance += value;
            }

            if (racersList.includes(name)) {
                if (assocArr[name] === undefined) {
                    assocArr[name] = distance;
                } else {
                    assocArr[name] += distance;
                }
            }


        } else {
            isDone = true;
            break;
        }


    }

    if (isDone === true) {
        let entries = Object.entries(assocArr);
        entries.sort((a, b) => b[1] - a[1]);

        console.log(`1st place: ${entries[0][0]}`);
        console.log(`2nd place: ${entries[1][0]}`);
        console.log(`3rd place: ${entries[2][0]}`);
    }
}

/*solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
]);*/
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race',
]);