function solve(input) {
    let letter = input.shift();
    let word = "";
    let result = "";
    let n = 0;
    let c = 0;
    let o = 0;

    while (letter != "End") {
        if (letter.toUpperCase() != letter.toLowerCase()) {//важно
            if (letter == "n") {
                n++;
            } else if (letter == "c") {
                c++;
            } else if (letter == "o") {
                o++;
            }

            if (letter !== "o" && letter !== "c" && letter !== "n") {
                word += letter;
            } else if (letter === "n" && n > 1) {
                word += letter;
            } else if (letter === "c" && c > 1) {
                word += letter;
            } else if (letter === "o" && o > 1) {
                word += letter;
            }
        }


        if (n >= 1 && c >= 1 && o >= 1) {
            result += `${word} `;
            word = "";
            n = 0;
            c = 0;
            o = 0;
        }
        letter = input.shift();
    }
    console.log(result);
}




solve([
    //"H",
    //"n",
    //"e",
    //"l",
    //"l",
    //"o",
    //"o",
    //"c",
    //"t",
    //"c",
    //"h",
    //"o",
    //"e",
    //"r",
    //"e",
    //"n",
    //"e",
    //"End",
    "%",
    "!",
    "c",
    "^",
    "B",
    "`",
    "o",
    "%",
    "o",
    "o",
    "M",
    ")",
    "{",
    "n",
    "\\",
    "A",
    "D",
    "End",

])