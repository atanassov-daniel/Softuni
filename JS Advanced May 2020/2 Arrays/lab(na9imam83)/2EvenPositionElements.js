function solve(input) {
    let result = [];

    for (const index in input) {
        if (index % 2 === 0) {
            result.push(input[index]);
        }
    }
    
    return result.join(' ');
}

solve(['20', '30', '40']);
solve(['5', '10']);