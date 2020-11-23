function solve(input) {
    input.shift();
    let arr = [];

    for (const line of input) {
        let splitted = line.split(' | ');
        let town = splitted[0].split('| ')[1];
        let latitude = Number(splitted[1]);
        let longitude = Number(splitted[2].split(' |')[0]);

        arr.push({
            Town: town,
            Latitude: Number(latitude.toFixed(2)),
            Longitude: Number(longitude.toFixed(2))
        });
    }

    console.log(JSON.stringify(arr));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);