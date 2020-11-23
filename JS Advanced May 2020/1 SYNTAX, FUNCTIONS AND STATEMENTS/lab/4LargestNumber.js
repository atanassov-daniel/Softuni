function solve(num1, num2, num3) {
    let max = Math.max(num1, num2, num3);
    console.log(`The largest number is ${max}.`);
}

/*function solve(num1, num2, num3) {
    let functionArguments = Array.from(solve.arguments);
    let max = Math.max(...functionArguments);
    console.log(`The largest number is ${max}.`);
}*/

solve(5, -3, 16);
solve(-3, -5, -22.5);