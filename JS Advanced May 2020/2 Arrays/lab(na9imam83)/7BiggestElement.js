function solve(input) {
    let maxes = [];

    for (const arr of input) {
        maxes.push(Math.max(...arr));
    }

    console.log(Math.max(...maxes));
}

solve([
    [20, 50, 10],
    [8, 33, 145]
]);
solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);