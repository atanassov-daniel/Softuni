function solve(n, k) {
    let arr = [1, 1];
    //let numberK = k;
    let sumPrevious = 0;
    while (arr.length < n) {
        if (k > arr.length - 1) {

            for (i = arr.length - 1; i >= 0; i--) {
                sumPrevious += arr[i];
            }
            arr.push(sumPrevious);

        } else {

            for (i = arr.length - 1; i > arr.length - 1 - k; i--) {
                sumPrevious += arr[i];
            }
            arr.push(sumPrevious);
        }
        sumPrevious = 0;
    }

    console.log(arr.join(' '));
}

solve(8, 2);