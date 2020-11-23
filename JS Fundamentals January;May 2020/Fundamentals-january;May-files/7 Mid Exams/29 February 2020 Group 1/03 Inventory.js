function solve(input) {
    let collectingItems = input.shift().split(', ');

    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        let splitted = element.split(' - ');
        let command = splitted[0];
        let item = splitted[1];

        if (command === 'Collect') {
            if (collectingItems.includes(item) === false) {
                collectingItems.push(item);
            }

        } else if (command === 'Drop') {
            let itemIndex = collectingItems.indexOf(item);
            if (itemIndex !== -1) {
                collectingItems.splice(itemIndex, 1);
            }

        } else if (command === 'Combine Items') {
            let oldItem = item.split(':')[0];
            let newItem = item.split(':')[1];

            let oldItemIndex = collectingItems.indexOf(oldItem);
            if (oldItemIndex !== -1) {
                collectingItems.splice(oldItemIndex + 1, 0, newItem);
            }

        } else if (command === 'Renew') {
            let itemIndex = collectingItems.indexOf(item);
            if (itemIndex !== -1) {
                collectingItems.splice(itemIndex, 1);
                collectingItems.push(item);
            }

        } else if (command === 'Craft!') {
            console.log(collectingItems.join(', '));
            break;
        }
    }
}

solve(['Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood', 'Craft!']);

solve(['Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);