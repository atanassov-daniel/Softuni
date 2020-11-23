function solve(arr) {
    let sorted = [];

    while (arr.length > 0) {
        let max = Math.max(...arr);
        let min = Math.min(...arr);

        sorted.push(max);
        sorted.push(min);
        arr = arr.filter(x => x !== max);
        arr = arr.filter(x => x !== min);

        // if (arr.length === 2) {
        //     sorted.push(Math.max(...arr));
        //     sorted.push(Math.min(...arr));
        // }
    }

    console.log(sorted.join(' '));
}

solve([94, 1, 94, 1, 94, 1]);

/*
function solve(arr) {
    let sorted = [];

    for (let i = 0; i < arr.length+3; i++) {
        let max = Math.max(...arr);
        let min = Math.min(...arr);

        sorted.push(max);
        sorted.push(min);
        arr = arr.filter(x => x !== max);
        arr = arr.filter(x => x !== min);

        // if (arr.length === 2) {
        //     sorted.push(Math.max(...arr));
        //     sorted.push(Math.min(...arr));
        // }
    }

    console.log(sorted.join(' '));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
*/