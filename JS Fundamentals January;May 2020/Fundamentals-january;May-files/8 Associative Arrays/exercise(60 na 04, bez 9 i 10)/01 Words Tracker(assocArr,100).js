function solve(input) {
    let wordsToCount = input.shift().split(' ');
    let assoc = {};
    for (const value of wordsToCount) {
        assoc[value] = 0;
    }

    for (const string of input) {
        if (assoc[string] !== undefined) {
            assoc[string]++;
        }
    }
    let entriesSorted = Object.entries(assoc).sort((a, b) => b[1] - a[1]);

    for (const kvp of entriesSorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count',
    'the', 'occurances', 'of', 'the', 'words', 'this', 'and',
    'sentence', 'because', 'this', 'is', 'your', 'task'
]);