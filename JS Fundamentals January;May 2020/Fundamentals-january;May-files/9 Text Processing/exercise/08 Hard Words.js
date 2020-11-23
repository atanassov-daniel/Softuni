function solve(input) {
    let letter = input[0];
    let wordsArr = input[1];
    let endIndex;

    while (letter.includes('_')) {
        let startIndex = letter.indexOf('_');

        for (let i = startIndex; i < letter.length; i++) {
            if (letter[i] !== '_') {
                endIndex = i;
                break;
            }
        }
        let length = endIndex - startIndex;

        let substitute = wordsArr.filter(word => word.length === length)[0];
        letter = letter.replace('_'.repeat(length), substitute);
    }

    console.log(letter);
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);