function solve(n, arr) {
    let newArray = [];

    for (let i = 0; i < n; i++) {
        newArray[i] = arr[i];
        //newArray.push(arr[i]);        //това е много по-добър вариант 
    }

    let result = '';

    for (let g = newArray.length - 1; g >= 0; g--) {
        result += newArray[g] + ' ';
    }

    console.log(result);
}

solve(3, [10, 20, 30, 40, 50]);