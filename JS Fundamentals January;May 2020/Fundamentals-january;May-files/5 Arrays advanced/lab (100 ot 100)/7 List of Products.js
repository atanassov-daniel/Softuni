function solve(productsArray) {
    productsArray.sort();

    for (const index in productsArray) {
        console.log(`${Number(index) + 1}.${productsArray[index]}`);
    }
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);