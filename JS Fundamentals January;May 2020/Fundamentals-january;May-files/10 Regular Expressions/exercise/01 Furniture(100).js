function solve(arr) {
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.\d+|\d+)!(?<quantity>\d+)/g;
    //let matches = arr.map(element => element.match(pattern));
    let total = 0;
    let boughtFurniture = [];

    for (const value of arr) {
        if (value !== 'Purchase') {
            let matches = value.matchAll(pattern);
            let match = matches.next();

            if (match.value !== undefined) {
                let name = match.value.groups.name;
                boughtFurniture.push(name);

                let price = Number(match.value.groups.price);
                let quantity = Number(match.value.groups.quantity);

                let furniturePrice = price * quantity;
                total += furniturePrice;
                //console.log(value);
                //console.log(value[0].matchAll(pattern));
            }

        } else if (value === 'Purchase') {
            console.log('Bought furniture:');
            boughtFurniture.forEach(element => console.log(element));
            console.log(`Total money spend: ${total.toFixed(2)}`);
            break;
        }
    }
}

solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);