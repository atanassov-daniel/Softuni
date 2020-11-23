function solve(input) {
    let assocArr = {};

    let matchesArr = input[0].match(/\w+/g);
    /* normal if-else's

    for (const match of matchesArr) {
        if (assocArr[match] === undefined) {
            assocArr[match] = 1;
        } else {
            assocArr[match] += 1;
        }
    }
    ternary operator: */
    for (const match of matchesArr) {
        assocArr[match] ? assocArr[match] += 1 : assocArr[match] = 1;
    }
    
    console.log(JSON.stringify(assocArr));
}

solve(['Far too slow, you\'re far too slow.']);
solve(['JS devs use Node.js for server-side JS.-- JS for devs']);