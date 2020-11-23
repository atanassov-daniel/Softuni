function solve(input) {
    let messagesCount = Number(input.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 0; i < messagesCount; i++) {
        const element = input[i];
        let decryptionKey = element.match(/[star]/gi).length;


        let decryptedString = '';
        for (const index in element) {
            let char = String.fromCharCode(element.charCodeAt(index) - decryptionKey);

            decryptedString += char;
        }


        let pattern = /@(?<planetName>[A-Za-z]+)(?<separator>[^!-@:>]*):(?<planetPopulation>\d+)\k<separator>!(?<attackType>[AD])!\k<separator>->(?<soldierCount>\d+)\k<separator>/g;

        //let pattern = /@(?<planetName>[a-zA-Z]+)(?<separator>[^@\-!:]+)?:(?<planetPopulation>\d+)\k<separator>?!(?<attackType>[AD])!\k<separator>?->(?<soldierCount>\d+)\k<separator>?/;

        //let pattern = /@(?<planetName>[a-zA-Z]+)(?:[^@\-!:]+)?:(?<planetPopulation>\d+)(?:[^@\-!:]+)?!(?<attackType>[AD])!(?:[^@\-!:]+)?->(?<soldierCount>\d+)/;

        let match = pattern.exec(decryptedString);


        if (match !== null) {
            let attackType = match.groups.attackType;
            let planetName = match.groups.planetName;

            if (attackType === 'D') {
                destroyedPlanets.push(planetName);
            } else if (attackType === 'A') {
                attackedPlanets.push(planetName);
            }
        }
    }

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.sort().forEach(element => console.log(`-> ${element}`));

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.sort().forEach(element => console.log(`-> ${element}`));
}

solve(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR']);

solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);