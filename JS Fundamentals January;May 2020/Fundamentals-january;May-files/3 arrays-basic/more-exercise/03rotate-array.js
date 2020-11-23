function solve(array) {
    let amountOfRotations = Number(array.pop());

    if (isNaN(amountOfRotations) === false) {

        for (let i = 0; i < amountOfRotations; i++) {
            let lastElement = array.pop();
            array.unshift(lastElement);
        }
        
        console.log(array.join(' '));
    } else {
        console.log('Empty');
    }
}

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
solve(['remove', 'remove', 'remove']);