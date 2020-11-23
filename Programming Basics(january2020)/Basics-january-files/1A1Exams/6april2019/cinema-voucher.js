function solve(input) {
    let voucher = Number(input.shift());
    let product = input.shift();
    let tickets = 0;
    let others = 0;

    while (product != "End") {
        if (product.length <= 8) {
            voucher = voucher - product.charCodeAt(0);
            if (voucher < 0) {
                break;
            }
            others++;

        } else {
            voucher = voucher - product.charCodeAt(0) - product.charCodeAt(1);
            if (voucher < 0) {
                break;
            }
            tickets++;
        }
        product = input.shift();
    }
    console.log(tickets);
    console.log(others);
}

solve([
    "300",
    "Captain Marvel",
    "popcorn",
    "Pepsi",

])