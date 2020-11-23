function solve(input) {
    let setUniqueUsernames = new Set(input);
    let uniqueUsernamesArray = Array.from(setUniqueUsernames);
    uniqueUsernamesArray.sort((a, b) => a.length - b.length || a.localeCompare(b));

    uniqueUsernamesArray.forEach(name => console.log(name));
}

solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);
solve(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
]);