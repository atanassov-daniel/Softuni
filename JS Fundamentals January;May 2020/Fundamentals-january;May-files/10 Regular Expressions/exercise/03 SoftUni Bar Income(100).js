function solve(input) {
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+|\d+\.\d+)\$/;

    let totalIncome = 0;
    for (const string of input) {

        if (pattern.exec(string) !== null) {
            let result = pattern.exec(string);

            let customerName = result.groups.customer;
            let productName = result.groups.product;
            let count = result.groups.count;
            let price = result.groups.price;

            let productPrice = count * price;
            totalIncome += productPrice;

            console.log(`${customerName}: ${productName} - ${productPrice.toFixed(2)}`);
        }

        if (string === 'end of shift') {
            console.log(`Total income: ${totalIncome.toFixed(2)}`);
            break;
        }

    }
}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);

/*solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);*/