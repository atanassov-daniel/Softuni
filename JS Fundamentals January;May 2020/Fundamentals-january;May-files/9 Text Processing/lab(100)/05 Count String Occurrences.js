//да напиша неговото решение

function solve(text, stringToFind) {
    let arrayWords = text.split(' ');

    let countFound = 0;
    for (const value of arrayWords) {
        if (value === stringToFind) {
            countFound++;
        }
    }
    console.log(countFound);

/*
с това разбира се не се получи, защото и в 'This' намери 'is':

while (text.includes(stringToFind)) {
        text = text.replace(stringToFind, '***FOUND***');
        countFound++;
    }
    console.log(countFound);
*/
}

solve("This is a word and it also is a sentence", "is");