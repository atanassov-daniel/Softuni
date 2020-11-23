function solve(input) {
    let assocArr = {};
    let output = {};

    for (const line of input) {
        let [fruit, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (assocArr[fruit] === undefined) {
            assocArr[fruit] = quantity;
        } else {
            assocArr[fruit] += quantity;
        }

        if (assocArr[fruit] >= 1000) {
            if (output[fruit] === undefined) {
                output[fruit] = Math.floor(assocArr[fruit] / 1000);
            } else {
                output[fruit] += Math.floor(assocArr[fruit] / 1000);
            }
            assocArr[fruit] = quantity % 1000;
        }
    }

    Object.keys(output).forEach(key => console.log(`${key} => ${output[key]}`));
}

/*solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);*/
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);