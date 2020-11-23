function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 0) {
            let firstLetters = arr.map(element => { if (element !== 0) { return element[0].toLowerCase(); } });

            let firstIndex = firstLetters.indexOf(firstLetters[i]);
            let lastIndex = firstLetters.lastIndexOf(firstLetters[i]);

            let currentGroup = arr.slice(firstIndex, lastIndex + 1);
            for (let index = firstIndex; index < lastIndex + 1; index++) {
                arr[index] = 0;
            }

            console.log(currentGroup[0][0]);
            for (const value of currentGroup) {
                console.log(`  ${value.split(' :').join(':')}`);
            }
        }
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