function solve(wordsString, text) {
    let wordsArr = wordsString.split(', ');
    let arrText = text.split(' ');

    for (const index in arrText) {
        if (arrText[index].includes('*')) {
            let substitute = wordsArr.filter(element => element.length === arrText[index].length)[0];
            arrText[index] = substitute;
        }
    }

    console.log(arrText.join(' '));
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');