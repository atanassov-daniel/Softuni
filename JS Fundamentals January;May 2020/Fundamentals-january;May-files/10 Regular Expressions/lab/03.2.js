// малко по-адвансъд решение, от във файла с лаб-а предложенията
function solve(string) {
    let pattern = /\b(?<day>\d{2})(?<separator>[-.\/])(?<month>[A-Z][a-z]{2})\k<separator>(?<year>\d{4})\b/g;

    let result = pattern.exec(string);
    while (result !== null) {

        let day = result.groups['day'];
        let month = result.groups['month'];
        let year = result.groups['year'];

        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

        result = pattern.exec(string);
    }
}

solve("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");
// 1, 2 i 4
/* Day: 13, Month: Jul, Year: 1928
Day: 10, Month: Nov, Year: 1934
Day: 25, Month: Dec, Year: 1937
*/

//solve(['13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016']);