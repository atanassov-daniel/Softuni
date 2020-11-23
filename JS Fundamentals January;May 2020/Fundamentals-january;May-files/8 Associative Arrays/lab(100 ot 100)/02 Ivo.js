function solve(input) {

    
    for (const key of storage.keys()) {
        console.log(`${key} -> ${storage.get(key)}`);
    }

    /*for (const kvp of storage.entries()) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }*/

}

solve([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);