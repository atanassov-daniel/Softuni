function solve(num) {
    let sum = 0;
    sum += num;
    return solve;
}
let res = solve();

console.log(Number(res(1))); // 1
console.log((Number(res(1)))); // 1
console.log((Number(res(1)(1)(1)(1)))); // 4
console.log((Number(res(-1)(1)(-1)(1)))); // 0
console.log((Number(res(-1)))); // -1