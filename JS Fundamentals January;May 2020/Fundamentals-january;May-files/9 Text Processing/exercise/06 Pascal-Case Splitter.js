function solve(input) {
    let result = [];
    let startIndex;
    let endIndex;

    for (let index = 0; index < input.length; index++) {
        if (index === 0) {
            startIndex = 0;
        } else {
            if (input[index] === input[index].toUpperCase()) {
                endIndex = index;
                result.push(input.substring(startIndex, endIndex));
                startIndex = index;
            }
        }
        if (index === input.length - 1) {
            endIndex = index;
            result.push(input.substring(startIndex));
            startIndex = index;
        }
    }

    console.log(result.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
//     012345678910
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');
