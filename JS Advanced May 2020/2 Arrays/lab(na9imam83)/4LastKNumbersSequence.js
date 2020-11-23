function solve(n, k) {
    let result = [1];

    while (result.length < n) {
        let sum = 0;
        let l = result.length - k;
        if (l < 0) {
            for (let i = 0; i < result.length; i++) {
                sum += result[i];
            }
        } else {
            for (let i = result.length - k; i < result.length; i++) {
                sum += result[i];
            }
        }
        result.push(sum);
    }

    console.log(result.join(' '));
}

solve(6, 3);
solve(8, 2);