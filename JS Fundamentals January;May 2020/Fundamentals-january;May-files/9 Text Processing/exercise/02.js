function solve(input) {

    while (input.includes('#')) {
        let index = input.indexOf('#');
        let endIndex;

        for (let i = index; i < input.length; i++) {
            if (input[i] === ' ') {
                endIndex = i;
                break;
            }
        }

        let substring = input.substring(index + 1, endIndex);
        input = input.replace('#', '');
        if (substring !== '') {
            let hasNumber = false;
            // check if the string includes only letters or not
            for (const char of substring) {
                if (isNaN(Number(char)) === false) {
                    hasNumber = true;
                    break;
                }
            }
            // if it includes only letters(hasNumber===false), print the string
            if (hasNumber === false) {
                console.log(substring);
            }
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');





