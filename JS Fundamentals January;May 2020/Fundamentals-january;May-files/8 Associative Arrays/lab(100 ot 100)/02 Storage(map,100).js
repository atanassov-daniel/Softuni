function solve(input) {
    let itemsMap = new Map();

    for (const value of input) {

        let splitted = value.split(' ');
        [item, quantity] = [splitted[0], Number(splitted[1])];

        if (itemsMap.has(item) === false) {
            itemsMap.set(item, quantity);
        } else {
            let currentQuantity = itemsMap.get(item);
            let newQuantity = currentQuantity + quantity;
            itemsMap.set(item, newQuantity);

            /*
            itemsMap.set(item, 'newQuantity');
                            output:
            tomatoes -> 10
            coffee -> newQuantity
            olives -> 100 

реално аз на вече съществуващия продукт просто сетвам нова стойност 
и затова не отива най-отзаде
            */
        }
    }

    for (const kvp of Array.from(itemsMap.entries())) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

solve([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);