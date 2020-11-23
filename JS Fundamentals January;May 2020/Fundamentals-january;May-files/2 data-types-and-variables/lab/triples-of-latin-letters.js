function printLetterCombinations(num) {
    let constraint = 97 + num;
    for (let i = 0; i < num; i++) {
        for (let g = 0; g < num; g++) {
            for (let k = 0; k < num; k++) {
                console.log(`${String.fromCharCode(i+97)}${String.fromCharCode(g+97)}${String.fromCharCode(k+97)}`);
            }
        }
    }
}

printLetterCombinations(3)


/*   даваше Memory Limit

function printLetterCombinations(num) {
    let constraint = 97 + num;
    for (let i = 97; i < constraint; i++) {
        for (let g = 97; g < constraint; g++) {
            for (let k = 97; k < constraint; k++) {
                console.log(`${String.fromCharCode(i)}${String.fromCharCode(g)}${String.fromCharCode(k)}`);
            }
        }
    }
    
}*/
