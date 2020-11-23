function solve(input) {
    let lastSector = input.shift().charCodeAt(0);
    let rowsA = Number(input.shift());
    let sitsOdd = Number(input.shift());
    let sitsEven = sitsOdd + 2;
    let result = "";
    let printed = 0;

    for (let i = 65; i <= lastSector; i++) {

        for (let rows = 1; rows <= rowsA; rows++) {

            for (let sits = 97; sits < (97 + sitsEven); sits++) {
                if (rows % 2 == 1) {
                    if (sits == (97 + sitsOdd)) {
                        break;
                    }
                }

                result = `${String.fromCharCode(i)}${rows}${String.fromCharCode(sits)}`;
                console.log(result)
                printed++;
            }
        }
        rowsA++;
    }
    console.log(printed);
}

solve([
    "B",
    "3",
    "2",
    //"C",
    //"4",
    //"2",
])