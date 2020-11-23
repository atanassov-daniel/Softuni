function solve(nums, arrBombNumber) {
    let bombNum = arrBombNumber[0];
    let power = arrBombNumber[1];

    for (let i = 0; i < nums.length; i++) {

        let element = nums[i];

        if (element === bombNum) {
            //first remove from the right
            if (i + 1 + power > nums.length) {

                for (let g = i + 1; g < nums.length; g++) {
                    nums.splice(g, 1);
                }

            } else {
                nums.splice(i + 1, power);
            }

            // then remove the number
            nums.splice(i, 1);

            //then remove from the left
            if (i - power - power + 1 < 0) {

                for (let k = i - 1; k >= 0; k--) {
                    nums.splice(k, 1);
                }

            } else {
                nums.splice(i - power, power);
            }
        }
    }
    
    //console.log(nums);
    let sumFinal = 0;
    for (let g = 0; g < nums.length; g++) {
        sumFinal += nums[g];
    }

    console.log(sumFinal);
}

solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);