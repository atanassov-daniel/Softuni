function solve(input) {
    let start = input.shift().charCodeAt(0);
    let end = input.shift().charCodeAt(0);
    let forbidden = input.shift().charCodeAt(0);
    let printed = 0;
    let result = "";
    let isForbidden = false;

    for (let i = start; i <= end; i++) {
        if (i == forbidden) {
            isForbidden = true;
        }
        for (let g = start; g <= end; g++) {
            if (g == forbidden) {
                isForbidden = true;
            }

            for (let k = start; k <= end; k++) {
                if (k == forbidden || g == forbidden || i == forbidden) {//важно, преди това беше само k==forbidden и излизаха и случаи с b
                    isForbidden = true;
                }

                if (isForbidden == true) {

                } else {
                    result += `${String.fromCharCode(i)}${String.fromCharCode(g)}${String.fromCharCode(k)} `;
                    printed++;
                }
                isForbidden = false;
            }
        }
    }
    console.log(result+printed)
}

solve([
    "a",
    "c",
    "b",

])