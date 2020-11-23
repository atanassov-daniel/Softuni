function solve(firstArray, secondArray) {
    let newArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            newArray.push(Number(firstArray[i]) + Number(secondArray[i]));
        } else {
            newArray.push(firstArray[i] + secondArray[i]);
        }
    }

    console.log(newArray.join(" - "));
}

solve(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);

solve(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
);