function solve(n, k) {
    let kNum = k;
    let arr = [];
    let sumOfPreviousElements = 0;
    {/*
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
        }
   */ }
    if (n === 0) {
        console.log(" ");
    } else {
        for (let iteration = 0; iteration < n; iteration++) {
            if (iteration === 0) {
                arr.push(1);
            } else {
                for (let i = arr.length - 1; i >= arr.length - kNum; i--) {
                    if (arr.length - kNum < 0) {
                        for (let g = i; g >= 0; g--) {
                            sumOfPreviousElements += arr[g];
                            //console.log(sumOfPreviousElements);
                            g--;
                        }
                    } else {
                        sumOfPreviousElements += arr[i];
                        //console.log(sumOfPreviousElements);
                    }
                }
                arr.push(sumOfPreviousElements);
                sumOfPreviousElements = 0;
                //console.log(arr);
            }
        }
        console.log(arr.join(' '));
    }

    /*
        if (arr.length - k < 0) {
            while (arr.length - k < 0) {
                let i = 0;
                sumPreviousElements += arr[i];
                i++;
            }
        } else {
    
        }
    
        sumPreviousElements = 0;
        // for (let element of arr) {
        //     console.log(element);
        // }
    */
}

solve(1, 2);
















/*
function solve(nNum, kNum) {
    let k = kNum;
    let arr = [];
    arr.push(1);

    for (let i = 0; i < nNum - 1; i++) {
        let nextElement = 0;

        for (let index = k - 1; index > arr.length - k; index--) {
            if (k >= arr.length) {
                k = arr.length;
            }
        }

        arr.push(nextElement);
        console.log(arr);
        k = kNum;
    }
}

solve(6, 3);

*/