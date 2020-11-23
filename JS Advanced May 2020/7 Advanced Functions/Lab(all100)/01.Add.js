function solution(num) {
    let number = num;

    return function (toAdd) {
        return number + toAdd;
    };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));