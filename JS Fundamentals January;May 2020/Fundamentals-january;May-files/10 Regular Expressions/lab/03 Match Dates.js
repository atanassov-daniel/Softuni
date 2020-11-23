function solve(string) {
    // разликата на това и следващото е как взимам сепаратора - в едното е с или, а в другото както е най-добре -> с []  : : : :
    //let pattern = /\d{2}(?<separator>\.|-|\/)[A-Z][a-z]{2}\k<separator>\d{4}/g;
    let pattern = /\d{2}(?<separator>[-.\/])[A-Z][a-z]{2}\k<separator>\d{4}/g;

    let matchesArr = string[0].match(pattern);
    let splittedMatchesArr = matchesArr.map(element => element.split(/\.|-|\//));

    splittedMatchesArr.forEach(arr => console.log(`Day: ${arr[0]}, Month: ${arr[1]}, Year: ${arr[2]}`));
}

//solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");

solve(['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016']);