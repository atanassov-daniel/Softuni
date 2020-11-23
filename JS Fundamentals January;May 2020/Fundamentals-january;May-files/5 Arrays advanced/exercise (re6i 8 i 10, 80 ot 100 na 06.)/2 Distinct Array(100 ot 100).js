function solve(arr) {

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        let firstIndex = arr.indexOf(element);
        let lastIndex = arr.lastIndexOf(element);

        if (firstIndex !== lastIndex) {
            arr.splice(lastIndex, 1);
        }
    }

    console.log(arr.join(' '));
}

solve([1, 2, 3, 4]);
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([20, 8, 12, 13, 4, 4, 8, 5]);