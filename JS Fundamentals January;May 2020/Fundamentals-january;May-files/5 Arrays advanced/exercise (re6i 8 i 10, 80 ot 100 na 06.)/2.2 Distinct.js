function solve(arr) {
    let copy = arr.slice();
    let lastIndex;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        lastIndex = arr.lastIndexOf(element, i - 1);
        // if (i - 1 > 0) {
        //     lastIndex = arr.lastIndexOf(element, i - 1);
        // }
        if (lastIndex !== i) {
            if (lastIndex !== -1) {
                arr.splice(lastIndex, 1);
            }
        }





    }

    console.log(arr);
}

solve([20, 8, 12, 13, 4, 4, 8, 5]);