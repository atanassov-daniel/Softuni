function solve(searchedWord, text) {
    
    if (text.toLowerCase().includes(searchedWord.toLowerCase()) === false) {
        console.log(`${searchedWord.toLowerCase()} not found!`);
    } else {
        console.log(searchedWord.toLowerCase());
    }
}

solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');