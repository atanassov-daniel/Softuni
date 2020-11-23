    //В документа и в джъдж аутпута на първия нулев тест трябва да е такъв 'abcdedsa', а моя е такъв 'abcdedsaa', имам 100/100, но е хубаво да го погледна
function solve(input) {
    let startIndex;
    let endIndex;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (char === input[i - 1]) {
            startIndex = i - 1;

            for (let g = startIndex; g < input.length; g++) {
                if (input[g] !== char) {
                    endIndex = g;
                    break;
                }
            }
            let substring = input.substring(startIndex, endIndex);
            input = input.replace(substring, char);
        }
    }
  
    console.log(input);
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');