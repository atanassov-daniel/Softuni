// това решение е на Иво, това е адвансд версията
function solve(string) {
    let splittedWords = string.split(' ');

    let words = {
        [Symbol.iterator]: function () {
            return {
                next: function () {
                    let isDone = splittedWords.length === 0;
                    let currentWord = splittedWords.shift();

                    return {
                        value: currentWord,
                        done: isDone,
                    };
                }
            };
        }
    };

    for (const word of words) {
        console.log(word);
    }
}

solve('Et cillum do voluptate cillum ut cupidatat aliqua.');