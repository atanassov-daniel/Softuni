function solve(input) {
    let numberOfCars = Number(input.shift());
    let assocArr = {};

    if (numberOfCars > 0) {
        for (let i = 0; i < numberOfCars; i++) {
            let [car, mileage, fuel] = input.shift().split('|');
            mileage = Number(mileage);
            fuel = Number(fuel);

            assocArr[car] = { mileage: mileage, fuel: fuel };
        }

        for (const line of input) {
            if (line === 'Stop') {

                let entries = Object.entries(assocArr);
                
                if (entries.length > 0) {
                    let sort = function (a, b) {
                        let mil = a[1].mileage - b[1].mileage;
                        if (mil !== 0) {
                            return mil;
                        } else {
                            return a[0].localeCompare(b[0]);
                        }
                    };

                    entries.sort(sort);

                    for (const arr of entries) {
                        console.log(`${arr[0]} -> Mileage: ${arr[1].mileage} kms, Fuel in the tank: ${arr[1].fuel} lt.`);
                    }

                }

                break;
            }

            let [command, car, arg2, arg3] = line.split(' : ');
            arg2 = Number(arg2);
            arg3 = Number(arg3);

            if (command === 'Drive') {

                if (assocArr[car].fuel - arg3 <= 0) {
                    console.log('Not enough fuel to make that ride');
                } else {
                    assocArr[car].fuel -= arg3;
                    assocArr[car].mileage += arg2;
                    console.log(`${car} driven for ${arg2} kilometers. ${arg3} liters of fuel consumed.`);
                }

                if (assocArr[car].mileage >= 100000) {
                    delete assocArr[car];
                    console.log(`Time to sell the ${car}!`);
                }

            } else if (command === 'Refuel') {

                if (arg2 + assocArr[car].fuel > 75) {
                    assocArr[car].fuel = 75;
                    console.log(`${car} refueled with ${75 - assocArr[car].fuel + 1} liters`);
                } else {
                    assocArr[car].fuel += arg2;
                    console.log(`${car} refueled with ${arg2} liters`);
                }

            } else if (command === 'Revert') {

                assocArr[car].mileage -= arg2;

                if (assocArr[car].mileage < 10000) {
                    assocArr[car].mileage = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${arg2} kilometers`);
                }

            }
        }
    }

}

solve([
    '1',
    'Audi A6|38000|62',

    'Drive : Audi A6 : 100000 : 47',

    'Refuel : Audi A6 : 50',

    'Revert : Audi A6 : 80000',
    'Stop'
]);

/*solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);*/