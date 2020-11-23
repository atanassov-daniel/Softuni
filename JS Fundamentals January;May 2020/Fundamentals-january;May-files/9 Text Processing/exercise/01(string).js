function solve(wordsString, text) {
    let wordsArr = wordsString.split(', ');

    while (text.includes('*')) {
        let startIndex = text.indexOf('*');
        let endIndex;

        for (let index = startIndex; index < text.length; index++) {
            if (text[index] !== '*') {
                endIndex = index;
                break;
            }
        }

        let length = endIndex - startIndex;
        let substitute = wordsArr.filter(currentWord => currentWord.length === length)[0];

        if (substitute === undefined) {
            break;
        } else {
            text = text.replace('*'.repeat(length), substitute);
        }
    }

    console.log(text);
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');