function solve(inputArr) {
    let arr = inputArr[0].split(' ');

    let equipment;
    let upgrade;

    for (let index = 1; index < inputArr.length; index++) {

        let commandParts = inputArr[index].split(' ');
        let command = commandParts[0];

        if (command !== 'Upgrade') {
            equipment = commandParts[1];
        } else {
            let splitted = commandParts[1].split('-');
            equipment = splitted[0];
            upgrade = splitted[1];
        }

        if (command === 'Buy') {

            if (arr.includes(equipment) === false) {
                arr.push(equipment);
            }

        } else if (command === 'Trash') {

            for (let i = 0; i < arr.length; i++) {
                let element = arr[i];

                if (element === equipment) {
                    arr.splice(i, 1);
                }
            }

        } else if (command === 'Repair') {

            if (arr.includes(equipment)) {
                arr = arr.filter(x => x !== equipment);
                arr.push(equipment);
            }

        } else if (command === 'Upgrade') {

            for (let g = 0; g < arr.length; g++) {
                let element = arr[g];

                if (element === equipment) {
                    arr.splice(g + 1, 0, `${equipment}:${upgrade}`);
                }
            }
        }
    }

    console.log(arr.join(' '));
}

solve(
    ['SWORD Shield Spear',
        'Buy Bag',
        'Trash Shield',
        'Repair Spear',
        'Upgrade SWORD-Steel']
);

solve(
    ['SWORD Shield Spear',
        'Trash Bow',
        'Repair Shield',
        'Upgrade Helmet-V']
);




/*

// Buy
if (arr.includes(equipment) === false)) {
    arr.push(equipment);
}

// Trash
for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (element === equipment) {
        arr.splice(i, 1);
    }
}

// Repair
if (arr.includes(equipment)) {
    arr = arr.filter(x => x !== equipment);
    arr.push(equipment);
}

// Upgrade
for (let g = 0; g < arr.length; g++) {
    let element = array[g];

    if (element === equipment) {
        arr.splice(g + 1, 0, `${equipment}:${upgrade}`);
    }
}

*/