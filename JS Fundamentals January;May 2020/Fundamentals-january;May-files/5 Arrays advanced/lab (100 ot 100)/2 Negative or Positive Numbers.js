function solve(arr) {
    let newArr = [];

    for (let index = 0; index < arr.length; index++) {
        let currentElement = arr[index];

        if (currentElement < 0) {
            newArr.unshift(currentElement);
        } else {
            newArr.push(currentElement);
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        console.log(newArr[i]);
    }
}

solve([3, -2, 0, -1]);