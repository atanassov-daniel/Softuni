function solve(array) {
    let gamesArray = array.shift().split(' ')

    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if (command !== 'Play!') {
            let commandType = command.split(' ')[0];
            let game = command.split(' ')[1];

            if (commandType === 'Install') {
                if (gamesArray.includes(game) === false) {
                    gamesArray.push(game)
                }
            } else if (commandType === 'Uninstall') {
                if (gamesArray.includes(game) === true) {
                    let index = gamesArray.indexOf(game);
                    gamesArray.splice(index, 1)
                }
            } else if (commandType === 'Update') {
                if (gamesArray.includes(game) === true) {
                    let index = gamesArray.indexOf(game);
                    gamesArray.splice(index, 1);
                    gamesArray.push(game);
                }
            } else if (commandType === 'Expansion') {
                let parts = game.split('-');
                game = parts[0];
                let expansion = parts[1];
                if (gamesArray.includes(game) === true) {
                    let index = gamesArray.indexOf(game);
                    gamesArray.splice(index + 1, 0, `${game}:${expansion}`);
                }
            }
        } else {
            console.log(gamesArray.join(' '));
        }
    }
}

solve(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);

solve(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);