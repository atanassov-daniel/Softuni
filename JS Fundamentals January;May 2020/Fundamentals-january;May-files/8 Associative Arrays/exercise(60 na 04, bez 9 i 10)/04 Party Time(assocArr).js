function solve(input) {
    //let x = '7XCF4';
    //console.log(isNaN(Number(x[0]) + 2));
    if (input.includes('PARTY')) {
        let list = input.slice(0, input.indexOf('PARTY'));
        let guests = input.slice(input.indexOf('PARTY') + 1, input.length);

        let result = [];
        for (const value of list) {
            if (guests.includes(value) === false) {
                result.push(value);
            }
        }

        console.log(result.length);

        let regularGuests = result.filter(element => isNaN(Number(element[0]) + 2));
        let vipGuests = result.filter(element => !isNaN(Number(element[0]) + 2));

        if (vipGuests.length > 0) {
            console.log(vipGuests.join('\n'));
        }

        if (regularGuests.length > 0) {
            console.log(regularGuests.join('\n'));
        }
    } else {
        console.log(input.length);
        console.log(input.join('\n'));
    }
}

/*solve([
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']); //0
*/
solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);

solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ']);