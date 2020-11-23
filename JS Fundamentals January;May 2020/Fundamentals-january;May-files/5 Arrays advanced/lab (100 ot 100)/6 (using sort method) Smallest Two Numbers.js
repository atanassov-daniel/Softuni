function solve(arrNumbers) {
    arrNumbers.sort((a, b) => a - b);
//Print without any methods
    //console.log(arrNumbers[0] + ' ' + arrNumbers[1]);

// Print(get the first two elements) using .slice()
    console.log(arrNumbers.slice(0, 2).join(' '));

}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);