function getFibonator() {
    let array = [];

    return function () {
        if (array.length === 0) {
            array = [0, 1];
            return 1;
        } else {
            let nextFibonacciNumber = array[array.length - 1] + array[array.length - 2];
            array.push(nextFibonacciNumber);
            return nextFibonacciNumber;
        }
    };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13