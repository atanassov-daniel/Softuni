function solve(input) {
    let message = input.shift();

    for (const line of input) {
        let [command, argument1, argument2] = line.split(':|:');

        
        if (command === 'InsertSpace') {
            let arrString = message.split('');
            arrString.splice(argument1, 0, ' ');
            message = arrString.join('');

            console.log(message);
        } else if (command === 'Reverse') {
            if (message.includes(argument1)) {
                let substring = argument1;
                message = message.replace(substring, '');
                let reversed = substring.split('').reverse().join('');
                message = message.padEnd(message.length + substring.length, reversed);

                console.log(message);
            } else {
                console.log('error');
            }
        } else if (command === 'ChangeAll') {
            message = message.replace(new RegExp(argument1, 'g'), argument2);
            console.log(message);
        } else if (command === 'Reveal') {
            console.log(`You have a new text message: ${message}`);
            break;
        }
    }
}

solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);