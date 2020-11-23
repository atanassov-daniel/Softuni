function bombNumbers(sequenceArr, bombArr) {
    let bombNum = bombArr.shift();
    let power = bombArr.shift();
    for (const index in sequenceArr) {
        const element = sequenceArr[index];

        if (element === bombNum) {
            //first remove from the right
            if (index + 1 + power > sequenceArr.length) {

                for (let g = index + 1; g < sequenceArr.length; g++) {
                    sequenceArr.splice(g, 1);
                }

            } else {
                sequenceArr.splice(index + 1, power);
            }

            // then remove the number
            sequenceArr.splice(index, 1);

            //then remove from the left
            if (index - power < 0) {
                //if (index - power - power + 1 < 0)
                for (let k = index - 1; k >= 0; k--) {
                    sequenceArr.splice(k, 1);
                }

            } else {
                sequenceArr.splice(index - power, power);
            }
        }
        //end of loop
    }

    let sumFinal = 0;
    for (let value of sequenceArr) {
        sumFinal += Number(value);
    }
    console.log(sumFinal);
}

//       0  1  2  3
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);