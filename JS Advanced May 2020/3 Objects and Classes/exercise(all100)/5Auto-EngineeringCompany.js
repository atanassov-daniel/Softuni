function solve(input) {
    let assocArr = {};

    for (const line of input) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (assocArr[carBrand] === undefined) {
            assocArr[carBrand] = {
                [carModel]: producedCars
            };
        } else {
            if (assocArr[carBrand][carModel] === undefined) {
                assocArr[carBrand][carModel] = producedCars;
            } else {
                assocArr[carBrand][carModel] += producedCars;
            }
        }
    }

    for (const key in assocArr) {
        console.log(key);
        for (const carModel in assocArr[key]) {
            console.log(`###${carModel} -> ${assocArr[key][carModel]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);