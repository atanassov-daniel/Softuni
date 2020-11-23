function bombNumbers(sequenceArr, bombArr) {
    let bombNum = bombArr.shift();
    let power = bombArr.shift();

    for (let i = 0; i < sequenceArr.length; i++) {
        const element = sequenceArr[i];

        if (element === bombNum) {
            //first remove from the right
            if (i + 1 + power >= sequenceArr.length) {

                for (let g = i + 1; g < sequenceArr.length; g++) {
                    sequenceArr.splice(g, 1);
                }

            } else {
                sequenceArr.splice(i + 1, power);
            }

            // then remove the number
            sequenceArr.splice(i, 1);

            //then remove from the left
            if (i - power <= 0) {
                //if (i - power - power + 1 < 0)
                for (let k = i - 1; k >= 0; k--) {
                    sequenceArr.splice(k, 1);
                }

            } else {
                sequenceArr.splice(i - power, power);
            }
        }
        //end of loop
    }

    let sumFinal = 0;
    for (let value of sequenceArr) {
        sumFinal += value;
    }
    console.log(sumFinal);
}

//       0  1  2  3
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);



/*
if (element === specialNumber) {
if (i - power < 0) {

} else {
    for (let index = i - 1; index > 0 + power; index--) {
        arr.splice(index, 1)
    }
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];

}
}
*/