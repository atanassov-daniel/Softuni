function solve(n, m) {
    
    let sum = 0;
    for (let number = Number(n); number <= Number(m); number++) {
        sum += number;
    }

    return sum;
}

console.log(solve('1', '5'));
console.log(solve('-8', '20'));