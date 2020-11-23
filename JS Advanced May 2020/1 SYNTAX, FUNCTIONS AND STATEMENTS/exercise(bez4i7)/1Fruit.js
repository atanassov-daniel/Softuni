function solve(fruit, weightGrams, priceForKG) {
    let weightKG = weightGrams / 1000;
    let price = weightKG * priceForKG;
    console.log(`I need $${price.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);