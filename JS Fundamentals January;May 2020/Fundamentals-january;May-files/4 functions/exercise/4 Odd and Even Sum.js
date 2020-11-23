function sumOfDigits(num) {
    num = String(num);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < num.length; i++) {
        let currentElement = Number(num[i]);

        if (currentElement % 2 === 0) {
            evenSum += currentElement;
        }else{
            oddSum += currentElement;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(sumOfDigits(1000435));
console.log(sumOfDigits(3495892137259234));


//аз си мислех, че е номерата на четни и нечетни позиции и не ми се получи, 
//а не четните и нечетните числа, добре, че го каза в клипчето, иначе нямаше да го реша никога
// function sumOfDigits(num) {
//     num = String(num);
//     let oddSum = 0;
//     let evenSum = 0;

//     for (let i = 0; i < num.length; i+=2) {
//         oddSum += Number(num[i]);
//     }
//     for (let i = 1; i < num.length; i+=2) {
//         evenSum += Number(num[i]);
//     }

//     return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
// }

// console.log(sumOfDigits(1000435));
// console.log(sumOfDigits(3495892137259234));