function solve(character1, character2) {
    
    let char1Code = character1.charCodeAt(0);
    let char2Code = character2.charCodeAt(0);

    let resultArray = [];

    if (char1Code <= char2Code) {
        for (let i = char1Code + 1; i < char2Code; i++) {
            resultArray.push(String.fromCharCode(i));
        }
    } else {
        for (let k = char2Code + 1; k < char1Code; k++) {
            resultArray.push(String.fromCharCode(k));
        }
    }

    return resultArray.join(' ');
}

console.log(solve('a', 'd'));
console.log(solve('#', ':'));
console.log(solve('C', '#'));