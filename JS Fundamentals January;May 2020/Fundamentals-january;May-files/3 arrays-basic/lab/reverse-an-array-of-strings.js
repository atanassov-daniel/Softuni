function solve(arrayOfStrings) {
    let reversedArray = [];

    for (let i = arrayOfStrings.length - 1; i >= 0; i--) {
        reversedArray.push(arrayOfStrings[i])
    }
    
    console.log(reversedArray.join(' '));
}

//solve(['a', 'b', 'c', 'd', 'e']);
//solve(['abc', 'def', 'hig', 'klm', 'nop']);
solve(['33', '123', '0', 'dd']);
