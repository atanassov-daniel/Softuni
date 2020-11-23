function solve(arr) {
    let smallest = Math.min(...arr);
    let arrayWithoutTheSmallest = arr.filter((x) => x !== smallest);
    let secondSmallest = Math.min(...arrayWithoutTheSmallest);
    console.log(smallest.toString() + ' ' + secondSmallest);
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);