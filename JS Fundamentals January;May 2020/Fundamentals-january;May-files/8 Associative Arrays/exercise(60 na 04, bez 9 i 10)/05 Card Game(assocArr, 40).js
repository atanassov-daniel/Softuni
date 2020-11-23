// не бях разбрал в условието, че картата трябва да е уникална като цяло, а не само в сегашното тесте, иначе втория цикъл е същия само с промяна на едно име
function solve(input) {
    let personsAssoc = {};

    for (const value of input) {
        let splitted = value.split(': ');
        let personName = splitted[0];
        let arrCards = splitted[1].split(', ');
        /*
        опитах се да направя това за еднкавите карти, но отново имах проблема с индексите
        
                for (const index in arrCards) {
                    let currentCard = arrCards[index];
                    if (arrCards.indexOf(currentCard) !== arrCards.lastIndexOf(currentCard)) {
                        arrCards.splice(arrCards.lastIndexOf(currentCard), 1);
                    }
                }
        */

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

            if (personsAssoc[personName] === undefined || personsAssoc[personName] === null) {
                personsAssoc[personName] = cardValue;
            } else if (personsAssoc[personName] !== undefined) {
                personsAssoc[personName] += cardValue;
            }
        }
    }
    //console.log(personsAssoc);
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



/*

solve(['Peter: 2C->2*1=2, 4H->4*3=12, 9H-> 9*3=27, AS-> 14*4=56, QS-> 12*4=48',
    'Tomas: 3H-> 3*3=9, 10S-> 10*4=40, JC-> 11*1=11, KD-> 13*2=26, 5S-> 5*4=20, X(10S)X',
    'Andrea: QH-> 12*3=36, QC-> 12*1=12, QS-> 12*4=48, QD-> 12*2=24',
    'Tomas: 6H-> 6*3=18, 7S-> 7*4=28, KC-> 13*1=13, KD-> 13*2=26, 5S-> 5*4=20, 10C-> 10*1=10',
    'Andrea: QH-> 12*3=36, QC-> 12*1=12, JS-> 11*4=44, JD-> 11*2=22, JC-> 11*1=11',
    'Peter: JD-> 11*2=22  X(, JD, JD, JD, JD, JD)X  ']);

    Peter: 167  //167      /// 145+22=167
    Tomas: 175  //221 ??? -36-12=173 ???    /// 106+115=221
    Andrea: 197  //245 ??? -26-20=199 ???     /// 120+125=245

*/