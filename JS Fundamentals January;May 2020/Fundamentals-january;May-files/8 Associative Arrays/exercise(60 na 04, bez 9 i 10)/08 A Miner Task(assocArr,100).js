function solve(input) {
    let assocArr = {};
    for (let index = 0; index < input.length; index += 2) {
        const resource = input[index];
        const quantity = Number(input[index + 1]);

        if (assocArr[resource] === undefined) {
            assocArr[resource] = quantity;
        } else {
            assocArr[resource] += quantity;
        }
    }

    for (const resource in assocArr) {
        console.log(resource + ' -> ' + assocArr[resource]);
    }
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);