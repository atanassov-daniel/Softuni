function solve(arr) {
    let systemsArray = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let splitted = element.split(' | ');
        let systemName = splitted[0];
        let componentName = splitted[1];
        let subcomponentName = splitted[2];

        if (i === 0) {
            systemsArray.push({ systemName: systemName, components: [componentName], subcomponents: [subcomponentName] });

        } else {
            for (let index = 0; index < systemsArray.length; index++) {
                let currentSystem = systemsArray[index];
                let timesNotSameSystemName = 0;

                if (currentSystem.systemName !== systemName) {
                    timesNotSameSystemName++;

                    if (timesNotSameSystemName === systemsArray.length) {
                        systemsArray.push({ systemName: systemName, components: [componentName], subcomponents: [subcomponentName] });
                    }

                } else if (currentSystem.systemName === systemName) {
                    if (currentSystem.components.includes(componentName) === false) {
                        currentSystem.components.push(componentName);
                    } else if (currentSystem.components.includes(componentName) === true) {
                        currentSystem.subcomponents.push(subcomponentName);
                    }

                    break;
                }
            }
            timesNotSameSystemName = 0;
        }

        // pri alphabetical order proverkata .toLowerCase
        // a.toLowerCase().localeCompare(b.toLowerCase())
    }
    console.log(systemsArray);

}

//oniq zada4i pri koito imam problem s promenq6tata se dulzhina moje bi moje da gi oprawq kato polzwam for-of ili for-in

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);