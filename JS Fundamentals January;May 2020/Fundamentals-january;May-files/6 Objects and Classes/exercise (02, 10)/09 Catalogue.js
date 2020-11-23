function solve(arrStrings) {
    arrStrings.sort((a, b) => a.localeCompare(b));
    let currentGroup = [];
    console.log(arrStrings);

    //let initial;

    /*for (let i = 0; i < arrStrings.length; i++) {

        if (initial !== arrStrings[i][0] && initial !== undefined) {
            console.log(initial);
            for (const value of currentGroup) {
                console.log(`  ${value}`);
            }
            currentGroup = [];
        }

        initial = arrStrings[i][0];

        for (let index = 0; index < arrStrings.length; index++) {

            let element = arrStrings[index];

            if (element[0] === initial && element !== arrStrings[i] && currentGroup.includes(element) === false) {
                currentGroup.push(element);
                //arrStrings.splice(index, 1);
            }
        }

    }
*/
    for (let index = 0; index < arrStrings.length; index++) {
        let initialToCheck = arrStrings[index][0];
        currentGroup.push(arrStrings[index]);

        for (let i = 0; i < arrStrings.length; i++) {
            let elementInitial = arrStrings[i].toLowerCase()[0];

            if (initialToCheck === elementInitial && arrStrings[index] !== arrStrings[i]) {
                currentGroup.push(arrStrings[i]);
                arrStrings[i] = 0;
            } else {
                break;
            }
        }

        console.log(initialToCheck);
        for (const value of currentGroup) {
            console.log(`  ${value}`);
        }

        currentGroup = [];
    }

}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);