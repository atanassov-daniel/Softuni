function solve(firstArg, secondArg, thirdArg) {
    // calculate the sum of the lengths of the 3 strings
    let sum = firstArg.length + secondArg.length + thirdArg.length;

    // calculate the average length and round it down
    let averageLength = Math.floor(sum / 3);

    // print the total sum, then on the next line the average length
    console.log(sum);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');