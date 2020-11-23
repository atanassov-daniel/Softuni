function bombNumbers(arr1, arr2) {

    let bombNumber = arr2.shift()
    let range = arr2.shift();

    for (let i = 0; i < arr1.length; i++) {
        let currentNum = arr1[i]
        if (currentNum == bombNumber) {

            for (let j = i - range; j <= i + range; j++)
                arr1[j] = 0;
        }
    }

    let arr1Sum = 0;
    for (let number of arr1) {
        arr1Sum += Number(number)
    }
    console.log(`${arr1Sum}`)
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);