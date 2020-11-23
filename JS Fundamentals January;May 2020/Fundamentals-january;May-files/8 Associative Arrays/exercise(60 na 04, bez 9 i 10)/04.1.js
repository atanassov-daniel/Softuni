function solve(input) {
    if (input.includes('PARTY')) {
        //divide the input to list of awaited guests and guests that have arrived at the party
        let listAll = input.slice(0, input.indexOf('PARTY'));
        let guests = input.slice(input.indexOf('PARTY') + 1, input.length);

        //divide the list of awaited guests into a list for just the VIPs and one for just the regulars
        let listVIPs = listAll.filter(element => !isNaN(Number(element[0]) + 2));
        let listRegulars = listAll.filter(element => isNaN(Number(element[0]) + 2));

        // check which of the VIP guests are missing
        let missingVIPs = [];
        for (const value of listVIPs) {
            if (guests.includes(value) === false) {
                missingVIPs.push(value);
            }
        }

        // check which of the regular guests are missing
        let missingRegulars = [];
        for (const value of listRegulars) {
            if (guests.includes(value) === false) {
                missingRegulars.push(value);
            }
        }
        //print the total amount of missing guests from both categories
        console.log(missingRegulars.length + missingVIPs.length);

        // print the missing VIP guests first, if any
        if (missingVIPs.length > 0) {
            console.log(missingVIPs.join('\n'));
        }

        //then print the missing regular guests, if any
        if (missingRegulars.length > 0) {
            console.log(missingRegulars.join('\n'));
        }
    } else {
        console.log(input.length);
        console.log(input.join('\n'));
    }
}

solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);

/*solve([
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']); //0
*/

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