function calculatePrice(product, quantity) {
    if (product === 'coffee') {
        return (quantity * 1.5).toFixed(2);
    } else if (product === 'water') {
        return (quantity * 1).toFixed(2);
    } else if (product === 'coke') {
        return (quantity * 1.4).toFixed(2);
    } else if (product === 'snacks') {
        return (quantity * 2).toFixed(2);
    }
}

console.log(calculatePrice('water', 5));
console.log(calculatePrice('coffee', 2));