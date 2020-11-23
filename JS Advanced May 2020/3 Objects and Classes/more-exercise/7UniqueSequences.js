function solve(input) {
    let output = [];
    input.forEach((arr, i) => input[i] = JSON.parse(input[i]));
    const diam = '♦';

    for (let index in input) {
        let currentArray = input[index];
        let toNotBeSame = index - 1;
        let timesNotSame = 0;

        for (let g = index - 1; g >= 0; g--) {
            const element = input[g];

            let isSameArray = currentArray.every((currentElement, k) => element.includes(currentElement));
            //if (isSameArray === true) {                // /&& g == index && g !== input.lengthinput.splice(g, 1);break;  }
            if (isSameArray === false) {
                timesNotSame++;
            }

        }

        if (timesNotSame == toNotBeSame) {
            output.push(currentArray);
        }
    }

    output.sort((a, b) => a.length - b.length);
    output.forEach(arr => {
        arr.sort((a, b) => b - a);
        console.log(`[${arr.join(', ')}]`);
    });
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);
solve(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
]);