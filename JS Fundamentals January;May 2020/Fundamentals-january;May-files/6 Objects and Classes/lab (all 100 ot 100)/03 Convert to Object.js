function solve(stringJSON) {
    let object = JSON.parse(stringJSON);

    for (const key in object) {
        console.log(`${key}: ${object[key]}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');