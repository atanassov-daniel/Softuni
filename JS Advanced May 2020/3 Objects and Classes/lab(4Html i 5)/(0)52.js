function solve(input) {
    let obj = {};

    for (const line of input) {
        let [townName, productName, price] = line.split(' | ');
        price = Number(price);

        if (obj[townName] === undefined) {
            obj[townName] = {
                [productName]: price
            };
        } else {
            obj[townName][productName] = price;
        }
    }
    for(const key of Object.keys(obj)){
        console.log(Object.keys(obj[key]));
    }
    let entries = Object.entries(obj);
    for (let index in entries) {
        let objectEntries = Object.entries(entries[index][1]);
        entries[index].length = 1;

        for (let array of objectEntries) {
            entries[index].push(array);
        }
    }

    for (let arr of entries) {
        let town = arr.shift();
        let productsArr = arr;
    }

}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);