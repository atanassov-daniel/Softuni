function solve(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let number = input[i];

        if (number < 0) {
            result.unshift(number);
        } else if (number >= 0) {
            result.push(number);
        }
    }

    result.forEach(x => console.log(x));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);