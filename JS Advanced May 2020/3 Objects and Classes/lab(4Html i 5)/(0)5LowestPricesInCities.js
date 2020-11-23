function solve(input) {
    let map = new Map();

    for (const line of input) {
        let [townName, productName, price] = line.split(' | ');
        price = Number(price);

        if (map.has(townName) === false) {
            map.set(townName, {
                [productName]: price
            });
        } else {
            /*let newEntry = {
                [productName]: price
            };

            let oldEntries = map.get(townName);

            map.set(townName) = oldEntries, newEntry;*/

        }
    }

    console.log(obj);

}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);