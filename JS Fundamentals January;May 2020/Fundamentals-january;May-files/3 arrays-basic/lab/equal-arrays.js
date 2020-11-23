function solve(array1, array2) {
    let isIdentical = true;
    let different = 0;
    let sum = 0;

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            isIdentical = false;
            different = i;
            break;
        } else {
            sum += Number(array1[i]);
        }
    }

    if (isIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${different} index`);
    }
}


solve(['10', '20', '30'], ['10', '20', '30']);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
solve(['1'], ['10']);
