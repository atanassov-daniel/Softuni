function solve(input) {
    let result = [];

    for (const index in input) {
        if (index % 2 !== 0) {
            result.push(input[index]);
        }
    }

    let doubled=result.map(x => x * 2);
    doubled.reverse();
    console.log(doubled.join(' '));
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);