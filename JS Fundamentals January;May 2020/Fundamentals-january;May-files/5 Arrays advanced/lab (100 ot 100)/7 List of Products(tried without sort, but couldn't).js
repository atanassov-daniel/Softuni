function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charCodeAt(0);
    }

    let descendingByName = [];
    let arrLength = arr.length;

    for (let g = 0; g < arrLength; g++) {
        let biggestElement = Math.min(...arr);
        descendingByName.push(biggestElement);
        arr.splice(arr.findIndex(element => element === biggestElement), 1);
        console.log(descendingByName);
    }
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);

/*
function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charCodeAt(0);
    }

    let descendingByName = [];
    let length = arr.length;

    for (let g = 0; g < length; g++) {
        let biggestElement = Math.min(...arr);
        descendingByName.push(biggestElement);
        arr.splice(arr.findIndex(element => element === biggestElement), 1);
        console.log(descendingByName);
    }
}
*/