function solve(str) {
    let wordsArr = str.split(' ');
    let wordsMapped = wordsArr.map(x => x.toLowerCase());

    let assoc = {};
    for (const word of wordsMapped) {
        if (assoc[word] === undefined) {
            assoc[word] = 1;
        } else {
            assoc[word]++;
        }
    }

    let result = [];
    for (const value of Object.entries(assoc)) {
        if (value[1] % 2 === 1) {
            result.push(value[0]);
        }
    }
    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');