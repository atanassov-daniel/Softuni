/* ВСИЧКИ МЕТОДИ, А ДОЛНИЯТ ВАРИАНТ Е СЪС ПОЧТИ ВСИЧКО НАПИСАНО РЪЧНО
function solve(arr) {
    // let nextArr = arr.filter((element, index) => index % 2 !== 0);
    let nextArr = arr.filter(da);
    let nextArr2 = nextArr.map((x) => x * 2);
    console.log(nextArr2.reverse().join(' '));
    
    function da(element, index) {
        return index % 2 !== 0;
    }
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);
*/

function solve(arr) {

    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            filteredArray.push(arr[i]);
        }
    }

    let mappedArray = [];
    for (let g = 0; g < filteredArray.length; g++) {
        mappedArray.push(filteredArray[g] * 2);
    }

    let resultArray = [];
    for (let k = mappedArray.length - 1; k >= 0; k--) {
        resultArray.push(mappedArray[k]);
    }

    console.log(resultArray.join(' '));
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);