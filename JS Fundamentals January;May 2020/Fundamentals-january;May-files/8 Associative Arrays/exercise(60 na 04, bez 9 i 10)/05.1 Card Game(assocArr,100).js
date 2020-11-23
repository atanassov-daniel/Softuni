// не бях разбрал в условието, че картата трябва да е уникална като цяло, а не само в сегашното тесте, иначе втория цикъл е същия само с промяна на едно име

function solve(input) {
    // събирам всички карти на даден човек
    let peopleSorted = {};
    for (const person of input) {
        let splitted = person.split(': ');
        let personName = splitted[0];
        let cards = splitted[1].split(', ');

        if (peopleSorted[personName] === undefined) {
            peopleSorted[personName] = [];
            peopleSorted[personName].push(...cards);
        } else {
            peopleSorted[personName].push(...cards);
        }
    }

    let personsAssoc = {};
    for (const name in peopleSorted) {
        let arrCards = peopleSorted[name];
        let uniqueArrCards = [...new Set(arrCards)];
        let cardsDivided = uniqueArrCards.map(x => x.split(''));

        for (const value of cardsDivided) {
            [power, type] = [value[0], value[1]];
            // става проблем ако power-а е 10, затова е нужно това
            if (value.length === 3) { // а как можеш да проверя дали стринга съдържа 10, защото пробвах, но не успях
                power = 10;
                type = value[2];
            }
            // слагам стойността отговаряща на буквата на power-a:
            if (power === 'J') {
                power = 11;
            } else if (power === 'Q') {
                power = 12;
            } else if (power === 'K') {
                power = 13;
            } else if (power === 'A') {
                power = 14;
            }
            // слагам стойността отговаряща на буквата на type-a:
            if (type === 'S') {
                type = 4;
            } else if (type === 'H') {
                type = 3;
            } else if (type === 'D') {
                type = 2;
            } else if (type === 'C') {
                type = 1;
            }
            power = Number(power);
            type = Number(type);
            let cardValue = power * type;

            if (personsAssoc[name] === undefined) {
                personsAssoc[name] = cardValue;
            } else if (personsAssoc[name] !== undefined) {
                personsAssoc[name] += cardValue;
            }
        }
    }
    Object.entries(personsAssoc).forEach(x => console.log(`${x[0]}: ${x[1]}`));
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);