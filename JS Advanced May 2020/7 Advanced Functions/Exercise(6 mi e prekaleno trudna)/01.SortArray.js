function solve(array, order) {
    const asc = (a, b) => a - b;
    const desc = (a, b) => b - a;

    if (order === "asc") {
        return array.sort(asc);
    } else if (order === "desc") {
        return array.sort(desc);
    }
}

solve([14, 7, 17, 6, 8], 'asc'); // [6, 7, 8, 14, 17]
solve([14, 7, 17, 6, 8], 'desc'); // [17, 14, 8, 7, 6]