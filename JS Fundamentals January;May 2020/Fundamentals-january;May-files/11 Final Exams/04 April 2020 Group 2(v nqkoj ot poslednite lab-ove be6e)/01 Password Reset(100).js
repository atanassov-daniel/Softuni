function solve(input) {
    let password = input.shift();

    for (const line of input) {
        let splitted = line.split(' ');
        let command = splitted[0];

        if (command === 'TakeOdd') {

            let rawPassword = '';
            for (let index = 0; index < password.length; index++) {
                if (index % 2 !== 0) {
                    rawPassword += password[index];
                }
            }

            password = rawPassword;
            console.log(password);

        } else if (command === 'Cut') {
            let startingIndex = Number(splitted[1]);
            let endIndex = startingIndex + Number(splitted[2]);

            let wordToRemove = password.substring(startingIndex, endIndex);

            password = password.replace(wordToRemove, '');
            console.log(password);

        } else if (command === 'Substitute') {
            let substring = splitted[1];
            let substitute = splitted[2];

            if (password.includes(substring)) {
                let substringIndex = password.indexOf(substring);

                while (substringIndex !== -1) {
                    password = password.replace(substring, substitute);

                    substringIndex = password.indexOf(substring, substringIndex + 1);
                }

                console.log(password);

            } else {
                console.log('Nothing to replace!');
            }

        } else if (command === 'Done') {
            console.log(`Your password is: ${password}`);
        }
    }
}

solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]);