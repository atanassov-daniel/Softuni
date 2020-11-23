function solve(arrayOfStrings) {
    let wagonsArray = arrayOfStrings[0].split(' ').map(x => Number(x));
    let maxCapacity = Number(arrayOfStrings[1]);

    for (let i = 2; i < arrayOfStrings.length; i++) {
        let element = arrayOfStrings[i];

        if (element[0] !== 'A') {
            let passengersToAdd = Number(element);

            for (let index = 0; index < wagonsArray.length; index++) {
                let currentWagon = wagonsArray[index];

                if (currentWagon + passengersToAdd <= maxCapacity) {
                    wagonsArray[index] = currentWagon + passengersToAdd;
/* currentWagon = currentWagon + passengersToAdd;   : 
преди беше така и не се променяше, защото това, което това прави, 
е да добавя на променливата с присвоена стойност, а не на самата стойност в масива 
                    */
                    break;
                }
            }

        } else {
            let wagonToAdd = Number((element.split(' '))[1]);
            wagonsArray.push(wagonToAdd);
        }
    }

    console.log(wagonsArray.join(' '));
}

solve(
    ['32 54 21 12 4 0 23',
        '75',
        'Add 10',
        'Add 0',
        '30',
        '10',
        '75']
);

solve(
    ['0 0 0 10 2 4',
        '10',
        'Add 10',
        '10',
        '10',
        '10',
        '8',
        '6']
);