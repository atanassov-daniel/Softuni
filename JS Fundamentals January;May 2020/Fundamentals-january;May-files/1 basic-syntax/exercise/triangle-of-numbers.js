function printTriangle(n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        for (let g = 1; g <= i; g++) {
            if (g != i) {
                result += `${i} `;
            } else {
                result += `${i}`;
            }
        }
        console.log(result);
        result = "";
    }
}

printTriangle(3)