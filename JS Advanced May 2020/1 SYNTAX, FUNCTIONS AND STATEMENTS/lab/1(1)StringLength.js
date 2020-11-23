function solve(firstArg, secondArg, thirdArg) {
    // I did that thing with the funtion arguments so that I can reuse this as a template for things where I don't know how many arguments I will get as an input (but I think there was no sense in doing that, because I'm the one that writes what arguments the function will have???)

    // get an array with the function's arguments so thaht i can use forEach instead of some kind of loop
    let functionArguments = Array.from(solve.arguments);

    let sum = 0;
    // for each argument add its length to the total sum
    functionArguments.forEach(argument => sum += argument.length);

    // calculate the average length and round it down
    let averageLength = Math.floor(sum / functionArguments.length);

    // print the total sum, then on the next line the average length
    console.log(sum);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');