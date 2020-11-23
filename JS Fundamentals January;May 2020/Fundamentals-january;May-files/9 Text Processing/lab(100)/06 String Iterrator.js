// това решение е на Иво от лекцията, не съм се опитвал сам
function solve(string) {
    let words = string.split(' ');

    let iterator = {
        next: function () {
            let isDone = words.length === 0;
            let currentWord = words.shift();

            return {
                value: currentWord,
                done: isDone,
            };
        }
    };

    /*let nextElement = iterator.next();

    while (!nextElement.done) {
        console.log(nextElement.value);

        nextElement = iterator.next();
    }
*/
    for (const word of iterator) {
        console.log(word);
    }
}

solve('Et cillum do voluptate cillum ut cupidatat aliqua.');