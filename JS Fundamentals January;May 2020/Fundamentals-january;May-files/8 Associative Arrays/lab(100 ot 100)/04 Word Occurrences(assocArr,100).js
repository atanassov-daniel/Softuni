function solve(input) {
    let obj = {};
    for (const word of input) {

        if (obj[word] === undefined) {
            obj[word] = 1;
        } else {
            obj[word] += 1;
        }
    }

    let entries = Object.entries(obj);
    entries.sort((a, b) => b[1] - a[1]);

    entries.forEach(x => console.log(`${x[0]} -> ${x[1]} times`));
}

solve(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"]);