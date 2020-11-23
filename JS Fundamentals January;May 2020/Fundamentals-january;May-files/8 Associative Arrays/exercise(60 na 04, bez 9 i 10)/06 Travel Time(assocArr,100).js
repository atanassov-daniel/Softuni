function solve(input) {
    let assocArr = {};

    for (const value of input) {
        let splitted = value.split(' > ');
        let [countryName, townName, travelCost] = [splitted[0], splitted[1], splitted[2]];

        if (assocArr[countryName] === undefined) {
            assocArr[countryName] = { [townName]: Number(travelCost) };
        } else if (assocArr[countryName] !== undefined) {
            if (assocArr[countryName][townName] === undefined) {
                assocArr[countryName][townName] = Number(travelCost);
            } else if (assocArr[countryName][townName] !== undefined) {
                // не бях прочел, че трябва да запазя по-ниската цена,
                // аз просто я презаписвах, затов аимах 50/100, само това съм променил
                if (assocArr[countryName][townName] > Number(travelCost)) {
                    assocArr[countryName][townName] = Number(travelCost);
                }
            }
        }
    }

    let entries = Object.entries(assocArr);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    // console.log(Object.keys(entries[1][1])[0]);
    // entries.sort((a, b) => Object.keys(b[1]) - Object.keys(a[1]));

    for (const arr of entries) {
        let pairsTownCost = [];
        let entr = Object.entries(arr[1]);
        entr.sort((a, b) => a[1] - b[1]);
        entr.forEach(element => pairsTownCost.push(element.join(' -> ')));
        console.log(`${arr[0]} -> ${pairsTownCost.join(' ')} `);
    }
}

/*solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);*/

solve(['Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Aarna > 25010',
    'Bulgaria > Lukovit > 10']);
