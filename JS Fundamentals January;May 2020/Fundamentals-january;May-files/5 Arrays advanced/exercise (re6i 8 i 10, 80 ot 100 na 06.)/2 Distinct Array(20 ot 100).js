function solve(arr) {
    let arrCopy = arr.slice();

    for (let i = 1; i < arr.length; i++) {

        let currentElement = arrCopy[i];

        for (let g = i; g >= 0; g--) {
            let olderElement = arrCopy[g];

            if (currentElement === olderElement && g !== i) {
                arrCopy.splice(i, 1);
            }
        }
        
    }

    console.log(arrCopy.join(' '));
}

//solve([1, 2, 3, 4]);
//solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);
solve([8, 4, 4, 8]);