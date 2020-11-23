function solve(input) {
    let assocArr = {};

    for (const line of input) {
        let townName = line.split(' <-> ')[0];
        let population = Number(line.split(' <-> ')[1]);

        if (assocArr[townName] === undefined) {
            assocArr[townName] = population;
        } else {
            assocArr[townName] += population;
        }
    }
    let entries = Object.entries(assocArr);
    entries.forEach(line => console.log(`${line[0]} : ${line[1]}`));
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);