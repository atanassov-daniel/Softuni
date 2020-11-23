function solve(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let arrResults = [];
    let result = pattern.exec(text);
    while (result !== null) {
        arrResults.push(result[0]);

        result = pattern.exec(text);
    }

    console.log(arrResults.join(' '));
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");