function solve(matrice) {
    let firstArray = matrice[0];
    let secondArray = matrice[1];
    let thirdArray = matrice[2];
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;

    for (let g = 0; g < firstArray.length; g++) {
        sum1 += firstArray[g];
        sum2 += secondArray[g];
        sum3 += thirdArray[g];
    }
    let firstSum = firstArray[0] + secondArray[0] + thirdArray[0];
    let secondSum = firstArray[1] + secondArray[1] + thirdArray[1];
    let thirdSum = firstArray[2] + secondArray[2] + thirdArray[2];

    if ((sum1 === sum2 && sum2 === sum3) && (firstSum === secondSum && secondSum === thirdSum)) {
        console.log(true)
    } else {
        console.log(false);
    }
}

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);

//matrice.slice(0,1)