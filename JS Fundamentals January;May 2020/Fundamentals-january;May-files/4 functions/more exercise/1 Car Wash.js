function solve(arrayOfStrings) {
    let percentage = 0;

    for (let i = 0; i < arrayOfStrings.length; i++) {
        let currentElement = arrayOfStrings[i];

        if (currentElement === 'soap') {
            percentage += 10;
        } else if (currentElement === 'water') {
            percentage *= 1.20;
        } else if (currentElement === 'vacuum cleaner') {
            percentage *= 1.25;
        } else if (currentElement === 'mud') {
            percentage *= 0.9;
        }
    }

    console.log(`The car is ${percentage.toFixed(2)}% clean.`);
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);