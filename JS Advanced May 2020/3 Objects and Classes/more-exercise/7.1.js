function solve(input) {
    let output = [];
    input.forEach((arr, i) => input[i] = JSON.parse(input[i]).sort((a, b) => b - a));


    for (let index in input) {
        let currentArray = input[index];


        for (let g = index - 1; g >= 0; g--) {
            const element = input[g];

            function arrayEquals(a, b) {
                return Array.isArray(a) &&
                    Array.isArray(b) &&
                    a.length === b.length &&
                    a.every((val, index) => val === b[index]);
            }

            if (arrayEquals(currentArray, element) === false) {
                output.push(currentArray);
            }
        }
    }

    output.sort((a, b) => a.length - b.length);
    output.forEach(arr => {
        console.log(`[${arr.join(', ')}]`);
    });
    /*
    input.sort((a, b) => a.length - b.length);
    input.forEach(arr => {
        console.log(`[${arr.join(', ')}]`);
    });
    */
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);
solve(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
]);