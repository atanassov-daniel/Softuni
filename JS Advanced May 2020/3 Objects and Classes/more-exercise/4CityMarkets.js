function solve(input) {
    let assocArr = {};

    for (const line of input) {
        let [townName, productName, third] = line.split(' -> ');
        let amountOfSales = Number(third.split(' : ')[0]);
        let priceForOneUnit = Number(third.split(' : ')[1]);

        if (assocArr[townName] === undefined) {
            assocArr[townName] = {
                [productName]: amountOfSales * priceForOneUnit
            };
        } else {
            assocArr[townName][productName] = amountOfSales * priceForOneUnit;
        }
    }

    for (const key in assocArr) {
        console.log(`Town - ${key}`);

        let products = assocArr[key];
        for (const productName in products) {
            console.log(`$$$${productName} : ${products[productName]}`);
        }
    }
}

solve(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);