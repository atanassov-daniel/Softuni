function solve(arrayOfStrings) {
    let arrayNumbers = arrayOfStrings[0].split(' ').map((x) => Number(x));

    for (let i = 1; i < arrayOfStrings.length; i++) {
        let commandPartsAsArray = arrayOfStrings[i].split(' '); //divide command(string) to two parts - Command and number/s and save the parts as an array
        //assign each part to a variable
        let firstPartOfCommand = commandPartsAsArray[0];
        if (firstPartOfCommand !== 'Insert') { //check if the command is 'Insert' which has 2 numbers or any of the others which have each just 1 number
            secondPartOfCommand = Number(commandPartsAsArray[1]);
        } else {
            numberToInsert = Number(commandPartsAsArray[1]);
            indexToInsertAt = Number(commandPartsAsArray[2]);
        }

        //check what the command is and do the respective manipulation of the array of numbers 
        if (firstPartOfCommand === 'Add') {
            arrayNumbers.push(secondPartOfCommand);
        } else if (firstPartOfCommand === 'Remove') {
            arrayNumbers = arrayNumbers.filter(x => x !== secondPartOfCommand);
        } else if (firstPartOfCommand === 'RemoveAt') {
            arrayNumbers.splice(secondPartOfCommand, 1);
        } else if (firstPartOfCommand === 'Insert') {
            arrayNumbers.splice(indexToInsertAt, 0, numberToInsert);
        }
    }

    console.log(arrayNumbers.join(' '));
}

solve([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);