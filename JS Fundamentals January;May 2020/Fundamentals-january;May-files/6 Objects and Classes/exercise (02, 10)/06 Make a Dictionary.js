function solve(arrJSONs) {
    let arrObjects = [];

    for (let index in arrJSONs) {
        let element = arrJSONs[index];
        element = JSON.parse(element);

        let entries = Object.entries(element);
        let term = entries[0][0];
        let definition = entries[0][1];

        let indexOfTerm;
        for (let g = 0; g < arrObjects.length; g++) {
            if (arrObjects[g].term === term) {
                indexOfTerm = g;
                break;
            }
        }

        if (indexOfTerm === undefined) {
            arrObjects.push({ term: term, definition: definition });
        } else if (indexOfTerm !== undefined) {
            arrObjects[indexOfTerm].definition = definition;
        }

    }
    arrObjects.sort((a, b) => a.term.localeCompare(b.term));

    arrObjects.forEach(element => console.log(`Term: ${element.term} => Definition: ${element.definition}`));
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);