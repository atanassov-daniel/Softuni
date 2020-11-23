function solve(input) {
    let assocArr = {};

    for (const line of input) {
        let [systemName, componentName, subcomponentName] = line.split(' | ');

        if (assocArr[systemName] === undefined) {
            assocArr[systemName] = {
                [componentName]: [subcomponentName]
            };
        } else {
            if (assocArr[systemName][componentName] === undefined) {
                assocArr[systemName][componentName] = [subcomponentName];
            } else {
                assocArr[systemName][componentName].push(subcomponentName);
            }
        }
    }
    let entries = Object.entries(assocArr);
    //console.log(entries);
    for (const index in entries) {
        entries[index][1] = Object.entries(entries[index][1]);
    }
    //console.log(entries);



    if (entries.length > 1) {
        entries.sort((a, b) => {
            a[1].sort((x, y) => y[1].length - x[1].length);
            b[1].sort((x, y) => y[1].length - x[1].length);
            return b[1].length - a[1].length || a[0].toLowerCase().localeCompare(b[0].toLowerCase());
        });
        entries.forEach(wholeSystemArray => {
            let systemName = wholeSystemArray[0];
            console.log(systemName);

            let systemsComponentsArray = wholeSystemArray[1];

            systemsComponentsArray.forEach(componentWithItsSubcomponentsArray => {
                let componentName = componentWithItsSubcomponentsArray[0];
                console.log(`|||${componentName}`);

                let subcomponentsArray = componentWithItsSubcomponentsArray[1];
                subcomponentsArray.forEach(subcomponent => console.log(`||||||${subcomponent}`));
            });
        });
    } else if (entries.length === 1) {
        entries[0][1].sort((a, b) => b[1].length - a[1].length);

        entries.forEach(wholeSystemArray => {
            let systemName = wholeSystemArray[0];
            console.log(systemName);

            let systemsComponentsArray = wholeSystemArray[1];

            systemsComponentsArray.forEach(componentWithItsSubcomponentsArray => {
                let componentName = componentWithItsSubcomponentsArray[0];
                console.log(`|||${componentName}`);

                let subcomponentsArray = componentWithItsSubcomponentsArray[1];
                subcomponentsArray.forEach(subcomponent => console.log(`||||||${subcomponent}`));
            });
        });
    }
}

/*solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'SULS | Judge Site | 2 Submittion Page',
    'SULS | Judge Site | 3 Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);*/
solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'SULS | Judge Site | 2 Submittion Page',
    'SULS | Judge Site | 3 Submittion Page',
    'SULS | Digital Site | Login Page'
]);



let outputEntries = [
    /* entries[0] = a */
    [ /* entries[0][0] */ "SULS", /* entries[0][0] */
        /* entries[0][1] */
        [
            ["Main Site", ["Home Page", "Login Page", "Register Page"]],
            ["Judge Site", ["Login Page", "Submittion Page"]],
            ["Digital Site", ["Login Page"]]
        ] /* entries[0][1] */
    ], /* entries[0] = a */

    // да пробвам да направя и това за компонентите в същата функция горе
    ["Lambda",
        [
            ["CoreA", ["A23", "A24", "A25"]],
            ["CoreB", ["B24"]],
            ["CoreC", ["C4"]]
        ]
    ],

    ["Indice",
        [
            ["Session", ["Default Storage", "Default Security"]]
        ]
    ]
];
//console.log(outputEntries);