function solve(a, b) {
    let bigger = Math.max(a, b);
    let smaller = Math.min(a, b);

    for (let i = bigger; i >= 1; i--) {
        if (bigger % i === 0 && smaller % i === 0) {
            console.log(i);
            break;
        }
    }
}

solve(15, 5);
solve(2154, 458);