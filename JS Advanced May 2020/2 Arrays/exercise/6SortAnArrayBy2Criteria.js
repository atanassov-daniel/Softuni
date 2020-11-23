function solve(input) {
    input.sort((a, b) => a.length - b.length || a.localeCompare(b));

    input.forEach(element => console.log(element));
}

solve(['alpha',
    'beta',
    'gamma'
]);
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);
solve(['test',
    'Deny',
    'omen',
    'Default'
]);