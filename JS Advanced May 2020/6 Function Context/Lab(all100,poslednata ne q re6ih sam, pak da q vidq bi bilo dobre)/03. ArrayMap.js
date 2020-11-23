function solve(array, func) {
    let resultArray = [];

    array.forEach((element, index) => {
        resultArray.push(func(element));
    });

    return resultArray;
}

let arr = [1, 2, 3, 4];
let func = (x) => x * 2;
let expected = [2, 4, 6, 8];
// let arr = [1, 2, 3, 4, 5];
// let func = (item) => item * 2;
// let expected = [2, 4, 6, 8, 10];
// let arr = ["a", "b", "c"];
// let func = (l) => l.toLocaleUpperCase();
// let expected = ['A', 'B', 'C'];


solve(arr, func);