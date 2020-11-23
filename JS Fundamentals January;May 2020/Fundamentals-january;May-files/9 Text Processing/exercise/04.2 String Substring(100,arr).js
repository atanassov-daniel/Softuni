function solve(searchedWord, text) {
    let arrText = text.split(' ');
    let lowercaseArrText = arrText.map(element => element.toLowerCase());

    if (lowercaseArrText.includes(searchedWord.toLowerCase()) === false) {
        console.log(`${searchedWord} not found!`);
    } else {
        console.log(searchedWord);
    }
}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');