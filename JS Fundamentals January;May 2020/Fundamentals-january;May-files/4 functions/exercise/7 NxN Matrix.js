function solve(n) {

    function printRow(n) {

        let row = [];
        for (let i = 0; i < n; i++) {
            row.push(n);
        }
        console.log(row.join(' '));
    }

    for (let g = 0; g < n; g++) {
        printRow(n);
    }
}

solve(3);
solve(7);
solve(2);