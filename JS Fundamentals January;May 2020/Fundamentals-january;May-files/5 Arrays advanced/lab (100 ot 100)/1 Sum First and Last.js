function solve(arrayOfNumbers) {
    let sum = Number(arrayOfNumbers[0]) + Number(arrayOfNumbers[arrayOfNumbers.length - 1]);
    // с новия материал:
    // let sum = Number(arrayOfNumbers[0]) + Number(arrayOfNumbers.pop());
    console.log(sum);
}

solve(['20', '30', '40']);
solve(['5', '10']);