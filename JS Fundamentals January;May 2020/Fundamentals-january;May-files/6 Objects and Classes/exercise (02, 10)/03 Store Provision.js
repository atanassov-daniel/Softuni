function solve(currentStock, orderedProducts) {
    let product = {};
    let productsArray = [];

    for (let i = 0; i < currentStock.length; i += 2) {
        let productName = currentStock[i];
        let productQuantity = Number(currentStock[i + 1]);

        product.name = productName;
        product.quantity = productQuantity;

        productsArray.push(product);
        product = {};
    }
    //console.log(objectsArray)
    for (let i = 0; i < orderedProducts.length; i += 2) {
        let productName = orderedProducts[i];
        let productQuantity = Number(orderedProducts[i + 1]);

        let isSameName = false;
        let timesNotSameName = 0;

        let lengthCondition = productsArray.length;
        for (let index = 0; index < lengthCondition; index++) {

            if (productsArray[index].name !== productName) {
                isSameName = false;
                timesNotSameName++;
            } else {
                isSameName = true;
            }

            if (isSameName === true) {
                productsArray[index].quantity += productQuantity;
                break;
            } else if (isSameName === false && timesNotSameName === productsArray.length) {
                product.name = productName;
                product.quantity = productQuantity;
                productsArray.push(product);
            }
            /*if (objectsArray[i].productName !== productName) {
                obj.productName = productName;
                obj.productQuantity = productQuantity;
                objectsArray.push(obj);
                break;
            } else {
                objectsArray[i].productQuantity += productQuantity;
                break;
            }*/
        }
        product = {};
        timesNotSameName = 0;
        isSameName = false;
    }
    //console.log(objectsArray);
    for (const index in productsArray) {
        console.log(`${productsArray[index].name} -> ${productsArray[index].quantity}`);
    }
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);