function solve(input) {
    let neighborhoodsList = input.shift().split(', ');
    let assoc = {};
    for (const name of neighborhoodsList) {
        assoc[name] = [];
    }

    for (const entry of input) {
        let splitted = entry.split(' - ');
        let [neighborhood, personName] = [splitted[0], splitted[1]];
        // това работи и е удобно ппц:   console.log([neighborhood, person]);

        if (assoc[neighborhood] !== undefined) {
            assoc[neighborhood].push(personName);
        }
    }
    let entriesSorted = Object.entries(assoc).sort((a, b) => b[1].length - a[1].length);

    for (const kvp of entriesSorted) {
        let inhabitants = kvp[1];
        console.log(`${kvp[0]}: ${inhabitants.length}`);
        inhabitants.forEach((person) => console.log(`--${person}`));
    }
}

solve([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);