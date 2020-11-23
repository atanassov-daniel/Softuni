function solve(arr1, arr2) {
    let finalArray = [];

    finalArray = arr1.slice(0, arr2[0]);

    finalArray.splice(0, arr2[1]); //като беше така ми даваше [5, 2] -> finalArray = finalArray.splice(0, arr2[1]);

    let searchedNumberCount = 0;

    for (let i = 0; i < finalArray.length; i++) {
        if (arr2[2] === finalArray[i]) {
            searchedNumberCount++;
        }
    }

    console.log('Number ' + arr2[2] + ' occurs ' + searchedNumberCount + ' times.');
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);