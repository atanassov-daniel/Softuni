function solve(n, arr) {
    let newArray = [];
    let result = '';

    for (let i = 0; i < n; i++) {
        newArray.push(arr[n - 1 - i]);
        //той така го написа     // newArray[n - 1 - i] = arr[i];
    }

    console.log(newArray.join(' '));
}

solve(3, [10, 20, 30, 40, 50]);