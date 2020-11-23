function solve(string, startingIndex, elementsCount) {
    let result = string.substring(startingIndex, startingIndex + elementsCount);
    //let result = string.substr(startingIndex, elementsCount);
    console.log(result);
}

solve("ASentance", 1, 8);