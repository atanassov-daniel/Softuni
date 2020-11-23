// JS Fundamentals Objects and Classes - Exercise - 09. Catalogue
// сега я реших, не съм гледал тогавашното решение
// тогавашното решение е било доста по-различно, по-кратко е, така че може и да е по-добро

function solve(input) {
    let assocArr = {};
    for (const line of input) {
        let [productName, productPrice] = line.split(' : ');
        productPrice = Number(productPrice);
        assocArr[productName] = productPrice;
    }
    let keys = Object.keys(assocArr);
    keys.sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()));

    let res = [];
    for (const index in keys) {
        let initial = keys[index][0];
        let initialArr = keys.filter(x => x[0] === initial);
        res.push(initialArr);
    }

    let foo = (element, index) => {
        //let isSameRow = false;
        if (index > 0) {
            if (element[0][0] == res[index - 1][0][0]) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    };
    let uniqueRes = res.filter(foo);
    for (let initialArr of uniqueRes) {
        console.log(initialArr[0][0]);
        initialArr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        initialArr.forEach(element => console.log(`  ${element}: ${assocArr[element]}`));
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
solve(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);